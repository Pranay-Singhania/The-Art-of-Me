import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="home" smooth={true}>
          pranay-singhania.com
        </Link>
      </div>
      <div className="nav-right">
        <span className="nav-link underline-btn">
          <Link to="about" smooth={true} duration={250}>
            about
          </Link>
        </span>
        <span className="nav-link underline-btn">
          <Link to="skills" smooth={true} duration={250}>
            skills
          </Link>
        </span>
        <span className="nav-link underline-btn">
          <Link to="projects" smooth={true} duration={250}>
            projects
          </Link>
        </span>
        <span className="nav-link underline-btn">
          <Link to="contact" smooth={true} duration={250}>
            contact
          </Link>
        </span>
        <button className="nav-resume-btn slide-btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
