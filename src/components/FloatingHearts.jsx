import React, { useEffect, useRef } from 'react';

/**
 * FloatingHearts Component - Animated floating hearts
 * Creates romantic heart animations throughout the page
 */
function FloatingHearts() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hearts = ['❤️', '💕', '💗', '💖', '💝', '💓'];
    
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      
      // Random position
      heart.style.left = Math.random() * 100 + '%';
      
      // Random size
      const size = Math.random() * 20 + 15;
      heart.style.fontSize = size + 'px';
      
      // Random animation duration
      const duration = Math.random() * 5 + 8;
      heart.style.animationDuration = duration + 's';
      
      // Random delay
      heart.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(heart);
      
      // Remove after animation
      setTimeout(() => {
        if (heart.parentNode) {
          heart.remove();
        }
      }, (duration + 2) * 1000);
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 3000);
    
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 600);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="floating-hearts-container" />;
}

export default FloatingHearts;
