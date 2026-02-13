import React, { useEffect, useRef, useState } from 'react';

/**
 * Quotes Section - Romantic love quotes
 */
function Quotes() {
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
    <section className="quotes-section" ref={sectionRef}>
      <div className={`quote-card ${inView ? 'fade-scale' : ''}`}>
        <div className="quote-icon">❝</div>
        <p className="quote-text">
          "I fell in friendship with you because of the million things you never knew you were doing."
        </p>
        <div className="quote-divider"></div>
      </div>
    </section>
  );
}

export default Quotes;
