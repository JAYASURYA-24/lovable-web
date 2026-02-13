import React, { useEffect, useRef, useState } from "react";
import karthika from "../assets/20260212_195717.jpg.jpeg";
import surya from "../assets/IMG-20260119-WA0006.jpg.jpeg";
/**
 * Intro Section - Introducing the two lovers with photo cards
 */
function Intro() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 },
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
    <section className="intro" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Two Souls, One Heart
      </h2>
      <div className="intro-cards">
        <div
          className={`friend-card ${inView ? "slide-up" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="friend-photo">
            <div className="photo-frame"></div>
            <img src={surya} alt="Surya" />
          </div>
          <h3 className="friend-name">Surya</h3>
          <p className="friend-description">
            My rock, my comfort, my safe place. The one who sees through my
            walls and like every part of me.
          </p>
          <div className="love-emoji">💙</div>
        </div>

        <div className="heart-connector">
          <div className="heart-pulse">💗</div>
        </div>

        <div
          className={`friend-card ${inView ? "slide-up" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="friend-photo">
            <div className="photo-frame"></div>
            <img src={karthika} alt="Karthika" />
          </div>
          <h3 className="friend-name">Karthika</h3>
          <p className="friend-description">
            My sunshine, my laughter, my everything. The one who makes every
            moment feel like magic.
          </p>
          <div className="love-emoji">💛</div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
