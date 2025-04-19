import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "About", url: "/The12thman/about" },
    { name: "Contact", url: "/contact" },
    { name: "Case Studies", url: "/case-studies" },
    { name: "Blog", url: "/blog" },
    { name: "Privacy", url: "/privacy" },
  ];

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        {/* Top Section */}
        <motion.div
          className={styles.topSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.logo}>The12thMan</h2>
        </motion.div>

        {/* Navigation Links */}
        <div className={styles.socialIcons}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
        <motion.nav
          className={styles.navLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              whileHover={{ color: "#12181f" }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Bottom Section */}
        <motion.div
          className={styles.bottomSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>All Right Reserved, All Wrong Reversed.</p>
          <p>Proudly created in India.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
