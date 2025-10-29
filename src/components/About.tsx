import React from "react";
import TiltPhoto from "./TiltPhoto";
import profile from "../assets/profile.jpg";
import useIntersection from "../hooks/useIntersection";
import "../App.css";

const About: React.FC = () => {
  const imgRef = useIntersection();
  const textRef = useIntersection();

  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        {/* Profile Image with Tilt */}
        <div className="profile-wrap reveal" ref={imgRef}>
          <TiltPhoto src={profile} alt="Sulthan Shafeer" />
        </div>

        {/* About Text */}
        <div className="about-text reveal" ref={textRef}>
          <h3 className="section-title" data-aos="fade-up" data-aos-delay="100">
            About Me
          </h3>

          <p data-aos="fade-up" data-aos-delay="200">
            I'm <strong>Sulthan Shafeer</strong>, a passionate and motivated
            Front-End Developer intern at{" "}
            <strong>Upcode Software Labs, Calicut</strong>, from Palakkad,
            Kerala. I have a deep enthusiasm for creating modern, responsive,
            and visually appealing web applications that deliver smooth user
            experiences.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            Skilled in HTML, CSS, JavaScript, React, Bootstrap, and Material UI
            (MUI), I constantly explore new technologies to stay updated in the
            fast-evolving web ecosystem. Through my internship, I’ve been
            gaining valuable hands-on experience working on real-world projects,
            enhancing my skills in UI/UX design, performance optimization, and
            clean coding practices.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            Outside of coding, I enjoy gaming, music, and movies, which inspire
            my creativity and problem-solving mindset. My ultimate goal is to
            grow as a versatile front-end engineer, building impactful and
            user-focused digital experiences that blend design and technology
            seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
