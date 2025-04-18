// src/hooks/useWordRotator.js
import { useState, useEffect } from "react";

const useWordRotator = (words, interval = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return words[currentIndex];
};

export default useWordRotator; // Fixed: Added proper export
