import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLock, FaTimes } from "react-icons/fa";
import { getProjects } from "../services/api";
import { staticProjects } from "../data/projects";
import "../Projects.css";

interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    github_link?: string;
    live_link?: string;
    tags?: string[];
    isProtected?: boolean;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>(staticProjects);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const backendProjects = await getProjects();
                if (backendProjects && backendProjects.length > 0) {
                    setProjects([...staticProjects, ...backendProjects]);
                }
            } catch (error) {
                console.error("Failed to load projects from backend", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const handleCodeClick = (e: React.MouseEvent, project: Project) => {
        if (project.isProtected) {
            e.preventDefault();
            setSelectedProject(project);
            setIsModalOpen(true);
            setPasswordInput("");
            setError(false);
        }
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder password as requested/implied
        if (passwordInput === "Connect2025") {
            setIsModalOpen(false);
            if (selectedProject?.github_link) {
                window.open(selectedProject.github_link, "_blank", "noopener,noreferrer");
            }
        } else {
            setError(true);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Selected Projects</h2>
                    <p className="section-subtitle">A showcase of my recent technical explorations and creative builds.</p>
                </motion.div>

                {loading ? (
                    <div className="loading-state">
                        <div className="shimmer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            {[1, 2, 3].map(i => <div key={i} className="glass-card" style={{ height: '350px', background: 'rgba(255,255,255,0.02)' }} />)}
                        </div>
                    </div>
                ) : (
                    <motion.div
                        className="projects-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="glass-card project-card"
                                    variants={itemVariants}
                                >
                                    {project.image && (
                                        <div className="project-image-wrapper">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                            <div className="project-overlay" />
                                        </div>
                                    )}
                                    <div className="project-body">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>

                                        <div className="project-actions">
                                            {project.github_link && (
                                                <a
                                                    href={project.github_link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline btn-sm"
                                                    onClick={(e) => handleCodeClick(e, project)}
                                                >
                                                    Code
                                                </a>
                                            )}
                                            {project.live_link && (
                                                <a href={project.live_link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                                                    Live Site
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="empty-message">No projects found. Use the admin panel to add your work!</p>
                        )}
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="password-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="password-modal glass-card"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                                <FaTimes />
                            </button>
                            <div className="modal-icon">
                                <FaLock />
                            </div>
                            <h3>Private Repository</h3>
                            <p>Enter password to view <strong>{selectedProject?.title}</strong> source code.</p>

                            <form onSubmit={handlePasswordSubmit}>
                                <input
                                    type="password"
                                    className={`password-input ${error ? 'input-error' : ''}`}
                                    placeholder="Enter password"
                                    value={passwordInput}
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    autoFocus
                                />
                                {error && <p className="error-text">Incorrect password. Please try again.</p>}
                                <button type="submit" className="btn btn-primary submit-btn">
                                    Unlock Code
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
