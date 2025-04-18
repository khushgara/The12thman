import React from "react";
import { motion } from "framer-motion";
import useWordRotator from "../../hooks/useWordRotator";
import styles from "./styles.module.css";

const Navbar = () => {
  const techWords = ["Tech", "Media", "Event", "Data"];
  const currentWord = useWordRotator(techWords, 1500);
  const navLinks = ["Solutions", "About", "Resources"];

  return (
    <motion.header
      className={styles.navbar}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Announcement Bar */}
      <motion.div
        className={styles.announcement}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Wellcome to The12thMan <a href="/merger">Read More Here.</a>
      </motion.div>

      {/* Main Navigation */}
      <nav className={styles.navContainer}>
        {/* Logo with Animated Word */}
        <div className={styles.logo}>
          The12thMan.
          <motion.span
            key={currentWord}
            className={styles.techWord}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentWord}
          </motion.span>
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`/${link.toLowerCase()}`}
              whileHover={{
                color: "#12181f",
                y: -2,
              }}
              transition={{ duration: 0.2 }}
            >
              {link}
            </motion.a>
          ))}

          {/* Contact Button */}
          <motion.a
            href="/contact"
            className={styles.contactButton}
            whileHover={{
              y: -3,
              scale: 1.05,
              backgroundColor: "#12181f",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Us
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
