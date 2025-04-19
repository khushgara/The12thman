import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Banner.css";
import logo from "../Assets/logo.jpg";

const services = [
  { label: "Web Development", icon: logo },
  { label: "SEO", icon: logo },
  { label: "Shopify", icon: logo },
  { label: "React Apps", icon: logo },
];

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="services-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Banner Content */}
      <div className="banner-content">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Transform Your Business{" "}
          <span className="highlight">Online With The12thMan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Custom web solutions{" "}
          <span className="highlight-dark">that drive growth</span>
        </motion.p>

        <div className="services-scroll">
          {services.map((service, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {service.label}
            </motion.span>
          ))}
        </div>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get Free Audit →
        </motion.button>
      </div>

      {/* Logo and Hover Services */}
      <div className="bgforimage">
        <div className="image-banner-bg">
          <div
            className="image-banner"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              src={logo}
              alt="Main Logo"
              className="main-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />

            {isHovered && (
              <div className="hover-service-boxes">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`service-box position-${index + 1}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.1,
                    }}
                  >
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="service-icon"
                    />
                    <span>{service.label}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
