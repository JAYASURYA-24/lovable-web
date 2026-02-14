import React, { useEffect, useRef, useState } from "react";
import memory1 from "../assets/memory1.jpeg";
import memory2 from "../assets/memory2.jpeg";
import memory3 from "../assets/memory3.jpeg";
import memory4 from "../assets/memory4.jpeg";
import memory5 from "../assets/memory5.jpeg";
import memory6 from "../assets/memory6.jpeg";
import memory7 from "../assets/memory7.jpeg";
import memory8 from "../assets/memory8.jpeg";
import memory9 from "../assets/memory9.jpeg";
import memory10 from "../assets/memory10.jpeg";
import memory11 from "../assets/memory11.jpeg";
import memory12 from "../assets/memory12.jpeg";
import memory13 from "../assets/memory13.jpeg";
import memory14 from "../assets/memory14.jpeg";
import memory15 from "../assets/memory15.jpeg";
import memory16 from "../assets/memory16.jpeg";
import memory17 from "../assets/memory17.jpeg";
import memory18 from "../assets/memory18.jpeg";
import memory19 from "../assets/memory19.jpeg";
import memory20 from "../assets/memory20.jpeg";

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
    },
    {
      image: memory6,
    },
    {
      image: memory7,
    },
    {
      image: memory8,
    },
    {
      image: memory9,
    },
    {
      image: memory10,
    },
    {
      image: memory11,
    },
    {
      image: memory12,
    },
    {
      image: memory13,
    },
    {
      image: memory14,
    },
    {
      image: memory15,
    },
    {
      image: memory16,
    },
    {
      image: memory17,
    },
    {
      image: memory18,
    },
    {
      image: memory19,
    },
    {
      image: memory20,
    },
  ];

  return (
    <section className="moment-gallery" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Snapshots of Our Love
      </h2>
      <div className="gallery-quote">
        <p className={`${inView ? "fade-scale" : ""}`}>
          "We loved with a love that was more than Love" - Edgar Allan Poe
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
                {/* <p className="gallery-caption">{moment.caption}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MomentGallery;
