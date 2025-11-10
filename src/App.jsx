import { useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";

function App() {
  const sections = {
    about: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
    location: useRef(null),
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
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Consolidated Profile Box */}
      <section className="profile-box">
        <div className="profile-header">
          <div className="profile-social-icons">
            <motion.a 
              href="mailto:nicholasvioral@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a 
              href="https://github.com/NicholasVioral" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/nicholasvioral/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
        <motion.div
          className="profile-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="profile-name">Nicholas Vioral</h1>
          <div className="profile-location">
            <FaMapMarkerAlt className="location-icon" />
            <span>Pennsylvania, USA</span>
          </div>
          <p className="profile-description">
            I'm a passionate Full-Stack Software Developer with a Bachelor's degree in Computer Science. 
            I have been programming for several years and create professional, functional applications 
            using modern technologies and best practices.
          </p>
        </motion.div>
      </section>

      {/* What I Work With Section */}
      <section className="technologies-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="technologies-content"
        >
          <h2 className="technologies-title">What I Work With</h2>
          
          {/* Languages */}
          <div className="tech-category">
            <h3>Languages</h3>
            <div className="scrolling-tech">
              <div className="scrolling-tech-inner">
                {["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {/* Duplicate for seamless loop */}
                {["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"].map((tech, index) => (
                  <motion.span
                    key={`${tech}-dup`}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="tech-category">
            <h3>Frameworks</h3>
            <div className="scrolling-tech reverse">
              <div className="scrolling-tech-inner">
                {["React", "Node.js", "Express", "Spring Boot"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {/* Duplicate for seamless loop */}
                {["React", "Node.js", "Express", "Spring Boot"].map((tech, index) => (
                  <motion.span
                    key={`${tech}-dup`}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="tech-category">
            <h3>Tools</h3>
            <div className="scrolling-tech">
              <div className="scrolling-tech-inner">
                {["Git", "GitHub", "VS Code", "Visual Studio", "Firebase (Authentication, Realtime DB)"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {/* Duplicate for seamless loop */}
                {["Git", "GitHub", "VS Code", "Visual Studio", "Firebase (Authentication, Realtime DB)"].map((tech, index) => (
                  <motion.span
                    key={`${tech}-dup`}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="tech-category">
            <h3>Databases</h3>
            <div className="scrolling-tech reverse">
              <div className="scrolling-tech-inner">
                {["SQLite"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {/* Duplicate for seamless loop */}
                {["SQLite"].map((tech, index) => (
                  <motion.span
                    key={`${tech}-dup`}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rest of your content */}
      <div className="main-content">
        <section ref={sections.about} className="section">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2>About Me</h2>
            <p>
              A passionate software developer focused on building clean, functional, and creative
              applications using modern technologies. I enjoy solving complex problems and 
              continuously learning new technologies to enhance my skills.
            </p>
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
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={proj.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
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

        <section ref={sections.location} className="section">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2>
              <FaMapMarkerAlt style={{ marginRight: '10px' }} />
              Location
            </h2>
            <p><strong>Based in:</strong> Pennsylvania, USA</p>
            <p><strong>Open to:</strong> Remote positions & relocation opportunities</p>
            <div className="location-info">
              <p>📍 Available for software development roles nationwide</p>
              <p>🌎 Willing to relocate for the right opportunity</p>
              <p>💻 Remote work ready with professional setup</p>
            </div>
          </motion.div>
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
    </div>
  );
}

export default App;