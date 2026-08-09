import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import useReveal from "../../hooks/useReveal";

const Stack = () => {
  const { ref, visible } = useReveal();
  const { tools } = usePortfolio();

  if (!tools?.length) return null;

  return (
    <section
      id="stack"
      className={`section stack reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="section-kicker">Toolkit</p>
      <h2 className="section-heading">Systems I ship with</h2>
      <p className="section-lede">
        Platforms and practices behind multi-tenant SaaS, event pipelines, and
        AI-assisted delivery.
      </p>

      <div className="stack__grid">
        {tools.map((tool, index) => (
          <article
            className="stack__card"
            key={tool.name}
            style={{ "--i": index }}
          >
            <span className="stack__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{tool.name}</h3>
            <p>{tool.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stack;
