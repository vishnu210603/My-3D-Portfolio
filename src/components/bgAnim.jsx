import React, { useEffect } from 'react';
import '../App.css';

function BgAnim() {
  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');

    const numberofColorBoxes = 400;

    for (let i = 0; i < numberofColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox);
    }

    const handleMouseMove = (e) => {
        const boxes = document.querySelectorAll('.colorBox');
        boxes.forEach(box => {
          const rect = box.getBoundingClientRect();
          const distance = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
          const maxDistance = Math.hypot(window.innerWidth, window.innerHeight);
          const boxColor = distance < maxDistance / 48 ? '#b026ff' : '#000';
          box.style.backgroundColor = boxColor;
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };

  }, []);

  return (
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAnim"></div>
    </div>
  );
}

export default BgAnim;

