import React, { useEffect, useState } from "react";

function Hero() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const moveNoButton = (e) => {
    const btn = e.target;
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 120 - 60;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <section className="hero">
      <div className={`hero-content ${visible ? "visible" : ""}`}>
        {/* ===== EXISTING CONTENT (UNCHANGED) ===== */}
        <div className="hero-heart-icon">💕</div>

        <h1 className="hero-title">
          Four Month.
          <br />A Lifetime of Love.
        </h1>

        <p className="hero-subtitle">
          Two hearts that found each other in the chaos of life.
          <br />
          A connection so deep, it feels like destiny.
          <br />
          This is our Love story.
        </p>

        <div className="scroll-indicator">
          <span>Scroll to explore our journey</span>
          <div className="scroll-arrow">↓</div>
        </div>

        {/* ===== NEW VALENTINE SECTION (BELOW) ===== */}
        {!accepted ? (
          <div className="valentine-section">
            <h2 className="valentine-text">Will you be my Valentine? 💖</h2>

            <div className="valentine-options">
              <button className="yes-btn" onClick={() => setAccepted(true)}>
                YES 💕
              </button>

              <button
                className="no-btn"
                onMouseEnter={moveNoButton} // desktop
                onTouchStart={moveNoButton} // mobile
              >
                NO 🙈
              </button>
            </div>
          </div>
        ) : (
          <div className="love-letter">
            {/* 💥 LOVE EXPLOSION */}
            <div className="love-explosion">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="love-particle"
                  style={{
                    "--x": `${Math.random() * 300 - 150}px`,
                    "--y": `${Math.random() * 300 - 150}px`,
                    "--d": `${Math.random() * 0.6}s`,
                  }}
                >
                  {["❤️", "💋", "✨", "💕"][i % 4]}
                </span>
              ))}
            </div>

            <h2 className="love-title">💌 My Love</h2>

            <p className="love-text">
              From the moment you came into my life, everything changed.
              <br />
              <br />
              Your smile is my favorite place, your love is my peace, and your
              heart is my home.
              <br />
              <br />I love you — forever and always.
            </p>

            <div className="big-love">I ❤️ YOU</div>
          </div>
        )}
      </div>

      <div className="hero-glow"></div>
      <div className="hero-glow-secondary"></div>
    </section>
  );
}

export default Hero;
