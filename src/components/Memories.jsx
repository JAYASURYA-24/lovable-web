import React, { useEffect, useRef, useState } from "react";
import hand from "../assets/meet-at-station.jpeg";
import ocean from "../assets/eating.jpeg";
import train from "../assets/train-meet.jpeg";
/**
 * Memories Section - Photo gallery of romantic moments
 */
function Memories() {
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

  const memories = [
    {
      image: train,
      title: "Train Journey",
      caption: "1st meet in Train",
    },
    {
      image: hand,
      title: "Random Outing",
      caption: "Lovable moments and Places",
    },

    {
      image: ocean,
      title: "Cafe and Hotels",
      caption: "Our Caring and Sharing",
    },
  ];

  return (
    <section className="memories" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Our Precious Moments
      </h2>
      <p className={`section-subtitle ${inView ? "slide-up" : ""}`}>
        "In you, I've found the love of my life and my closest, truest soul"
      </p>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <div
            key={index}
            className={`memory-card ${inView ? "slide-up" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="memory-image">
              <img src={memory.image} alt={memory.title} />
              <div className="memory-overlay">
                <h3>{memory.title}</h3>
              </div>
              <div className="memory-hearts">
                <span>❤️</span>
              </div>
            </div>
            <div className="memory-info">
              <h4>{memory.title}</h4>
              <p>{memory.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Memories;
