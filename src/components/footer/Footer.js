import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const Footer = () => {
  const portfolio = usePortfolio();
  const year = new Date().getFullYear();
  const name = portfolio.greeting?.name || "Ravi Saxena";

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          © {year} {name}. Built with React.
        </p>
        <p className="site-footer__note">Systems in motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
