import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="heading">Get In Touch</h2>

      <aside className="follow-card" aria-label="Follow me">
        <h4>Follow Me</h4>
        <div className="follow-grid">
          <a className="social-tile" href="https://github.com/sulthansulu8921" target="_blank" rel="noreferrer">
            <div className="icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 3 8.4 7.2 9.8.5.1.7-.2.7-.5 0-.3 0-1.1 0-2.1-2.9.6-3.6-1.1-3.6-1.1-.5-1.4-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.8 2.1 1.1.1-.7.4-1.2.8-1.5-2.3-.3-4.7-1.1-4.7-4.9 0-1.1.4-2 .9-2.7-.1-.3-.4-1.4.1-2.8 0 0 .8-.2 2.8 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-.1 2.8-1.1 2.8-1.1.5 1.4.2 2.5.1 2.8.6.7.9 1.6.9 2.7 0 3.8-2.4 4.5-4.7 4.9.4.3.7 1 .7 2.1 0 1.5 0 2.7 0 3 .1.2.3.6.8.5 4.2-1.4 7.2-5.2 7.2-9.8C23.1 5.3 18.3.5 12 .5z"></path>
              </svg>
            </div>
            <div className="title">GitHub</div>
            <div className="sub">github.com/sulthansulu8921</div>
          </a>

          <a className="social-tile" href="https://www.linkedin.com/in/sulthan-shafeer" target="_blank" rel="noreferrer">
            <div className="icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <path d="M6 9v9" />
                <path d="M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M16 13c0 2-2 3-4 3v0" />
              </svg>
            </div>
            <div className="title">LinkedIn</div>
            <div className="sub">linkedin.com/in/sulthan-shafeer</div>
          </a>

          <a className="social-tile" href="https://www.instagram.com/sulthxncodez" target="_blank" rel="noreferrer">
            <div className="icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.4A4 4 0 1 1 9.6 5" />
                <circle cx="17.5" cy="6.8" r="0.5" />
              </svg>
            </div>
            <div className="title">Instagram</div>
            <div className="sub">instagram.com/sulthxncodez</div>
          </a>
        </div>
      </aside>

      <div className="contact-left">
        <h3 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>Let's Connect</h3>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <div className="contact-badge" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-meta">
              <div className="label">Email</div>
              <div className="value">sulthanshafeer714@gmail.com</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-badge" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a1 1 0 0 1 1 .76 12.05 12.05 0 0 0 .7 2.76 1 1 0 0 1-.24 1l-2.2 2.2a16 16 0 0 0 6.82 6.82l2.2-2.2a1 1 0 0 1 1-.24 12.05 12.05 0 0 0 2.76.7 1 1 0 0 1 .76 1V21z"></path>
              </svg>
            </div>
            <div className="contact-meta">
              <div className="label">Phone</div>
              <div className="value">+91 8921624007</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-badge" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
                <circle cx="12" cy="10" r="2"></circle>
              </svg>
            </div>
            <div className="contact-meta">
              <div className="label">Location</div>
              <div className="value">Palakkad, Kerala, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
