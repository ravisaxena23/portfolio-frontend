import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import useReveal from "../../hooks/useReveal";

const Experience = () => {
  const { ref, visible } = useReveal();
  const { experience } = usePortfolio();

  return (
    <section
      id="experience"
      className={`section experience reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="section-kicker">Career</p>
      <h2 className="section-heading">Work experience</h2>
      <p className="section-lede">
        Enterprise SaaS and HR-tech platforms — APIs, events, and product UI.
      </p>

      <ol className="timeline">
        {experience.map((job, index) => (
          <li
            className="timeline__item"
            key={job.company}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__company">{job.company}</h3>
                  <p className="timeline__role">
                    {job.role} · {job.context}
                  </p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  {job.highlight ? (
                    <span className="timeline__badge">{job.highlight}</span>
                  ) : null}
                </div>
              </div>

              <ul className="timeline__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 40)}>{bullet}</li>
                ))}
              </ul>

              <div className="timeline__tech">
                {job.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
