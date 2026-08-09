import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import useReveal from "../../hooks/useReveal";

const Impact = () => {
  const { ref, visible } = useReveal();
  const { metrics } = usePortfolio();

  return (
    <section
      id="impact"
      className={`section impact reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
      aria-label="Impact metrics"
    >
      <p className="section-kicker">Impact</p>
      <div className="impact__grid">
        {metrics.map((metric) => (
          <div className="impact__item" key={metric.label}>
            <p className="impact__value">{metric.value}</p>
            <p className="impact__label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
