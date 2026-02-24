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
            I’m <strong>Sulthan Shafeer</strong>, a passionate and motivated
            Full-Stack Developer Intern at{" "}
            <strong>Upcode Software Labs, Calicut</strong>, based in Palakkad,
            Kerala. I specialize in building modern, responsive, and
            user-friendly web applications with a strong focus on performance
            and clean design.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            I have hands-on experience with HTML, CSS, JavaScript, React,
            Bootstrap, Material UI (MUI), and Python Django (REST API). Through
            my internship, I’ve worked on real-world projects that strengthened
            my skills in UI/UX design, scalable architecture, and efficient
            coding practices.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            I’m continuously learning and exploring new technologies to stay
            current in the fast-evolving web development landscape. I enjoy
            transforming ideas into functional, visually appealing digital
            solutions.
          </p>

          <p data-aos="fade-up" data-aos-delay="500">
            Beyond coding, I’m interested in gaming and music, which help fuel
            my creativity and problem-solving approach.
          </p>

          <p data-aos="fade-up" data-aos-delay="600">
            My goal is to grow into a skilled full-stack developer and build
            impactful, user-centric applications that combine design and
            technology seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
