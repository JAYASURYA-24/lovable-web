import React, { useEffect, useRef, useState } from "react";
import karthika from "../assets/nithyaa.jpeg";
import surya from "../assets/logeshhh.jpeg";
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
        Two Souls, One Story
      </h2>
      <div className="intro-cards">
        <div
          className={`friend-card ${inView ? "slide-up" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="friend-photo">
            <div className="photo-frame"></div>
            <img src={surya} alt="Logesh" />
          </div>
          <h3 className="friend-name">Lowkey</h3>
          <p className="friend-description">
            My pookiee🎀, My porukki😇, My Chlooo😍, My thangoo🥰, My Babyy👶,
            My Mama🤩 & My Pu*****🙂. To Lowkey🤎.
          </p>
          <div className="love-emoji">🤎</div>
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
          <h3 className="friend-name">Neethu</h3>
          <p className="friend-description">
            My chlooo😍, My thangoo, My baby👼, My kuttu ma🤩, My thanga
            pulla🫂, My Pondatti😘 To Neethu💜
          </p>
          <div className="love-emoji">💜</div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
