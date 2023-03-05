import React from "react";
import "./SkillsPage.css";
import {
  html_icon,
  css_icon,
  js_icon,
  react_icon,
  redux_icon,
  sass_icon,
  parcel_icon,
  ts_icon,
} from "../../utils/images";

const SkillsPage = () => {
  return (
    <section className="skills-section">
      <div className="skills-page">
        <h1>Skills</h1>
        <div className="skills-icons-set">
          <div className="skills-icons-set-known flex-row-center">
            <div className="skills-icon">
              <img src={html_icon} width="48px" alt="" />
              <span>HTML</span>
            </div>
            <div className="skills-icon">
              <img src={css_icon} width="48px" alt="" />
              <span>CSS</span>
            </div>
            <div className="skills-icon">
              <img src={js_icon} width="48px" alt="" />
              <span>Javascript</span>
            </div>
            <div className="skills-icon">
              <img src={react_icon} width="48px" alt="" />
              <span>React</span>
            </div>
            <div className="skills-icon">
              <img src={redux_icon} width="48px" alt="" />
              <span>Redux</span>
            </div>
          </div>
          <div className="skills-icons-set-familiar flex-row-center">
            <p>Also familiar with - </p>
            <div className="skills-icon">
              <img src={sass_icon} width="48px" alt="" />
              <span>SASS</span>
            </div>
            <div className="skills-icon">
              <img src={parcel_icon} width="48px" alt="" />
              <span>Parcel</span>
            </div>
            <div className="skills-icon">
              <img src={ts_icon} width="43px" alt="" />
              <span>Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
