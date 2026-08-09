import React, { useEffect, useState } from "react";
import { SUGGESTED_PROMPTS } from "../../utils/askRavi";

const dispatchAsk = (question) => {
  const q = (question || "").trim();
  if (!q) return;
  window.dispatchEvent(new CustomEvent("ask-ravi:query", { detail: { question: q } }));
  if (window.location.hash !== "#ask") {
    window.location.hash = "ask";
  } else {
    document.getElementById("ask")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/** Hero Ask Ravi AI strip — replaces the static tech ticker. */
const Marquee = () => {
  const [input, setInput] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPromptIndex((i) => (i + 1) % SUGGESTED_PROMPTS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const q = input.trim() || SUGGESTED_PROMPTS[promptIndex];
    setInput("");
    dispatchAsk(q);
  };

  return (
    <div className="ask-rail" aria-label="Ask Ravi AI">
      <div className="ask-rail__inner">
        <div className="ask-rail__brand">
          <span className="ask-rail__pulse" aria-hidden="true" />
          <span className="ask-rail__title">Ask Ravi AI</span>
        </div>

        <p className="ask-rail__hint" aria-live="polite">
          Try:&nbsp;
          <button
            type="button"
            className="ask-rail__sample"
            onClick={() => dispatchAsk(SUGGESTED_PROMPTS[promptIndex])}
          >
            “{SUGGESTED_PROMPTS[promptIndex]}”
          </button>
        </p>

        <form className="ask-rail__form" onSubmit={onSubmit}>
          <label className="visually-hidden" htmlFor="ask-rail-input">
            Ask about Ravi’s work
          </label>
          <input
            id="ask-rail-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI, Simpplr, stack…"
            autoComplete="off"
          />
          <button type="submit" className="ask-rail__go">
            Ask
          </button>
        </form>
      </div>
    </div>
  );
};

export default Marquee;
