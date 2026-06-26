import { GoogleGenAI } from "@google/genai";
import { portfolioKnowledgeText } from "../src/data/portfolioKnowledge.js";

const DEFAULT_GEMINI_MODEL = "gemini-2.0-flash";
const MAX_MESSAGE_LENGTH = 600;
const MAX_HISTORY_MESSAGES = 4;
const MAX_REQUEST_BYTES = 8_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const rateLimitStore = new Map();

const systemPrompt = `
You are Michael's portfolio assistant.
Answer only from PORTFOLIO_KNOWLEDGE.
If unavailable, politely say that the information is not available.
Be concise, friendly, and useful. Do not invent facts.

PORTFOLIO_KNOWLEDGE:
${portfolioKnowledgeText}
`.trim();

function sendJson(res, statusCode, payload) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return res.status(statusCode).json(payload);
}

function sendError(
  res,
  statusCode,
  message,
  error = message,
  details = undefined,
) {
  return sendJson(res, statusCode, {
    success: false,
    message,
    error,
    ...(details ? { details } : {}),
  });
}

function getGeminiModel() {
  return (process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL).trim();
}

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY?.trim() || "";
}

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

function createGeminiInput(message, history) {
  const historyText = formatHistoryForPrompt(history);

  if (!historyText) {
    return message;
  }

  return `Recent conversation:\n${historyText}\n\nCurrent user question:\n${message}`;
}

function isDevelopment() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.VERCEL_ENV !== "production"
  );
}

export default async function handler(req, res) {
  const startedAt = Date.now();

  try {
    res.setHeader("Cache-Control", "no-store");
    const geminiApiKey = getGeminiApiKey();
    console.info("Portfolio chat request received", {
      method: req.method,
      url: req.url,
      contentType: req.headers["content-type"],
      contentLength: req.headers["content-length"],
      hasGeminiKey: Boolean(geminiApiKey),
    });

    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return sendError(
        res,
        405,
        "Method not allowed.",
        "Use POST for this endpoint.",
      );
    }

    const contentLength = Number(req.headers["content-length"] || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return sendError(
        res,
        413,
        "Request is too large.",
        "The request body exceeded the size limit.",
      );
    }

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

    if (!geminiApiKey) {
      if (isDevelopment()) {
        console.error("Portfolio chat configuration error", {
          reason: "GEMINI_API_KEY is missing.",
        });
      }
      return sendError(res, 500, "Gemini API key is not configured.");
    }

    const body = await readRequestBody(req);
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return sendError(
        res,
        400,
        "Message is required.",
        "The message field was empty.",
      );
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
    const model = getGeminiModel();
    console.info("Portfolio chat forwarding request to Gemini", {
      model,
      messageLength: message.length,
      historyLength: history.length,
    });

    const ai = new GoogleGenAI({
      apiKey: geminiApiKey,
    });

    const response = await ai.models.generateContent({
      model,
      contents: `${systemPrompt}

${createGeminiInput(message, history)}`,
    });

    const answer = response.text;

    if (!answer?.trim()) {
      return sendError(
        res,
        502,
        "Gemini returned an empty response.",
        "Gemini returned an empty response.",
      );
    }

    console.info("Portfolio chat response generated", {
      answerLength: answer.length,
    });

    return sendJson(res, 200, {
      success: true,
      message: answer,
      answer,
      provider: "gemini",
      model,
    });
  } catch (error) {
    if (isDevelopment()) {
      console.error("Portfolio chat error", error);
    }

    if (res.writableEnded) {
      return res;
    }

    const errorMessage =
      error.message || "Something went wrong while sending your message.";
    return sendError(res, 500, errorMessage, errorMessage);
  } finally {
    console.info("Portfolio chat request completed", {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      durationMs: Date.now() - startedAt,
    });
  }
}
