import React from "react";
import { motion } from "framer-motion";
import styles from "./ServicesSlider.module.css";

const services = [
  "Digital Marketing Solutions",
  "Data Solutions",
  "Event Marketing Solutions",
  "Media Solutions",
  "Tech Solutions",
];

const ServicesSlider = () => {
  // Duplicate the array for infinite loop effect
  const duplicatedServices = [...services, ...services];

  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <motion.div
            className={styles.slider}
            drag="x"
            dragConstraints={{ right: 0, left: -1100 }}
            whileTap={{ cursor: "grabbing" }}
            animate={{
              x: [0, -1100],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>{service}</span>
                <motion.div
                  className={styles.overlay}
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2.5,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSlider;
