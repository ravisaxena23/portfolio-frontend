import { React, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Toolbar from "../Common/Toolbar/Toolbar";

const Navbar = (props) => {
  const [hideMenu, setHideMenu] = useState(true);

  const toggleMenu = () => {
    setHideMenu((curr) => (curr === false ? true : false));
  };

  return (
    <div>
      <nav className="hide-on-small-only">
        <div className="navbar-fixed">
          {/* <a href="#" className="brand-logo">Logo</a> */}
          <ul className="right hide-on-small">
            <li className="navbar-item">
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#aboutMe" className="">
                About Me
              </Link>
            </li>
            <li>
              <Link to="#experience" className="">
                Experince
              </Link>
            </li>
            <li>
              <Link to="" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link to="" className="">
                Contact
              </Link>
            </li>
            <li style={{ paddingTop: "12px" }}>
              <Toolbar toggleTheme={props.toggleTheme}></Toolbar>
            </li>
          </ul>
        </div>
      </nav>
      <div className="show-on-small hide-on-med-and-up z-depth-5">
      <button className = "mobile-theme-button"
       onClick={() => props.toggleTheme("dark")}>
        {/* <img src = {filledBulb}  alt="bulb" height="40px" width="35px"/> */}
      </button>
      </div>
      <div
        className="show-on-small hide-on-med-and-up bottom-menu z-depth-5"
        onClick={toggleMenu}
      >
        <div className="menu-btn ">
          <div className="menu-btn__burger z-depth-4"></div>
        </div>
      </div>
      <div className="show-on-small hide-on-med-and-up">
        <ul
          className={`hamburger-menu && ${hideMenu ? "is-close" : "is-open"}`}
        >
          <li className="menu-item">
            <Link to="#home" className="padding-10 hamburger-link" smooth>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="#aboutMe" className="padding-10 hamburger-link">
              About Me
            </Link>
          </li>
          <li className="menu-item">
            <Link to="#experience" className="padding-10 hamburger-link">
              Experince
            </Link>
          </li>
          <li className="menu-item">
            <Link to="" className="padding-10 hamburger-link">
              Projects
            </Link>
          </li>
          <li className="menu-item" style={{ paddingBottom: "0px" }}>
            <Link to="" className="padding-10 hamburger-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
