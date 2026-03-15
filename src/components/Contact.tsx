import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { submitContact } from "../services/api";
import "../Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await submitContact(formData);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
      </div>

      <motion.div
        className="glass-card contact-card"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`status-alert ${status.type}`}>
              {status.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's on your mind?"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="contact-info-side"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-item">
          <div className="contact-icon"><FaEnvelope /></div>
          <div className="contact-text">
            <h4>Email</h4>
            <p>sulthanshafeer714@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon"><FaPhone /></div>
          <div className="contact-text">
            <h4>Phone</h4>
            <p>+91 8921624007</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon"><FaMapMarkerAlt /></div>
          <div className="contact-text">
            <h4>Location</h4>
            <p>Palakkad, Kerala, India</p>
          </div>
        </div>

        <div className="social-links-container">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="https://github.com/sulthansulu8921" target="_blank" rel="noreferrer" className="social-btn"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sulthan-shafeer" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/sulthxncodez" target="_blank" rel="noreferrer" className="social-btn"><FaInstagram /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
