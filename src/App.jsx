import { useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  const sections = {
    about: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Online Auction",
      tech: "HTML, CSS, JavaScript, Thymeleaf, Java",
      description:
        "Collaborated in a team to enhance an existing Online Auction site using Java and Spring Boot, fixing bugs, implementing authentication, product listings, and messaging features.",
      github: "#",
      live: "#",
    },
    {
      title: "Book Ranking System",
      tech: "Python, SQLite, SQL, CSV, Web Scraping (Requests)",
      description:
        "Developed a Python scraper for Goodreads data, organizing 2000+ book entries in SQLite. Automated filtering, deduplication, and review-based data cleaning.",
      github: "#",
      live: "#",
    },
    {
      title: "League of Legends Performance Tracker",
      tech: "React, Firebase, Node.js, Express, Riot API",
      description:
        "Built a personal dashboard to analyze match data and performance metrics using Riot API, with Firebase authentication and note tagging by skill category.",
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    "Java",
    "Python",
    "C/C++",
    "SQL",
    "JavaScript",
    "HTML/CSS",
    "React",
    "Node.js",
    "Express",
    "Spring Boot",
    "Git",
    "GitHub",
    "Firebase",
    "SQLite",
    "REST APIs",
    "Riot Games API",
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h1 className="nav-logo" onClick={() => scrollToSection("about")}>
          Nicholas Vioral
        </h1>
        <ul>
          {Object.keys(sections).map((key) => (
            <li key={key} onClick={() => scrollToSection(key)}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <section ref={sections.about} className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Hi, I’m Nicholas Vioral 👋</h2>
          <p>
            A passionate software developer focused on building clean, functional, and creative
            applications using modern technologies.
          </p>
          <div className="hero-links">
            <a href="mailto:nicholasvioral@gmail.com">
              <FaEnvelope /> Email
            </a>
            <a href="https://linkedin.com/in/nicholasvioral/" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/NicholasVioral" target="_blank">
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <section ref={sections.education} className="section">
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2>Education</h2>
          <h3>Slippery Rock University</h3>
          <p>Bachelor of Science in Computer Science | August 2020 - May 2024</p>
          <p><strong>GPA:</strong> 3.59</p>
          <ul>
            <li>Software Engineering — project management & collaboration.</li>
            <li>Artificial Intelligence — machine learning, NLP, computer vision.</li>
            <li>Data Structures & Algorithms — efficient problem-solving fundamentals.</li>
          </ul>
        </motion.div>
      </section>

      <section ref={sections.projects} className="section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Projects
        </motion.h2>
        <div className="projects-container">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>{proj.title}</h3>
              <p className="tech">{proj.tech}</p>
              <p>{proj.description}</p>
              <div className="buttons">
                <a href={proj.github} target="_blank">GitHub</a>
                <a href={proj.live} target="_blank">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={sections.skills} className="section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Technical Skills
        </motion.h2>
        <motion.ul className="skills-list">
          {skills.map((skill, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section ref={sections.contact} className="section contact">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Get In Touch</h2>
          <p>Interested in collaborating or want to know more? Reach out!</p>
          <a href="mailto:nicholasvioral@gmail.com" className="contact-button">
            Say Hello 👋
          </a>
        </motion.div>
      </section>

      <footer>
        <p>© 2025 Nicholas Vioral. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
