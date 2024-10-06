import React, { useEffect } from 'react';
import '../WaterModal/WaterModal.css';

const WaterModal = () => {
  useEffect(() => {
    createRaindrops(4);
  }, []);

  const createRaindrops = (sets) => {
    const container = document.querySelector('.rain-container');
    
    for (let set = 1; set <= sets; set++) {
      Array.from({ length: 50 }).forEach(() => {
        const drop = document.createElement('div');
        drop.classList.add(`rain-drop${set}`);
        drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        drop.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random speed
        drop.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        container.appendChild(drop);
      });
    }
  };

  return <div className="rain-container"></div>;
};

export default WaterModal;
