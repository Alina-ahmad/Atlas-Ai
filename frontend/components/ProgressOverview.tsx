"use client";

import { useEffect, useRef, useState } from "react";

const topics = [
  {
    name: "Python",
    stage: "Exploring",
    stageNumber: 2,
    color: "var(--sage)",
    description:
      "You're building a foundation and beginning to connect concepts together.",
  },
  {
    name: "Machine Learning",
    stage: "Progressing",
    stageNumber: 3,
    color: "var(--blue)",
    description:
      "You're becoming more confident applying what you've learned.",
  },
  {
    name: "Neural Networks",
    stage: "Curious",
    stageNumber: 1,
    color: "var(--lavender)",
    description:
      "You're beginning to explore the ideas behind this topic.",
  },
];

const stages = [
  "Curious",
  "Exploring",
  "Progressing",
  "Strong",
  "Mastered",
];

export default function ProgressOverview() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`pt-16 pb-24 transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {/* Header */}
      <div className="mb-14">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Your progress
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">
          See how your understanding is growing.
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--muted-text)]">
          Atlas looks beyond completion and scores. Your progress reflects
          how deeply you understand, apply, and connect what you learn.
        </p>
      </div>

      {/* Mastery path */}
      <div className="mb-16 rounded-3xl bg-[var(--surface)] p-8 ring-1 ring-[var(--text)]/5">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Your learning path
          </h2>

          <p className="mt-2 text-sm text-[var(--muted-text)]">
            Every topic develops through the same five stages.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-[var(--text)]/10 md:block" />

          <div className="relative grid gap-8 md:grid-cols-5">
            {stages.map((stage, index) => {
              const colors = [
                "var(--sage)",
                "var(--blue)",
                "var(--lavender)",
                "var(--sand)",
                "var(--sage)",
              ];

              return (
                <div key={stage} className="flex items-center gap-4 md:block">
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-[var(--text)]"
                    style={{
                      backgroundColor: colors[index],
                    }}
                  >
                    {index + 1}
                  </div>

                  <div className="md:mt-4">
                    <h3 className="font-medium text-[var(--text)]">
                      {stage}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[var(--muted-text)]">
                      {getStageDescription(stage)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Topic progress */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            Topics you're growing in
          </h2>

          <p className="mt-2 text-sm text-[var(--muted-text)]">
            Your current understanding across the things you've been learning.
          </p>
        </div>

        <div className="space-y-5">
          {topics.map((topic) => (
            <div
              key={topic.name}
              className="rounded-2xl bg-[var(--surface)] p-6 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                {/* Topic */}
                <div className="min-w-44">
                  <h3 className="font-semibold text-[var(--text)]">
                    {topic.name}
                  </h3>

                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: topic.color }}
                  >
                    {topic.stage}
                  </p>
                </div>

                {/* Progress */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {stages.map((stage, index) => {
                      const completed = index < topic.stageNumber;
                      const current = index === topic.stageNumber - 1;

                      return (
                        <div
                          key={stage}
                          className="h-2 flex-1 rounded-full"
                          style={{
                            backgroundColor:
                              completed || current
                                ? topic.color
                                : "rgba(63, 68, 66, 0.08)",
                          }}
                        />
                      );
                    })}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted-text)]">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="mt-16 text-center">
        <p className="text-sm text-[var(--muted-text)]">
          Atlas cares about understanding, not rushing to the next level.
        </p>
      </div>
    </section>
  );
}

function getStageDescription(stage: string) {
  switch (stage) {
    case "Curious":
      return "Discovering questions";
    case "Exploring":
      return "Building understanding";
    case "Progressing":
      return "Applying ideas";
    case "Strong":
      return "Explaining and connecting";
    case "Mastered":
      return "Using knowledge independently";
    default:
      return "";
  }
}