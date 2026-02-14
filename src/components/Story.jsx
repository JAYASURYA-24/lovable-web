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
      title: "Love at First Sight",
      date: "19th October 2025",
      description:
        "We met unexpectedly on a train. When I first saw you, I thought you were a close friend. That night journey was so beautiful; I will never forget it as long as I live. I didn't just give you space on the train—I gave you a space in my heart",
      emoji: "🫶🩷",
    },
    {
      title: "The First Date",
      date: "4th November 2025",
      description:
        "I was in my white shirt and you were in your yellow dress. Between the pav bhaji, the pani puri, and that first cup of tea at the 'Anna' tea shop, it’s a day I’ll never forget. That one fine day—and our first selfie together—will always be so memorable to me",
      emoji: "☕",
    },
  ];

  return (
    <section className="story" ref={sectionRef}>
      <h2 className={`section-title ${inView ? "slide-up" : ""}`}>
        Our Love Story
      </h2>
      <p className={`story-subtitle ${inView ? "slide-up" : ""}`}>
        "Every Love story is beautiful, but ours is my favorite"
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
