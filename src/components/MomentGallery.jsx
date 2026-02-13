import React, { useEffect, useRef, useState } from "react";
import memory1 from "../assets/IMG-20260208-WA0075.jpg.jpeg";
import memory2 from "../assets/IMG-20260208-WA0065.jpg.jpeg";
import memory3 from "../assets/IMG-20260208-WA0064.jpg.jpeg";
import memory4 from "../assets/IMG-20260208-WA0060.jpg.jpeg";
import memory5 from "../assets/IMG-20260208-WA0054.jpg.jpeg";

/**
 * Moment Gallery - Additional photo showcase section
 */
function MomentGallery() {
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

  const moments = [
    {
      image: memory1,
      caption: "Every moments feels like the first",
    },
    {
      image: memory2,
      caption: "Lost in nature, found in you",
    },
    {
      image: memory3,
      caption: "Dancing through life together",
    },
    {
      image: memory4,
      caption: "You have my whole heart",
    },
    {
      image: memory5,
      caption: "Your laugh is my favorite sound",
    },
  ];

  return (
    <section className="moment-gallery" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Snapshots of friendship
      </h2>
      <div className="gallery-quote">
        <p className={`${inView ? "fade-scale" : ""}`}>
          "We loved with a love that was more than friendship" - Edgar Allan Poe
        </p>
      </div>
      <div className="gallery-grid">
        {moments.map((moment, index) => (
          <div
            key={index}
            className={`gallery-item ${inView ? "zoom-in" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="gallery-image-wrapper">
              <img src={moment.image} alt={moment.caption} />
              <div className="gallery-overlay">
                <p className="gallery-caption">{moment.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MomentGallery;
