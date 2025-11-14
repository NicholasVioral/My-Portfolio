// Projects.js
import React from 'react';
import { motion } from "framer-motion";

// Import your project images
import bookranker from '../bookranker.JPG';
import riotstats from '../riotstatstracker.JPG';
import ebayclone from '../ebayclonenew.JPG';


function Projects() {
  const projects = [
    {
      name: "Book Ranker",
      img: bookranker,
      tech: "Python, SQLite, Web Scraping",
      link: "https://github.com/NicholasVioral/GoodreadsScraper",
      description: "Scraped and organized 2000+ Goodreads entries using Python, filtering and storing book data in SQLite for ranking and analysis.",
    },
    {
      name: "Riot Stats Tracker",
      img: riotstats,
      tech: "React, Firebase, Riot API",
      link: "https://github.com/NicholasVioral/Riot-Stats",
      description: "Built a dashboard to track League of Legends performance with real-time match stats, Firebase authentication, and note tagging.",
    },
    {
      name: "eBay Clone",
      img: ebayclone,
      tech: "Java, Spring Boot, Thymeleaf, SQL",
      link: "https://github.com/NicholasVioral/eBay-Clone",
      description: "Developed a Spring Boot e-commerce site with product listings, messaging, and authentication features, improving overall functionality.",
    },
  ];

  return (
    <div className="projects-page">
      <section className="projects-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-content"
        >
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            A collection of my recent work and personal projects
          </p>

          <div className="projects-list">
            {projects.map((project, index) => (
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
                  <p className="project-tech">{project.tech}</p>
                  <p className="project-description">{project.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Projects;