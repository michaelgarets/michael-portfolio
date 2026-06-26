import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greeting =
  "Hi, I'm Michael's. Feel free to ask about projects, skills, experience, or how to get in touch.";

const exampleQuestions = [
  "Tell me about Michael.",
  "What projects has he built?",
  "What technologies does he use?",
  "Is he looking for internship opportunities?",
  "How can I contact him?",
];

const messageMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.2 },
};

async function readChatResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");

  if (!isJson) {
    const responseText = await response.text().catch(() => "");
    console.error("Portfolio chat returned a non-JSON response", {
      status: response.status,
      contentType,
      bodyPreview: responseText.slice(0, 160),
    });
    throw new Error("The assistant returned an unexpected response. Please try again.");
  }

  const responseText = await response.text();

  if (!responseText.trim()) {
    console.error("Portfolio chat returned an empty JSON response", {
      status: response.status,
    });
    throw new Error("The assistant returned an empty response. Please try again.");
  }

  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Portfolio chat returned invalid JSON", {
      status: response.status,
      error: error.message,
      bodyPreview: responseText.slice(0, 160),
    });
    throw new Error("The assistant returned an invalid response. Please try again.");
  }
}

function TypingIndicator() {
  return (
    <div className="assistant-bubble assistant-bubble-assistant assistant-typing" aria-label="Assistant is typing">
      <span />
      <span />
      <span />
    </div>
  );
}

function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      {...messageMotion}
      className={`assistant-message-row ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`assistant-bubble ${
          isUser ? "assistant-bubble-user" : "assistant-bubble-assistant"
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "greeting",
      role: "assistant",
      content: greeting,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const conversationHistory = useMemo(
    () =>
      messages
        .filter((message) => message.id !== "greeting")
        .slice(-6)
        .map(({ role, content }) => ({ role, content })),
    [messages],
  );

  const openAssistant = () => {
    setIsOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 120);
  };

  const submitMessage = async (messageText) => {
    const nextMessage = messageText.trim();

    if (!nextMessage || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: nextMessage.slice(0, 600),
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: conversationHistory,
        }),
      });

      if (!response.ok) {
        const errorData = await readChatResponse(response);
        throw new Error(
          errorData?.error || errorData?.message || "The assistant is unavailable.",
        );
      }

      const data = await readChatResponse(response);

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.answer || data.message || "I don't have information about that.",
        },
      ]);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMessage(input);
  };

  return (
    <div className="portfolio-assistant" aria-live="polite">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="assistant-panel"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            aria-label="Michael portfolio assistant"
          >
            <header className="assistant-header">
              <div>
                <p className="assistant-kicker">Portfolio AI</p>
                <h2>Ask Michael's</h2>
              </div>
              <button
                type="button"
                className="assistant-icon-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close portfolio assistant"
              >
                <span aria-hidden="true">x</span>
              </button>
            </header>

            <div className="assistant-messages">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && <TypingIndicator key="typing" />}
              </AnimatePresence>
            </div>

            <div className="assistant-examples" aria-label="Example questions">
              {exampleQuestions.map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => submitMessage(question)}
                  disabled={isLoading}
                >
                  {question}
                </button>
              ))}
            </div>

            {error && (
              <div className="assistant-error" role="alert">
                {error}
              </div>
            )}

            <form className="assistant-form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => {
                  setInput(event.target.value.slice(0, 600));
                  setError("");
                }}
                placeholder="Ask about Michael..."
                maxLength={600}
                disabled={isLoading}
                aria-label="Ask Michael's portfolio assistant"
              />
              <button type="submit" disabled={!input.trim() || isLoading}>
                {isLoading ? "..." : "Send"}
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="assistant-launcher"
        onClick={openAssistant}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        aria-expanded={isOpen}
        aria-label="Open Michael portfolio assistant"
      >
        <span className="assistant-launcher-mark" aria-hidden="true">
          AI
        </span>
        <span>Ask</span>
      </motion.button>
    </div>
  );
}
