import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const CHAPTERS = [
  { to: "#home", label: "01", name: "Intro" },
  { to: "#about", label: "02", name: "About" },
  { to: "#experience", label: "03", name: "Work" },
  { to: "#skills", label: "04", name: "Skills" },
  { to: "#stack", label: "05", name: "Stack" },
  { to: "#ask", label: "06", name: "Ask AI" },
  { to: "#contact", label: "07", name: "Contact" },
];

const SideRail = () => {
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ids = CHAPTERS.map((c) => c.to.slice(1));
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.2, 0.4, 0.55], rootMargin: "-10% 0px -35% 0px" }
    );

    nodes.forEach((n) => observer.observe(n));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="film-rail" aria-label="Story chapters">
        {CHAPTERS.map((chapter) => (
          <Link
            key={chapter.to}
            to={chapter.to}
            smooth
            className={`film-rail__link ${
              active === chapter.to ? "is-active" : ""
            }`}
          >
            <span className="film-rail__index">{chapter.label}</span>
            <span className="film-rail__name">{chapter.name}</span>
          </Link>
        ))}
      </nav>

      <nav className="film-dots" aria-label="Jump to chapter">
        {CHAPTERS.map((chapter) => (
          <Link
            key={chapter.to}
            to={chapter.to}
            smooth
            className={`film-dots__item ${
              active === chapter.to ? "is-active" : ""
            }`}
            aria-label={chapter.name}
          />
        ))}
      </nav>
    </>
  );
};

export default SideRail;
