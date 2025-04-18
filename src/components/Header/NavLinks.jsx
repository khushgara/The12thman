// src/components/Header/NavLinks.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NavLinks = () => {
  const links = [
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact Us001 →", path: "/solutions" },
  ];

  return (
    <div className={styles.navLinks}>
      {links.map((link) => (
        <Link key={link.name} to={link.path} className={styles.link}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
