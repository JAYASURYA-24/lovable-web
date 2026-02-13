import React, { useEffect, useRef, useState } from "react";

/**
 * Story Section - Timeline of their love story
 */
function Story() {
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

  const storyMilestones = [
    {
      title: "Bond at First Sight",
      date: "February 8, 2026",
      description:
        "Our ride began with a simple plan, but somewhere between the moving roads and shared silence, time slowed down. The wind carried our words, the journey stretched longer than expected, and I knew this ride would stay with me forever.",
      emoji: "✨",
    },
    {
      title: "The First Date",
      date: "February 8, 2026",
      description:
        "A bike ride turned into a beach stop, the waves became our background music. We talked under the open sky until 10 PM, and I never wanted that night to end",
      emoji: "☕",
    },
  ];

  return (
    <section className="story" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Our Friendship Story
      </h2>
      <p className={`story-subtitle ${inView ? "slide-up" : ""}`}>
        "Every friendship story is beautiful, but ours is my favorite"
      </p>
      <div className="timeline">
        {storyMilestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item ${inView ? "slide-up" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-marker">
              <span className="timeline-emoji">{milestone.emoji}</span>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{milestone.title}</h3>
              <p className="timeline-date">{milestone.date}</p>
              <p className="timeline-description">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;
