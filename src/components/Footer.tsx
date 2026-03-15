import React from "react";
import "../Footer.css";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    SULTHAN<span>.</span>
                </div>
                <small className="footer-copy">
                    © {new Date().getFullYear()} Sulthan Shafeer • Palakkad, Kerala
                </small>
            </div>
        </footer>
    );
};

export default Footer;
