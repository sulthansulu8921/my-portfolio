import React from "react";
import { motion } from "framer-motion";
import TiltPhoto from "./TiltPhoto";
import profile from "../assets/profile.jpg";
import "../About.css";

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="profile-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TiltPhoto src={profile} alt="Sulthan Shafeer" extraClass="about-tilt-box" />
          </motion.div>

          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TiltPhoto extraClass="about-tilt-box">
              <div className="about-card-content">
                <p>
                  I’m <strong>Sulthan Shafeer</strong>, a passionate and motivated
                  Full-Stack Developer Intern at{" "}
                  <span className="highlight">Upcode Software Labs</span>, based in Palakkad,
                  Kerala. I specialize in building modern, responsive, and
                  user-friendly web applications with a strong focus on performance
                  and clean design.
                </p>

                <p>
                  I have hands-on experience with <span className="tech-tag">React</span>,
                  <span className="tech-tag">Django</span>, <span className="tech-tag">Node.js</span>,
                  and <span className="tech-tag">PostgreSQL</span>. Through
                  my internship, I’ve worked on real-world projects that strengthened
                  my skills in UI/UX design and scalable architecture.
                </p>

              </div>
            </TiltPhoto>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
