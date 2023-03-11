import React from "react";
import "./HomePage.css";
import EastIcon from "@mui/icons-material/East";
import img1 from "../../assets/images/heroimg.png";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <section className="home-section" name="home">
      <div className="home-page">
        <h1>
          <span className="first-block">Hi, I'm &nbsp;</span>
          <span className="second-block">
            <span style={{ color: "var(--neon)" }}>Pranay</span>
          </span>
          <br />
          <span className="third-block">I'm a frontend developer.</span>
        </h1>
        <a className="fourth-block">
          <Link to="projects" smooth={true}>
            <button className="hero-btn slide-btn flex-center">
              <span>View Work &nbsp;</span>
              <span>
                <EastIcon style={{ marginTop: "5px" }} />
              </span>
            </button>
          </Link>
        </a>
      </div>
      <div className="home-page-img">
        <img src={img1} width="400px" alt="not loaded" />
      </div>
    </section>
  );
};

export default HomePage;
