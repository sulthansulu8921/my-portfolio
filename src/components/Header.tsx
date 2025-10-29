import { useState } from "react";
import { Link } from "react-scroll";
import "../Header.css";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Sulthan Shafeer</div>

        {/* Toggle for mobile */}
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>

        {/* Navigation Links */}
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
