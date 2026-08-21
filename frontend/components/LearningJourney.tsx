"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    title: "Curious",
    description: "You’re asking questions and discovering something new.",
    color: "var(--sage)",
  },
  {
    title: "Exploring",
    description: "You’re connecting ideas and building your understanding.",
    color: "var(--blue)",
  },
  {
    title: "Progressing",
    description: "You’re practicing, questioning, and becoming more confident.",
    color: "var(--lavender)",
  },
  {
    title: "Strong",
    description: "You can explain ideas and apply what you’ve learned.",
    color: "var(--sand)",
  },
  {
    title: "Mastered",
    description: "You can use your knowledge independently and transfer it.",
    color: "var(--sage)",
  },
];

export default function LearningJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mt-10 mb-25 transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Your path
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
          Learning road map
        </h2>

        <p className="mt-3 max-w-xl text-[var(--muted-text)]">
          Learning isn’t about rushing to the finish line. Atlas helps you
          understand where you are and grow from there.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {stages.map((stage, index) => (
          <div
            key={stage.title}
            className="group rounded-2xl bg-[var(--surface)] p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-sm"
          >
            <div
              className="mb-6 flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-[var(--text)]"
              style={{
                backgroundColor: stage.color,
              }}
            >
              {index + 1}
            </div>

            <h3 className="text-lg font-semibold text-[var(--text)]">
              {stage.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}