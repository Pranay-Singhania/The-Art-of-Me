import React from "react";
import "./HomePage.css";
import EastIcon from "@mui/icons-material/East";
import img1 from "../../assets/images/heroimg.png";

const HomePage = () => {
  return (
    <section className="home-section">
      <div className="home-page">
        <h1>
          Hi, I'm &nbsp;
          <span style={{ color: "var(--neon)" }}>Pranay</span>
          <br />
          I'm a frontend developer.
        </h1>
        <a>
          <button className="hero-btn slide-btn flex-center">
            <span>View Work &nbsp;</span>
            <span>
              <EastIcon style={{ marginTop: "5px" }} />
            </span>
          </button>
        </a>
      </div>
      <div className="home-page-img">
        <img src={img1} width="400px" alt="not loaded" />
      </div>
    </section>
  );
};

export default HomePage;
