import { useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bookranker from "../bookranker.JPG";
import ebayclone from "../ebayclonenew.JPG";
import riotstats from "../riotstatstracker.JPG";

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
      
      {/* Projects Section */}
      <section className="projects-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-content"
        >
          <h2 className="projects-title">Projects</h2>

          <div className="projects-list">
            {[
              {
                name: "Book Ranker",
                img: bookranker,
                tech: "Python, SQLite, Web Scraping",
                link: "https://github.com/NicholasVioral/GoodreadsScraper",
                description:
                  "Scraped and organized 2000+ Goodreads entries using Python, filtering and storing book data in SQLite for ranking and analysis.",
              },
              {
                name: "Riot Stats Tracker",
                img: riotstats,
                tech: "React, Firebase, Riot API",
                link: "https://github.com/NicholasVioral/Riot-Stats",
                description:
                  "Built a dashboard to track League of Legends performance with real-time match stats, Firebase authentication, and note tagging.",
              },
              {
                name: "eBay Clone",
                img: ebayclone,
                tech: "Java, Spring Boot, Thymeleaf, SQL",
                link: "https://github.com/NicholasVioral/eBay-Clone",
                description:
                  "Developed a Spring Boot e-commerce site with product listings, messaging, and authentication features, improving overall functionality.",
              },
            ].map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={project.img} alt={project.name} className="project-image" />
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.tech}</p>
                  <p className="project-description">{project.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Me Section */}
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
              href="https://linkedin.com/in/nicholasvioral/" 
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
            
            <div className="contact-link">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Pennsylvania, USA</span>
            </div>
          </div>
          
          <motion.a 
            href="mailto:nicholasvioral@gmail.com" 
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello 👋
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default App;