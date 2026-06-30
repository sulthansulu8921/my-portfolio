import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaShoppingCart, 
  FaCubes, 
  FaReact, 
  FaPython, 
  FaDatabase, 
  FaCloud, 
  FaRobot, 
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaServer,
  FaJs
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiDjango, 
  SiFlask, 
  SiPostgresql, 
  SiMysql, 
  SiVercel, 
  SiRender 
} from "react-icons/si";
import "../Services.css";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: "cyan" | "blue" | "gradient";
}

const services: Service[] = [
  {
    title: "Website Development",
    description: "Build modern, responsive, and SEO-friendly business websites, portfolio websites, landing pages, and custom web applications using modern technologies.",
    icon: <FaLaptopCode />,
    theme: "cyan"
  },
  {
    title: "E-Commerce Development",
    description: "Develop complete online stores with product management, shopping cart functionality, responsive UI, user authentication, and payment gateway integration.",
    icon: <FaShoppingCart />,
    theme: "blue"
  },
  {
    title: "SaaS Application Development",
    description: "Create scalable Software-as-a-Service platforms with dashboards, user management, subscriptions, authentication systems, analytics, and cloud deployment.",
    icon: <FaCubes />,
    theme: "gradient"
  },
  {
    title: "React.js Frontend Development",
    description: "Build fast, interactive, and modern user interfaces using React.js, JavaScript, TypeScript, Redux, and responsive design principles.",
    icon: <FaReact />,
    theme: "cyan"
  },
  {
    title: "Python Backend Development",
    description: "Develop secure backend systems, REST APIs, authentication modules, and business logic using Python, Django, and Flask.",
    icon: <FaPython />,
    theme: "blue"
  },
  {
    title: "Database Design & Management",
    description: "Design and manage efficient databases using PostgreSQL, MySQL, Firebase, and cloud database solutions.",
    icon: <FaDatabase />,
    theme: "gradient"
  },
  {
    title: "Cloud Deployment & DevOps",
    description: "Deploy and manage applications using AWS, Docker, GitHub Actions, Render, Vercel, Nginx, and modern cloud infrastructure.",
    icon: <FaCloud />,
    theme: "cyan"
  },
  {
    title: "AI Integration & Automation",
    description: "Integrate AI-powered solutions, chatbots, workflow automation, business tools, and intelligent systems into web applications.",
    icon: <FaRobot />,
    theme: "blue"
  },
  {
    title: "Website Maintenance & Support",
    description: "Provide bug fixing, feature updates, performance optimization, security improvements, and long-term technical support.",
    icon: <FaTools />,
    theme: "gradient"
  }
];

const techStack = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> },
  { name: "REST API", icon: <FaServer /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-background-glow">
        <div className="glow-orb orb-cyan"></div>
        <div className="glow-orb orb-blue"></div>
      </div>

      <div className="services-container">
        <div className="services-header">
          <motion.h2 
            className="section-title services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Services I Offer
          </motion.h2>
          <motion.p 
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I help businesses, startups, and entrepreneurs build modern digital products, websites, SaaS platforms, and scalable software solutions.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`glass-card service-card card-${service.theme}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeInOut" } 
              }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <div className="card-glow-effect"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack Sub-section */}
        <div className="tech-stack-section">
          <motion.h3 
            className="tech-stack-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technologies I Use
          </motion.h3>
          <motion.div 
            className="tech-badges-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {techStack.map((tech, idx) => (
              <motion.div 
                key={idx} 
                className="tech-badge"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <span className="tech-badge-icon">{tech.icon}</span>
                <span className="tech-badge-name">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call To Action Banner */}
        <motion.div 
          className="glass-card cta-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to Build Your Next Project?</h3>
            <p className="cta-desc">
              I help businesses transform ideas into modern digital products. Let's discuss your website, SaaS platform, e-commerce store, or custom software solution.
            </p>
            <div className="cta-buttons">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="btn btn-primary btn-neon-cyan"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="btn btn-outline btn-neon-blue"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="btn btn-outline btn-neon-white"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="cta-background-light"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
