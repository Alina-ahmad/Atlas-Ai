"use client";

import { useEffect, useRef, useState } from "react";

const topics = [
  {
    title: "JavaScript",
    subtitle: "Understanding asynchronous programming",
    progress: "Exploring",
    color: "var(--sage)",
  },
  {
    title: "Calculus",
    subtitle: "Working with derivatives",
    progress: "Progressing",
    color: "var(--blue)",
  },
  {
    title: "Machine Learning",
    subtitle: "Learning how models learn from data",
    progress: "Curious",
    color: "var(--lavender)",
  },
];

export default function CurrentLearning() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mt-10 mb-24 transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Keep exploring
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
          What are you learning?
        </h2>

        <p className="mt-3 max-w-xl text-[var(--muted-text)]">
          Pick up where you left off, or follow your curiosity somewhere new.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {topics.map((topic) => (
          <button
            key={topic.title}
            className="group cursor-pointer rounded-2xl bg-[var(--surface)] p-6 text-left transition-all duration-500 ease-out  border border-foreground/5 hover:-translate-y-1 hover:shadow-sm"
          >
            <div
              className="mb-8 h-2 w-2 rounded-full"
              style={{ backgroundColor: topic.color }}
            />

            <p className="text-sm font-medium text-[var(--muted-text)]">
              {topic.progress}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">
              {topic.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
              {topic.subtitle}
            </p>

            <div className="mt-7 flex items-center text-sm font-medium text-[var(--text)] transition-all duration-300 group-hover:translate-x-1">
              Continue
              <span className="ml-2">→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}