// src/components/Header/NavLinks.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NavLinks = () => {
  const links = [
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <div className={styles.navLinks}>
      {links.map((link) => (
        <Link key={link.name} to={link.path} className={styles.link}>
          {link.name}
        </Link>
      ))}
      <Link to="/contact" className={styles.contactButton}>
        Contact Us →
      </Link>
    </div>
  );
};

export default NavLinks;
