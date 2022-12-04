import React from "react";
import footer from "../../images/footerDesgin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src={footer} alt="footer" />
      <div className="display-flex footer-info hide-on-small-only">Made with love and React by Ravi Saxena</div>
    </div>
  );
};

export default Footer;
