import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import useReveal from "../../hooks/useReveal";

const AboutMe = () => {
  const { ref, visible } = useReveal();
  const { about } = usePortfolio();

  return (
    <section
      id="about"
      className={`section about reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="section-kicker">About</p>
      <h2 className="section-heading">Built for scale &amp; clarity</h2>
      <p className="section-lede">
        Systems thinker focused on reliability, authorization, and shipping at
        scale.
      </p>
      <div className="about__body">
        {about.paragraphs.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
