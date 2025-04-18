import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./TechSolutions.module.css";

const TechSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const services = [
    {
      name: "Process Automation",
      description:
        "Streamline operations with intelligent automation solutions",
      color: "#12181f", // Vibrant blue
    },
    {
      name: "Customer Experience",
      description: "Enhance user journeys with data-driven CX optimization",
      color: "#661ff0", // Coral orange
    },
    {
      name: "Team Efficiency",
      description: "Boost productivity with collaboration tech stacks",
      color: "#2f4160", // Lime green
    },
    {
      name: "Tech Alignment",
      description: "Align technology with your strategic business goals",
      color: "#000000", // Pink-red
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bg}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tech Solution
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We optimise People, Processes and Technology. Map processes, align
            to objectives and maximise team efficiency with tech to improve the
            customer experience.
          </motion.p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                backgroundColor:
                  hoveredCard === index ? service.color : "#fafafa",
                color: hoveredCard === index ? "#ffffff" : "#888888",
                transform:
                  hoveredCard === index ? "translateY(-5px)" : "translateY(0)",
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              transition={{
                duration: 0.3,
                inView: { delay: index * 0.1 + 0.3 },
              }}
            >
              <h3>{service.name}</h3>
              <motion.p
                className={styles.hoverText}
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                  height: hoveredCard === index ? "auto" : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.a
          href="https://www.sdteing.com/solutions/techsleep-solution"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            backgroundColor: "#333333",
            transform: "scale(1.05)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View Map
        </motion.a>
      </div>
    </section>
  );
};

export default TechSolutions;
