import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import portfolioChatHandler from "./api/portfolio-chat.js";

function attachVercelResponseHelpers(res) {
  res.status = (statusCode) => {
    res.statusCode = statusCode;
    return res;
  };

  res.json = (payload) => {
    if (!res.headersSent) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
    }
    res.end(JSON.stringify(payload));
    return res;
  };

  return res;
}

function hasConfiguredGeminiKey() {
  const apiKey = process.env.GEMINI_API_KEY?.trim() || "";
  return Boolean(apiKey && apiKey !== "your_gemini_api_key_here");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  for (const key of ["GEMINI_API_KEY", "GEMINI_MODEL"]) {
    if (env[key] && !process.env[key]) {
      process.env[key] = env[key];
    }
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "portfolio-chat-local-api",
        configureServer(server) {
          server.middlewares.use("/api/portfolio-chat", async (req, res) => {
            const startedAt = Date.now();
            console.info("[vite-api] /api/portfolio-chat request", {
              method: req.method,
              url: req.url,
              contentType: req.headers["content-type"],
              hasGeminiKey: hasConfiguredGeminiKey(),
            });

            try {
              await portfolioChatHandler(req, attachVercelResponseHelpers(res));
            } catch (error) {
              console.error("[vite-api] /api/portfolio-chat unhandled error", error);

              if (!res.headersSent) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json; charset=utf-8");
              }

              if (!res.writableEnded) {
                const errorMessage = error.message || "Local API route crashed.";
                res.end(
                  JSON.stringify({
                    success: false,
                    message: errorMessage,
                    error: errorMessage,
                  }),
                );
              }
            } finally {
              console.info("[vite-api] /api/portfolio-chat completed", {
                method: req.method,
                statusCode: res.statusCode,
                durationMs: Date.now() - startedAt,
              });
            }
          });
        },
      },
    ],
  };
});
