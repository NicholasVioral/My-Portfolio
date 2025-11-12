// Navbar.js
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <motion.h1 
        className="nav-logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link to="/" className="nav-link">Nicholas Vioral</Link>
      </motion.h1>
      
      <ul className="nav-links">
        <motion.li 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/about" className="nav-link">About Me</Link>
        </motion.li>

        <motion.li 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="nav-link">My Projects</Link>
        </motion.li>

        <motion.li 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="nav-link">Contact Me</Link>
        </motion.li>
      </ul>

      <motion.div 
        className="nav-location"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/" className="nav-link">Location</Link>
      </motion.div>
    </nav>
  );
}

export default Navbar;
