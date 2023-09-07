import React, { useState, useEffect } from "react";
import "../css/components.css";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 100;

      const newStars = [...Array(starCount)].map((_, i) => {
        const size = Math.random() * 3 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 2 + Math.random() * 4;
        const delay = Math.random() * 4;

        return (
          <div
            key={i}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      });

      setStars(newStars);
    };

    generateStars();
  }, []);

  return <div className="stars">{stars}</div>;
};

export default Stars;
