import React, { useEffect, useRef, useState } from "react";
import hand from "../assets/IMG-20260208-WA0064.jpg.jpeg";
import ocean from "../assets/IMG-20260208-WA0031.jpg.jpeg";
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
      image:
        "https://images.unsplash.com/photo-1758810410699-2dc1daec82dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MXx8fHwxNzcwNzkyNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Sunset Dreams",
      caption: "day 1 - Our first sunset together",
    },
    {
      image: hand,
      title: "Hand in Hand",
      caption: "day 1 - Walking through life together",
    },

    {
      image: ocean,
      title: "Beach Bliss",
      caption: "day 1 - Making memories by the ocean",
    },
  ];

  return (
    <section className="memories" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Our Precious Moments
      </h2>
      <p className={`section-subtitle ${inView ? "slide-up" : ""}`}>
        "In you, I've found the love of my life and my closest, truest friend"
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
