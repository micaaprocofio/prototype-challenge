import React, { useEffect } from 'react';
import '../WaterModal/WaterModal.css';

const WaterModal = () => {
  useEffect(() => {
    createRaindrops();
  }, []);

  const createRaindrops = () => {
    const container = document.querySelector('.rain-container');
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement('div');
      drop.classList.add('rain-drop');
      drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      drop.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random speed
      drop.style.animationDelay = `${Math.random() * 2}s`; // Random delay
      container.appendChild(drop);
    }
  };

  return <div className="rain-container"></div>;
};

export default WaterModal;


