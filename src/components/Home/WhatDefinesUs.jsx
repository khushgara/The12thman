import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./WhatDefinesUs.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#12181f",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const WhatDefinesUs = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.h1 className={styles.title} variants={itemVariants}>
          What defines us
        </motion.h1>

        <motion.p className={styles.tagline} variants={itemVariants}>
          We're brand builders at heart, creators by design, tech enthusiasts in
          practice, and integrated at our core.
        </motion.p>

        <motion.p className={styles.description} variants={itemVariants}>
          We're on a mission to take the very best of Indian creative talent to
          the world. Driven by a ferocious hunger to create tangible impact for
          your business, we work with in-house specialists, industry partners
          and technology leaders to push the boundaries of creativity and put
          your brand on the global stage.
        </motion.p>

        <motion.div
          className={styles.divider}
          variants={itemVariants}
        ></motion.div>

        <motion.div variants={itemVariants}>
          <Link to="/about" className={styles.button}>
            <motion.span
              initial={false}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className={styles.buttonInner}
            >
              Dive into Our Culture →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatDefinesUs;
