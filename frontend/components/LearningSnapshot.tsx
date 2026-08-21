"use client";

import { useEffect, useRef, useState } from "react";

const topics = [
  {
    name: "Python",
    stage: "Exploring",
    stageNumber: 2,
    message: "You're building a strong foundation. Keep practicing!",
    accent: "#8B6FD6",
  },
  {
    name: "Neural Networks",
    stage: "Curious",
    stageNumber: 1,
    message: "You're just starting to explore this topic.",
    accent: "#5F9F8A",
  },
  {
    name: "Machine Learning",
    stage: "Progressing",
    stageNumber: 3,
    message: "Great progress! You're understanding and applying concepts.",
    accent: "#E6A04B",
  },
];

const stages = [
  "Curious",
  "Exploring",
  "Progressing",
  "Strong",
  "Mastered",
];

export default function LearningSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mt-12 py-24 transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {/* Section heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Your learning journey
        </h2>

        <p className="mt-3 text-base text-foreground/60">
          See what you've been exploring and how your understanding is growing.
        </p>
      </div>

      {/* Topic cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="rounded-2xl border border-foreground/5 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Topic heading */}
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${topic.accent}18`,
                  color: topic.accent,
                }}
              >
                <span className="text-lg">✦</span>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {topic.name}
                </h3>

                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: topic.accent }}
                >
                  {topic.stage}
                </p>
              </div>
            </div>

            {/* Mastery progression */}
            <div className="mt-7">
              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-foreground/10" />

                <div className="relative flex justify-between">
                  {stages.map((stage, index) => {
                    const completed = index < topic.stageNumber;
                    const current = index === topic.stageNumber - 1;

                    return (
                      <div
                        key={stage}
                        className="flex h-3 w-3 items-center justify-center rounded-full border-2 bg-white"
                        style={{
                          borderColor:
                            completed || current
                              ? topic.accent
                              : "rgba(0,0,0,0.12)",
                          backgroundColor: current
                            ? topic.accent
                            : "white",
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 flex justify-between text-[11px] text-foreground/45">
                {stages.map((stage) => (
                  <span key={stage}>{stage}</span>
                ))}
              </div>
            </div>

            {/* Message */}
            <p className="mt-6 text-sm leading-6 text-foreground/60">
              {topic.message}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom thought */}
      <p className="mt-10 text-center text-sm text-foreground/50">
        ✦ The next big thing will be alot of small things.
      </p>
    </section>
  );
}