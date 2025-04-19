import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./TrendingNow.module.css";
import logo from "../Assets/logo.jpg";

// Sample data with image paths
const trendingItems = [
  {
    id: 1,
    type: "Blogs",
    title: "The Future Trajectory of Marketing to Drive Positive Brand Growth",
    image: logo,
  },
  {
    id: 2,
    type: "Blogs",
    title:
      "Schbang, India's Largest Independent Agency, Cements its Status as a Global Challenger with European Expansion",
    image: logo,
  },
  {
    id: 3,
    type: "Blogs",
    title:
      'Dabur Chyawanprash\'s "Anti-Medicine Campaign" Returns with a Festive Twist',
    image: logo,
  },
];

const TrendingNow = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Trending now</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.itemsColumn}>
            {trendingItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles.item}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              >
                <span className={styles.itemType}>{item.type}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <div className={styles.divider} />
              </motion.div>
            ))}
          </div>

          <div className={styles.imageColumn}>
            {hoveredItem ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.imageWrapper}
              >
                <img
                  src={
                    trendingItems.find((item) => item.id === hoveredItem).image
                  }
                  alt="Preview"
                  className={styles.image}
                />
              </motion.div>
            ) : (
              <div className={styles.placeholder}></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
