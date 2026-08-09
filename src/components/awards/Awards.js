import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import useReveal from "../../hooks/useReveal";

const Awards = () => {
  const { ref, visible } = useReveal();
  const { awards, education } = usePortfolio();

  return (
    <section
      id="awards"
      className={`section awards reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="section-kicker">Recognition</p>
      <h2 className="section-heading">Awards & Education</h2>
      <p className="section-lede">Recognition and foundation.</p>

      <div className="awards__layout">
        <div>
          <h3 className="awards__subhead">Certifications & awards</h3>
          <ul className="awards__list">
            {awards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="awards__education">
          <h3 className="awards__subhead">Education</h3>
          <p className="awards__degree">{education.degree}</p>
          <p className="awards__school">{education.school}</p>
          <p className="awards__detail">
            {education.period} · {education.detail}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
