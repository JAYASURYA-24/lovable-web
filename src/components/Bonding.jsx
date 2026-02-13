import React, { useEffect, useRef, useState } from "react";

/**
 * Bonding Section - Highlighting the emotional connection
 */
function Bonding() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
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

  const bonds = [
    {
      icon: "🌙",
      title: "Midnight Confessions",
      description:
        "“Those late-night talks where sleep disappears and our hearts do all the talking. That’s when friendship feels the most real.”",
    },
    {
      icon: "💬",
      title: " Unfiltered Moments",
      description:
        "Laughing, ranting, sharing secrets—every word with you feels safe. That’s how I know this friendship is special.",
    },
    {
      icon: "🫶",
      title: "Silent Understanding",
      description:
        "Sometimes we don’t need words. One look is enough for you to understand exactly what I’m feeling",
    },
    {
      icon: "💑",
      title: "Forever Promise",
      description:
        "This isn’t a temporary bond. No matter where life takes us, I know this friendship is here to stay.",
    },
  ];

  return (
    <section className="bonding" ref={sectionRef}>
      <div className="bonding-background"></div>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        What Makes Us Perfect
      </h2>
      <p className={`section-subtitle ${inView ? "slide-up" : ""}`}>
        "The best bond is the kind that awakens the soul"
      </p>
      <div className="bonding-grid">
        {bonds.map((bond, index) => (
          <div
            key={index}
            className={`bonding-card ${inView ? "slide-up" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="bonding-icon">{bond.icon}</div>
            <h3 className="bonding-title">{bond.title}</h3>
            <p className="bonding-description">{bond.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bonding;
