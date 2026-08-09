import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import Editor from "../Common/editor/Editor";
import Marquee from "../marquee/Marquee";
import gitHub from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import email from "../../images/email.svg";

const Home = () => {
  const portfolio = usePortfolio();
  const { greeting, socials, editor, metrics } = portfolio;
  const resumeHref = greeting.resumeUrl || socials.linkedin;
  const firstName = greeting.name.split(" ")[0];

  return (
    <section className="hero" id="home">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__spotlight" aria-hidden="true" />

      <div className="hero__grid">
        <div className="hero__copy hero-enter">
          <p className="hero__salutation">
            {greeting.salutation} {firstName}
          </p>
          <h1 className="hero__name">{greeting.name}</h1>
          <p className="hero__display" aria-label={greeting.role}>
            <span>{greeting.displayLine1 || "FULL-STACK"}</span>
            <span>{greeting.displayLine2 || "AI ENGINEER"}</span>
          </p>
          <p className="hero__role">{greeting.role}</p>
          <p className="hero__tagline">{greeting.tagline}</p>

          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a className="btn btn-ghost" href="#ask">
              Ask Ravi AI
            </a>
            <a className="btn btn-ghost" href="#contact">
              Let&apos;s work together
            </a>
          </div>

          <div className="social-row">
            <a href={socials.email} aria-label="Email" className="social-link">
              <img src={email} alt="" width="22" height="22" />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <img src={gitHub} alt="" width="22" height="22" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <img src={linkedin} alt="" width="22" height="22" />
            </a>
          </div>
        </div>

        <div className="hero__visual hero-enter hero-enter--delay">
          <Editor data={editor} />
          <div className="hero__metrics">
            {(metrics || []).slice(0, 3).map((m) => (
              <div className="hero__metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default Home;
