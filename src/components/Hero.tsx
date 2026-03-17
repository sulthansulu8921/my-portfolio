import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Hero.css";

const roles = ["Designer", "Freelancer", "Software Developer"];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 300;

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (phase === "typing") {
      if (displayText.length < currentRole.length) {
        const t = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const t = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, DELETING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [displayText, phase, roleIndex]);

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
          Hi, I'm <span>SULTHAN SHAFEER</span>
        </h1>

        <div className="role-container" data-aos="fade-up" data-aos-delay="400">
          <span className="role-prefix">I'm a&nbsp;</span>
          <span className="role-text">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </div>

        <p data-aos="fade-up" data-aos-delay="400" className="hero-description">
          Building high-performance, visually stunning, and user-centric
          digital experiences with modern technologies.
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn btn-primary"
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

        <div className="scroll-indicator" onClick={() => scrollToSection("about")}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="hero-background-effects">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
    </section>
  );
};

export default Hero;
