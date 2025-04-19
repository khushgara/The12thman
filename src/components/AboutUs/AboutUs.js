import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutUs.module.css";
import bannerImage from "../Assets/Modern Tech Logo with Bold Design.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "SEO",
      description: "Optimize your website for search engines",
      link: "/help-center",
    },
    {
      title: "Web Development",
      description: "Build responsive and user-friendly websites",
      link: "/help-center",
    },
    {
      title: "Shopify",
      description: "Build your online store in just few clicks",

      link: "/help-center",
    },
    {
      title: "ReactJS",
      description: "Build fast and interactive user interfaces",
      link: "/help-center",
    },
    {
      title: "Event Management",
      description: "Manage your events seamlessly",
      link: "/help-center",
    },
    {
      title: "Digital Marketing",
      description: "Reach your audience effectively",
      link: "/help-center",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1
          className={styles.companyName}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The12thMan
        </motion.h1>

        <motion.h2
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your Brand's Secret Weapon
        </motion.h2>

        <motion.div
          className={styles.banner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img src={bannerImage} alt="The12thMan Team" />
        </motion.div>
      </section>

      {/* About Content */}
      <section className={styles.aboutContent}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          At The12thMan, we're more than just a digital agency - we're your
          strategic partner in growth. Founded with a vision to revolutionize
          digital experiences, we combine cutting-edge technology with creative
          storytelling to build brands that matter.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our team of passionate developers, designers, and strategists work
          tirelessly to deliver solutions that not only meet your business
          objectives but exceed expectations. From startups to enterprises,
          we've helped brands transform their digital presence and achieve
          remarkable results.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          What sets us apart is our commitment to being the 'extra player' in
          your team - the 12th man that gives you the competitive edge. We don't
          just deliver projects; we build partnerships that last.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h3>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <a href={service.link}>
                Know More <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3>Ready to transform your digital presence?</h3>
        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect With Us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AboutUs;
