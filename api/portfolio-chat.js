import { GoogleGenAI } from "@google/genai";
import { portfolioKnowledgeText } from "../src/data/portfolioKnowledge.js";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 600;
const MAX_HISTORY_MESSAGES = 4;
const MAX_REQUEST_BYTES = 8_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;

// ---------------------------------------------------------------------------
// Rate limiter (in-memory, per Vercel instance)
// ---------------------------------------------------------------------------

const rateLimitStore = new Map();

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------

const systemPrompt = `
You are Michael's portfolio assistant.
Answer only from PORTFOLIO_KNOWLEDGE.
If unavailable, politely say that the information is not available.
Be concise, friendly, and useful. Do not invent facts.

PORTFOLIO_KNOWLEDGE:
${portfolioKnowledgeText}
`.trim();

// ---------------------------------------------------------------------------
// Helpers – JSON responses
// ---------------------------------------------------------------------------

function sendJson(res, statusCode, payload) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return res.status(statusCode).json(payload);
}

function sendError(res, statusCode, message, error = message, details) {
  return sendJson(res, statusCode, {
    success: false,
    message,
    error,
    ...(details ? { details } : {}),
  });
}

// ---------------------------------------------------------------------------
// Helpers – environment
// ---------------------------------------------------------------------------

function getGeminiModel() {
  return (process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL).trim();
}

function getGeminiApiKey() {
  const key = process.env.GEMINI_API_KEY?.trim() || "";
  // Treat the placeholder value as missing
  if (key === "your_gemini_api_key_here") return "";
  return key;
}

function isDevelopment() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.VERCEL_ENV !== "production"
  );
}

// ---------------------------------------------------------------------------
// Helpers – request parsing
// ---------------------------------------------------------------------------

function getClientId(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function checkRateLimit(clientId) {
  const now = Date.now();
  const entry = rateLimitStore.get(clientId);

  if (!entry || now - entry.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(clientId, { count: 1, startedAt: now });
    return { limited: false };
  }

  entry.count += 1;

  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - entry.startedAt);
    return {
      limited: true,
      retryAfterSeconds: Math.max(Math.ceil(retryAfterMs / 1000), 1),
    };
  }

  return { limited: false };
}

async function readRequestBody(req) {
  if (req.body) {
    return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
}

// ---------------------------------------------------------------------------
// Helpers – conversation history
// ---------------------------------------------------------------------------

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .map((item) => ({
      role: item?.role === "assistant" ? "assistant" : "user",
      content:
        typeof item?.content === "string"
          ? item.content.trim().slice(0, MAX_MESSAGE_LENGTH)
          : "",
    }))
    .filter((item) => item.content.length > 0);
}

function formatHistoryForPrompt(history) {
  if (history.length === 0) return "";

  return history
    .map(
      (item) =>
        `${item.role === "assistant" ? "Assistant" : "User"}: ${item.content}`,
    )
    .join("\n");
}

function buildUserContents(message, history) {
  const historyText = formatHistoryForPrompt(history);

  if (!historyText) {
    return message;
  }

  return `Recent conversation:\n${historyText}\n\nCurrent user question:\n${message}`;
}

// ---------------------------------------------------------------------------
// Helpers – SDK error classification
// ---------------------------------------------------------------------------

function classifyGeminiError(error) {
  const msg = (error.message || "").toLowerCase();
  const status = error.status || error.httpStatusCode || 0;

  if (status === 401 || status === 403 || msg.includes("api key")) {
    return {
      statusCode: 502,
      message: "The Gemini API key is invalid or unauthorized.",
    };
  }

  if (status === 404 || msg.includes("not found") || msg.includes("is not found")) {
    return {
      statusCode: 502,
      message: "The configured Gemini model is not available. Please check the model name.",
    };
  }

  if (status === 429 || msg.includes("rate limit") || msg.includes("quota")) {
    return {
      statusCode: 429,
      message: "Gemini API rate limit exceeded. Please try again later.",
    };
  }

  return {
    statusCode: 502,
    message: "Failed to get a response from Gemini. Please try again.",
  };
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(req, res) {
  const startedAt = Date.now();
  const model = getGeminiModel();
  const geminiApiKey = getGeminiApiKey();

  try {
    res.setHeader("Cache-Control", "no-store");

    // -- Development logging: startup context --------------------------------
    if (isDevelopment()) {
      console.info("[portfolio-chat] Request received", {
        method: req.method,
        contentType: req.headers["content-type"],
        model,
        hasApiKey: Boolean(geminiApiKey),
      });
    }

    // -- Method check --------------------------------------------------------
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return sendError(res, 405, "Method not allowed.", "Use POST for this endpoint.");
    }

    // -- Payload size check --------------------------------------------------
    const contentLength = Number(req.headers["content-length"] || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return sendError(
        res,
        413,
        "Request is too large.",
        "The request body exceeded the size limit.",
      );
    }

    // -- Rate limit ----------------------------------------------------------
    const rateLimit = checkRateLimit(getClientId(req));
    if (rateLimit.limited) {
      res.setHeader("Retry-After", String(rateLimit.retryAfterSeconds));
      return sendError(
        res,
        429,
        "Too many requests. Please wait a moment before trying again.",
        "Rate limit exceeded.",
      );
    }

    // -- API key validation --------------------------------------------------
    if (!geminiApiKey) {
      if (isDevelopment()) {
        console.error("[portfolio-chat] GEMINI_API_KEY is missing or placeholder.");
      }
      return sendError(res, 500, "Gemini API key is not configured.");
    }

    // -- Parse & validate body -----------------------------------------------
    const body = await readRequestBody(req);
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return sendError(res, 400, "Message is required.", "The message field was empty.");
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return sendError(
        res,
        400,
        `Message must be ${MAX_MESSAGE_LENGTH} characters or less.`,
        "The message exceeded the maximum length.",
      );
    }

    const history = sanitizeHistory(body.history);

    if (isDevelopment()) {
      console.info("[portfolio-chat] Sending request to Gemini", {
        model,
        messageLength: message.length,
        historyLength: history.length,
      });
    }

    // -- Call Gemini via SDK --------------------------------------------------
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });

    const response = await ai.models.generateContent({
      model,
      contents: buildUserContents(message, history),
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const answer = response.text?.trim() || "";

    if (!answer) {
      return sendError(
        res,
        502,
        "Gemini returned an empty response.",
        "Gemini returned an empty response.",
      );
    }

    // -- Development logging: success ----------------------------------------
    if (isDevelopment()) {
      console.info("[portfolio-chat] Response generated", {
        answerLength: answer.length,
        durationMs: Date.now() - startedAt,
      });
    }

    return sendJson(res, 200, {
      success: true,
      message: answer,
      answer,
      provider: "gemini",
      model,
    });
  } catch (error) {
    // -- Development logging: error ------------------------------------------
    if (isDevelopment()) {
      console.error("[portfolio-chat] Gemini SDK error", {
        name: error.name,
        message: error.message,
        status: error.status || error.httpStatusCode,
        durationMs: Date.now() - startedAt,
      });
    }

    if (res.writableEnded) {
      return res;
    }

    const classified = classifyGeminiError(error);
    return sendError(res, classified.statusCode, classified.message, classified.message);
  } finally {
    console.info("[portfolio-chat] Request completed", {
      method: req.method,
      statusCode: res.statusCode,
      durationMs: Date.now() - startedAt,
    });
  }
}
