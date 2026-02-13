import React, { useEffect, useRef, useState } from 'react';

/**
 * Love Reasons Section - Why we love each other
 */
function LoveReasons() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
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

  const reasons = [
    {
      quote: "I like you not only for what you are, but for what I am when I am with you.",
      author: "Roy Croft"
    },
    {
      quote: "You are my today and all of my tomorrows.",
      author: "Leo Christopher"
    },
    {
      quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
      author: "Maya Angelou"
    },
    {
      quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
      author: "J.R.R. Tolkien"
    }
  ];

  return (
    <section className="love-reasons" ref={sectionRef}>
      <h2 className={`section-title ${inView ? 'slide-up' : ''}`}>
        Words Can't Describe
      </h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className={`reason-card ${inView ? 'flip-in' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="reason-quote-mark">"</div>
            <p className="reason-quote">{reason.quote}</p>
            <p className="reason-author">— {reason.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoveReasons;
