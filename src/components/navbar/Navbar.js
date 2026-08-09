import React, { useContext, useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ThemeContext } from "../../App";
import { usePortfolio } from "../../context/PortfolioContext";

const NAV_LINKS = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#experience", label: "Experience" },
  { to: "#skills", label: "Skills" },
  { to: "#stack", label: "Stack" },
  { to: "#ask", label: "Ask Ravi AI" },
  { to: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const portfolio = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const brand = portfolio.greeting?.name?.split(" ")[0] || "Ravi";

  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = "88px";
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.to.slice(1));

    const sectionTop = (el) =>
      el.getBoundingClientRect().top + window.scrollY;

    const syncActive = () => {
      const probe = window.scrollY + 140;
      let current = `#${ids[0]}`;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (sectionTop(el) <= probe) current = `#${id}`;
      }

      const doc = document.documentElement;
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 64) {
        current = `#${ids[ids.length - 1]}`;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    window.addEventListener("hashchange", syncActive);
    const boot = window.setTimeout(syncActive, 80);
    return () => {
      window.clearTimeout(boot);
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
      window.removeEventListener("hashchange", syncActive);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const goTo = (hash) => {
    setActive(hash);
    closeMenu();
  };

  return (
    <header className="pill-nav">
      <Link to="#home" className="pill-nav__brand" smooth onClick={closeMenu}>
        {brand}
        <span>.</span>
      </Link>

      <nav className="pill-nav__shell" aria-label="Primary">
        <div className="pill-nav__links">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              className={active === item.to ? "is-active" : ""}
              onClick={() => goTo(item.to)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="pill-nav__actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <span className="theme-toggle__track">
            <span
              className={`theme-toggle__thumb ${
                theme === "dark" ? "is-dark" : ""
              }`}
            />
          </span>
        </button>
        <button
          type="button"
          className={`pill-nav__burger ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`pill-nav__drawer ${menuOpen ? "is-open" : ""}`}>
        {NAV_LINKS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth
            className={active === item.to ? "is-active" : ""}
            onClick={() => goTo(item.to)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
