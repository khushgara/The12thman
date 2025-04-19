import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactPage.module.css";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    organization: "",
    website: "",
    services: [],
    otherService: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // to show success/failure

  const servicesOptions = [
    "Web Development",
    "SEO",
    "Shopify Development",
    "React Apps",
    "UX/UI Design",
    "Digital Marketing",
    "Data Solutions",
    "Event Marketing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      email: formData.email,
      organization: formData.organization,
      website: formData.website || "Not provided",
      services: formData.services.join(", "),
      otherService: formData.otherService,
      message: formData.message,
    };
    console.log(templateParams);

    try {
      const result = await emailjs.send(
        "service_51z1fep",
        "template_mibs276",
        templateParams,
        "0jGQ1rJrRCOi1l_k2"
      );
      console.log("SUCCESS!", result.text);
      setStatus("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        organization: "",
        website: "",
        services: [],
        otherService: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error.text);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      className={styles.contactPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.header}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1>Your's Brand Secret Weapon is Here</h1>
          <p>
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {/* First Row */}
          <div className={styles.formRow}>
            <motion.div
              className={styles.inputGroup}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className={styles.inputGroup}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          {/* Second Row */}
          <div className={styles.formRow}>
            <motion.div
              className={styles.inputGroup}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className={styles.inputGroup}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          {/* Third Row */}
          <div className={styles.formRow}>
            <motion.div
              className={styles.inputGroup}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className={styles.inputGroup}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="website">Website (if any)</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://"
              />
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            className={styles.servicesSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <label>How We Can Help You*</label>
            <div className={styles.servicesGrid}>
              {servicesOptions.map((service, index) => (
                <motion.div
                  key={service}
                  className={`${styles.serviceOption} ${
                    formData.services.includes(service) ? styles.selected : ""
                  }`}
                  onClick={() => handleServiceToggle(service)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.05 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
            <div className={styles.otherService}>
              <input
                type="text"
                placeholder="Other service not listed?"
                name="otherService"
                value={formData.otherService}
                onChange={handleChange}
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            className={styles.messageGroup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <label htmlFor="message">Your Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Send Message
          </motion.button>

          {/* Status Message */}
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
