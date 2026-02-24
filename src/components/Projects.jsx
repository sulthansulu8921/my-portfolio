import React, { useState, useEffect } from "react";
import { getProjects } from "../services/api";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "../Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container" data-aos="fade-up">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my featured work</p>

        <div className="project-grid">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Card
                key={project.id}
                className="project-card"
                data-aos="zoom-in"
                data-aos-delay={`${200 + index * 100}`}
                sx={{
                  background: "#161616",
                  color: "white",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {project.image && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: "#ccc", mb: 2, flexGrow: 1 }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: "auto" }}>
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                        style={{ marginTop: 0 }}
                      >
                        GitHub
                      </a>
                    )}
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                        style={{ marginTop: 0, background: "white", color: "#0b0b0b" }}
                      >
                        Live Demo
                      </a>
                    )}
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1" sx={{ gridColumn: "1 / -1" }}>
              No projects found. Add some from the admin panel!
            </Typography>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
