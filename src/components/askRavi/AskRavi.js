import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { answerAboutRavi, SUGGESTED_PROMPTS } from "../../utils/askRavi";

const AskRavi = () => {
  const portfolio = usePortfolio();
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "I’m Ravi’s interactive portfolio copilot. Ask about his AI work, experience, or stack — I’ll answer from this site’s data.",
    },
  ]);
  const endRef = useRef(null);
  const busyRef = useRef(false);
  const portfolioRef = useRef(portfolio);

  useEffect(() => {
    portfolioRef.current = portfolio;
  }, [portfolio]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  const pushAnswer = useCallback((question) => {
    const q = question.trim();
    if (!q || busyRef.current) return;

    busyRef.current = true;
    setBusy(true);
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setInput("");

    window.setTimeout(() => {
      const answer = answerAboutRavi(q, portfolioRef.current);
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
      busyRef.current = false;
      setBusy(false);
    }, 320);
  }, []);

  useEffect(() => {
    const onExternalAsk = (event) => {
      const q = event.detail?.question;
      if (q) pushAnswer(q);
    };
    window.addEventListener("ask-ravi:query", onExternalAsk);
    return () => window.removeEventListener("ask-ravi:query", onExternalAsk);
  }, [pushAnswer]);

  const onSubmit = (e) => {
    e.preventDefault();
    pushAnswer(input);
  };

  return (
    <section id="ask" className="section ask-ravi" aria-label="Ask Ravi AI">
      <p className="section-kicker">Interactive</p>
      <h2 className="section-heading">Ask Ravi AI</h2>
      <p className="section-lede">
        Type a question or tap a prompt — a live demo of grounded AI answers from
        my resume data on this site.
      </p>

      <div className="ask-ravi__panel">
        <div className="ask-ravi__prompts" aria-label="Suggested questions">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="ask-ravi__chip"
              onClick={() => pushAnswer(prompt)}
              disabled={busy}
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="ask-ravi__thread" role="log" aria-live="polite">
          {messages.map((msg, index) => (
            <div
              key={`${msg.role}-${index}`}
              className={`ask-ravi__bubble ask-ravi__bubble--${msg.role}`}
            >
              <span className="ask-ravi__who">
                {msg.role === "user" ? "You" : "Ravi AI"}
              </span>
              <p>{msg.text}</p>
            </div>
          ))}
          {busy ? (
            <div className="ask-ravi__bubble ask-ravi__bubble--assistant is-typing">
              <span className="ask-ravi__who">Ravi AI</span>
              <p>Thinking…</p>
            </div>
          ) : null}
          <div ref={endRef} />
        </div>

        <form className="ask-ravi__form" onSubmit={onSubmit}>
          <label className="visually-hidden" htmlFor="ask-ravi-input">
            Ask a question
          </label>
          <input
            id="ask-ravi-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. What AI workflows have you shipped?"
            autoComplete="off"
            disabled={busy}
          />
          <button type="submit" className="btn btn-primary" disabled={busy || !input.trim()}>
            Ask
          </button>
        </form>
      </div>
    </section>
  );
};

export default AskRavi;
