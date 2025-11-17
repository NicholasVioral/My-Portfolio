import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "../Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-description">
            Interested in collaborating or want to know more? Reach out!
          </p>

          <div className="contact-links">
            <motion.a
              href="mailto:nicholasvioral@gmail.com"
              className="contact-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="contact-icon" />
              <span>nicholasvioral@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nicholas-vioral-a0400b24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/NicholasVioral"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="contact-icon" />
              <span>GitHub</span>
            </motion.a>

            <div className="contact-link location">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Pennsylvania, USA</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
