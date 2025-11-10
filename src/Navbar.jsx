// Navbar.js
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar">
      <motion.h1 
        className="nav-logo" 
        onClick={() => scrollToSection("about")}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Nicholas Vioral
      </motion.h1>
      
      <ul className="nav-links">
        <motion.li 
          onClick={() => scrollToSection("about")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.li>
        <motion.li 
          onClick={() => scrollToSection("projects")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          My Projects
        </motion.li>
        <motion.li 
          onClick={() => scrollToSection("contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.li>
      </ul>
      
      <motion.div 
        className="nav-location"
        onClick={() => scrollToSection("location")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Location
      </motion.div>
    </nav>
  );
}

export default Navbar;