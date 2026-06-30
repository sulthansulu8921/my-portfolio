import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaBuilding, 
  FaBriefcase, 
  FaAward, 
  FaTimes, 
  FaGraduationCap, 
  FaRegCheckCircle, 
  FaCode, 
  FaCloud, 
  FaDatabase
} from "react-icons/fa";
import { SiReact, SiPython } from "react-icons/si";
import "../Journey.css";

// Import certificate images
import certificateAchievement from "../assets/certificate_achievement.png";
import cloudPythonFundamentals from "../assets/cloud_python_fundamentals.png";

interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
  image: string;
  skills: string[];
  description: string;
  icon: React.ReactNode;
  theme: "cyan" | "blue";
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Certificate of Achievement",
    provider: "Upcode Software Labs",
    date: "25-09-2025",
    image: certificateAchievement,
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Redux", "TypeScript", "Python"],
    description: "Successfully completed intensive training in frontend and backend development technologies, building responsive and scalable web applications.",
    icon: <SiReact />,
    theme: "cyan"
  },
  {
    id: 2,
    title: "Advanced Cloud & Python Fundamentals",
    provider: "Upcode Software Labs",
    date: "27-11-2025",
    image: cloudPythonFundamentals,
    skills: ["Next.js", "MySQL", "Git", "Cloud Computing", "Hosting", "Python", "RDBMS"],
    description: "Completed advanced training in cloud technologies, database management, hosting environments, and Python fundamentals.",
    icon: <SiPython />,
    theme: "blue"
  }
];

const internshipTechs = [
  "HTML", "CSS", "Bootstrap", "JavaScript", "Git", "React.js", "Redux", 
  "Next.js", "TypeScript", "Python", "Django", "Flask", "RDBMS"
];

const responsibilities = [
  "Developed responsive web applications",
  "Built frontend interfaces using React.js",
  "Developed backend modules using Python",
  "Worked with databases and APIs",
  "Used Git and GitHub for version control",
  "Delivered project tasks within deadlines"
];

const achievements = [
  "Software Developer Internship",
  "React.js Development",
  "Python Development",
  "Cloud Fundamentals",
  "Database Management",
  "Full Stack Development"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Journey: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="journey-section" id="journey">
      {/* Background glow effects */}
      <div className="journey-background-glow">
        <div className="glow-orb orb-cyan-journey"></div>
        <div className="glow-orb orb-blue-journey"></div>
      </div>

      <div className="journey-container">
        {/* Header */}
        <div className="journey-header">
          <motion.div 
            className="journey-badge-top"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaGraduationCap /> <span>Career Track</span>
          </motion.div>
          <motion.h2 
            className="section-title journey-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications & Professional Journey
          </motion.h2>
          <motion.p 
            className="journey-subtitle"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A showcase of my training, internship experience, and technical achievements in Full Stack Development.
          </motion.p>
        </div>

        {/* Stats Grid Counters */}
        <motion.div 
          className="journey-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="stat-card glass-card" variants={itemVariants}>
            <div className="stat-icon-wrapper cyan">
              <FaBriefcase />
            </div>
            <div className="stat-info">
              <h4 className="stat-num">8+ Months</h4>
              <p className="stat-label">Internship Experience</p>
            </div>
          </motion.div>

          <motion.div className="stat-card glass-card" variants={itemVariants}>
            <div className="stat-icon-wrapper blue">
              <FaAward />
            </div>
            <div className="stat-info">
              <h4 className="stat-num">2 Core</h4>
              <p className="stat-label">Certifications Earned</p>
            </div>
          </motion.div>

          <motion.div className="stat-card glass-card" variants={itemVariants}>
            <div className="stat-icon-wrapper purple">
              <FaCode />
            </div>
            <div className="stat-info">
              <h4 className="stat-num">15+ Technologies</h4>
              <p className="stat-label">Successfully Mastered</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline & Certificates Split Layout */}
        <div className="journey-grid">
          
          {/* Left Column: Certifications */}
          <div className="journey-left">
            <motion.h3 
              className="column-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Professional Credentials
            </motion.h3>

            <motion.div 
              className="certifications-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  className={`glass-card cert-card cert-theme-${cert.theme}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="cert-image-container" onClick={() => setSelectedCert(cert)}>
                    <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
                    <div className="cert-image-overlay">
                      <span className="overlay-btn">Click to Expand</span>
                    </div>
                  </div>

                  <div className="cert-details">
                    <div className="cert-meta">
                      <span className="cert-provider"><FaBuilding /> {cert.provider}</span>
                      <span className="cert-date"><FaCalendarAlt /> {cert.date}</span>
                    </div>
                    <h4 className="cert-card-title">{cert.title}</h4>
                    <p className="cert-desc">{cert.description}</p>
                    
                    <div className="cert-skills">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="cert-skill-badge">{skill}</span>
                      ))}
                    </div>

                    <button 
                      className={`btn-view-cert btn-theme-${cert.theme}`}
                      onClick={() => setSelectedCert(cert)}
                    >
                      View Certificate
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Timeline / Internship */}
          <div className="journey-right">
            <motion.h3 
              className="column-title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Internship Experience
            </motion.h3>

            <motion.div 
              className="timeline-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Timeline Connector bar */}
              <div className="timeline-bar"></div>

              {/* Internship Card Item */}
              <motion.div className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker">
                  <div className="marker-inner"></div>
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header-block">
                    <span className="internship-badge-tag">Upcode Internship</span>
                    <h4 className="intern-role">Software Developer Intern</h4>
                    <h5 className="intern-company">Upcode Software Labs LLP</h5>
                    <div className="intern-duration"><FaCalendarAlt /> 02 June 2025 – 13 February 2026</div>
                  </div>

                  <p className="intern-desc">
                    Worked on live Full Stack Development projects and contributed to real-world web applications, collaborating with development teams to deliver modular services.
                  </p>

                  <div className="intern-responsibilities">
                    <h5 className="sub-header-timeline">Key Responsibilities:</h5>
                    <ul className="resp-list">
                      {responsibilities.map((resp, idx) => (
                        <li key={idx}>
                          <FaRegCheckCircle className="resp-bullet-icon" /> <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="intern-tech-stack">
                    <h5 className="sub-header-timeline">Technologies Utilized:</h5>
                    <div className="timeline-tech-badges">
                      {internshipTechs.map((tech, idx) => (
                        <span key={idx} className="timeline-tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Achievements Highlights Section */}
            <motion.div 
              className="achievements-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="column-title subtitle-highlights">Journey Highlights</h3>
              <div className="highlights-grid">
                {achievements.map((ach, idx) => (
                  <motion.div 
                    key={idx} 
                    className="highlight-item glass-card"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="highlight-trophy">🏆</span>
                    <span className="highlight-text">{ach}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Fullscreen Certificate View Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content glass-card"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
                <FaTimes />
              </button>

              <div className="modal-body">
                <img src={selectedCert.image} alt={selectedCert.title} className="modal-cert-image" />
                <div className="modal-cert-details">
                  <h3>{selectedCert.title}</h3>
                  <div className="modal-meta">
                    <span><strong>Provider:</strong> {selectedCert.provider}</span>
                    <span><strong>Date:</strong> {selectedCert.date}</span>
                  </div>
                  <p>{selectedCert.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journey;
