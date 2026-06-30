import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import "../Header.css";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">SULTHAN SHAFEER</div>

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="education"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>

          <Link
            to="services"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://github.com/sulthansulu8921"
            target="_blank"
            rel="noreferrer"
            className="header-social-link"
          >
            <FaGithub />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
