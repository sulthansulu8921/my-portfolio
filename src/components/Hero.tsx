import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content" data-aos="fade-up">
        <h1 data-aos="zoom-in" data-aos-delay="200">
          Hi, I’m <span>SULTHAN SHAFEER</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          Front-End Developer passionate about crafting beautiful and
          functional websites.
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn"
          >
            VIEW PROJECTS
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-outline"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
