import React, { useEffect, useRef, useState } from "react";

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

  const reasons = [
    {
      quote: "I need you like a heart needs a beat",
    },
    {
      quote:
        "When I say I love you more, I don’t mean I love you more than you love me",
    },
    {
      quote:
        "All at once you are the one I have been waiting for. King of my heart, body and soul",
    },
    {
      quote: "I’ll be loving you, always with a love that’s true",
    },
  ];

  return (
    <section className="love-reasons" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Words Can't Describe
      </h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`reason-card ${inView ? "flip-in" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="reason-quote-mark">"</div>
            <p className="reason-quote">{reason.quote}</p>
            {/* <p className="reason-author">— {reason.author}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoveReasons;
