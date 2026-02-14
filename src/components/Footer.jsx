import React, { useEffect, useRef, useState } from "react";

/**
 * Footer Section - Final romantic message
 */
function Footer() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="footer" ref={sectionRef}>
      <div className={`footer-content ${inView ? "fade-scale" : ""}`}>
        <div className="footer-hearts-top">
          <span className="heart-icon">💕</span>
        </div>
        <div className="quote-mark">"</div>
        <blockquote className="footer-quote">
          I didn’t fall for you because you’re perfect, I fell because you make
          me feel whole.
        </blockquote>
        <p className="footer-tagline">Love forever</p>
        <p className="footer-date">#LowkeyNeethu</p>
        <div className="footer-hearts">
          <span className="heart">🤎</span>
          <span className="infinity">∞</span>
          <span className="heart">💜</span>
        </div>
        <p className="footer-final-message">
          "There’s magic in the heavens, but her presence feels closer."
        </p>
      </div>
    </section>
  );
}

export default Footer;
