import React from "react";
import { motion } from "framer-motion";
import "../About.css";

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-box">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m a software developer passionate about creating clean, functional, and creative applications. 
          I enjoy solving challenging problems and constantly learning new technologies to grow my skills.
        </p>

        <h3 className="about-subtitle">Education</h3>
        <p className="about-edu">
          <strong>Slippery Rock University</strong> — Slippery Rock, Pennsylvania  
          <br />
          Bachelor of Science in Computer Science | August 2020 - May 2024  
          <br />
          <strong>GPA:</strong> 3.59
        </p>

        <h3 className="about-subtitle">Relevant Coursework</h3>
        <ul className="about-list">
          <li>
            <strong>Software Engineering:</strong> Learned principles and best practices for designing, developing, testing, and maintaining software systems, with an emphasis on project management and team collaboration.
          </li>
          <li>
            <strong>Artificial Intelligence:</strong> Studied AI concepts including machine learning algorithms, natural language processing, and computer vision, and applied them to solve real-world problems.
          </li>
          <li>
            <strong>Data Structures & Algorithms:</strong> Explored fundamental data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, optimization) essential for efficient problem-solving in computer science.
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
