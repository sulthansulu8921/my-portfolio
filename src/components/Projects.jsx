import React from "react";
import "../Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container" data-aos="fade-up">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my featured work</p>

        <div className="project-grid">
          {/* Project 1 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Portfolio Website</h3>
            <p>
              A modern responsive personal portfolio built with React, Tailwind CSS, 
              and smooth animations using AOS.
            </p>
            <a
              href="https://github.com/sulthansulu8921"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="400">
            <h3>E-commerce UI</h3>
            <p>
              Frontend for an online store featuring dynamic product grid, cart system, 
              and responsive design built using React & Bootstrap.
            </p>
            <a
              href="https://github.com/sulthansulu8921/shophub"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="600">
            <h3> Website</h3>
            <p>
              A Brand landing page built
            </p>
            <a
              href="https://github.com/sulthansulu8921"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
