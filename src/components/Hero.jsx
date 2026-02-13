import React, { useEffect, useState } from "react";

/**
 * Hero Section - Full-screen romantic intro with animated title
 */
function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${visible ? "visible" : ""}`}>
        <div className="hero-heart-icon">💕</div>
        <h1 className="hero-title">
          One week.
          <br />A Lifetime of Friendship.
        </h1>
        <p className="hero-subtitle">
          Two hearts that found each other in the chaos of life.
          <br />
          A connection so deep, it feels like destiny.
          <br />
          This is our Friendship story.
        </p>
        <div className="scroll-indicator">
          <span>Scroll to explore our journey</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      <div className="hero-glow"></div>
      <div className="hero-glow-secondary"></div>
    </section>
  );
}

export default Hero;
