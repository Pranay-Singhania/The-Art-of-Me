import React, { useEffect } from "react";
import Helper from "../../utils/Helper";
import { ecom_pc, portfolio_pc } from "../../utils/images";
import "./ProjectsPage.css";
import data from "../../utils/projectsData.json";

const ProjectsPage = () => {
  console.log(data);
  return (
    <section className="projects-section">
      <div className="projects-page">
        <div className="project-box">
          <div className="project-image-container1" data-aos="fade-right" data-aos-duration="1000">
            <img src={ecom_pc} alt="" className="projects-page-img" />
          </div>
          <div className="project-description-container" data-aos="fade-left" data-aos-duration="1000">
            <h2>ClickBait</h2>
            <p>
              Technologies used : <span className="techStack">React</span>, <span className="techStack">Redux Toolkit</span>,{" "}
              <span className="techStack">React-router</span>, <span className="techStack">Css</span>
            </p>
            <ul>
              <li>Developed performant ecommerce website using React routing, lazy loading, and optimized search.</li>
              <li>Implemented CRUD functionality to create, read, update, and delete products and data.</li>
              <li>Optimized for all devices: desktop, tablet, and mobile.</li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <div className="project-description-container" data-aos="fade-right" data-aos-duration="1000">
            <h2>The Art of Me</h2>
            <p>
              Technologies used : <span className="techStack">React</span>, <span className="techStack">EmailJs</span>,{" "}
              <span className="techStack">Css</span>
            </p>
            <ul>
              <li>Developed a visually appealing portfolio website with smooth animations on scroll</li>
              <li>Included a user-friendly contact form to easily get in touch with me directly from the website.</li>
              <li>Optimized for all devices: desktop, tablet, and mobile.</li>
            </ul>
          </div>
          <div className="project-image-container2" data-aos="fade-left" data-aos-duration="1000">
            <img src={portfolio_pc} alt="" className="projects-page-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
