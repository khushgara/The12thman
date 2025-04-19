import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./QuickContact.module.css";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Font Awesome

const QuickContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailClick = () => {
    const email = "contact@the12thman.com";
    const subject = "Enquiry from Website";
    const body = "Hello The12thMan Team,\n\nI would like to inquire about...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919876543210?text=Hello%20The12thMan%20Team,%20I%20have%20a%20question",
      "_blank"
    );
  };

  const handleCallClick = () => {
    window.open("tel:+919876543210");
  };

  return (
    <div className={styles.quickContactContainer}>
      {/* Main message icon button */}
      {/* <motion.button
        className={styles.messageButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMessageSquare className={styles.messageIcon} />
      </motion.button> */}
      <motion.div
        className={styles.contactOption}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        <FiMessageSquare className={styles.icon} />
      </motion.div>

      {/* Contact options that appear when clicked */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.contactOptions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.contactOption}
              whileHover={{ scale: 1.1, backgroundColor: "#25D366" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp className={styles.icon} />
              <span className={styles.tooltip}>WhatsApp</span>
            </motion.div>

            <motion.div
              className={styles.contactOption}
              whileHover={{ scale: 1.1, backgroundColor: "#EA4335" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
            >
              <FiMail className={styles.icon} />
              <span className={styles.tooltip}>Email</span>
            </motion.div>

            <motion.div
              className={styles.contactOption}
              whileHover={{ scale: 1.1, backgroundColor: "#4285F4" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallClick}
            >
              <FiPhone className={styles.icon} />
              <span className={styles.tooltip}>Call</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuickContact;
