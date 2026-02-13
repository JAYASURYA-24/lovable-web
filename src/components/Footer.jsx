import React, { useEffect, useRef, useState } from 'react';

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
      { threshold: 0.3 }
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
      <div className={`footer-content ${inView ? 'fade-scale' : ''}`}>
        <div className="footer-hearts-top">
          <span className="heart-icon">💕</span>
        </div>
        <div className="quote-mark">"</div>
        <blockquote className="footer-quote">
          I like you not because of who you are,<br />
          but because of who I am when I'm with you.
        </blockquote>
        <p className="footer-tagline">
          One week down, forever to go.
        </p>
        <p className="footer-date">
          February 8, 2026 - Forever
        </p>
        <div className="footer-hearts">
          <span className="heart">❤️</span>
          <span className="infinity">∞</span>
          <span className="heart">💛</span>
        </div>
        <p className="footer-final-message">
          "And in her smile I see something more beautiful than the stars." - Beth Revis
        </p>
      </div>
    </section>
  );
}

export default Footer;
