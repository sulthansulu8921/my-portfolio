import React from "react";
import { motion } from "framer-motion";
import "../Skills.css";

type Skill = {
  name: string;
  desc: string;
  pct: number;
  category: string;
};

const skills: Skill[] = [
  { name: "React.js", desc: "Building dynamic UI", pct: 90, category: "Frontend" },
  { name: "TypeScript", desc: "Type-safe development", pct: 85, category: "Frontend" },
  { name: "Material UI", desc: "Design system", pct: 90, category: "Frontend" },
  { name: "Python", desc: "General purpose language", pct: 90, category: "Backend" },
  { name: "Django", desc: "Python web framework", pct: 85, category: "Backend" },
  { name: "PostgreSQL", desc: "Relational database", pct: 80, category: "Database" },
  { name: "Firebase", desc: "Cloud backend & auth", pct: 75, category: "Database" },
  { name: "Git & GitHub", desc: "Version control", pct: 85, category: "Tools" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              className="glass-card skill-card"
              variants={itemVariants}
            >
              <div className="skill-info">
                <span className="skill-category">{s.category}</span>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>

              <div className="skill-progress-area">
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="skill-pct">{s.pct}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
