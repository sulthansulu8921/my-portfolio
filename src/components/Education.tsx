import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import "../Education.css";

const Education: React.FC = () => {
    const educationData = [
        {
            icon: <FaCode />,
            title: "Full Stack Web Development Course",
            org: "Upcode Software Labs, Calicut",
            years: "2025",
            desc: "Intensive program covering modern web technologies including React, Python, Django, and database management.",
        },
        {
            icon: <FaGraduationCap />,
            title: "Higher Secondary Education",
            org: "GAP Higher Secondary School",
            years: "2023 - 2025",
            desc: "Specialized in History, Economics, and Statistics, sharpening analytical and critical thinking skills.",
        },
    ];

    return (
        <section className="education-section" id="education">
            <div className="education-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className="timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot" />
                            <div className="glass-card edu-card">
                                <div className="edu-icon-wrap">
                                    {item.icon}
                                </div>
                                <div className="edu-info">
                                    <h4>{item.title}</h4>
                                    <span className="edu-org">{item.org}</span>
                                    <span className="edu-years">{item.years}</span>
                                    <p className="edu-desc">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
