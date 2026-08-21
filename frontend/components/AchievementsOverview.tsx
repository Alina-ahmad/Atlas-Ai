"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    title: "Asked the right question",
    description:
      "You kept asking questions until the idea became clearer.",
    category: "Curiosity",
    color: "var(--sage)",
    symbol: "?",
  },
  {
    title: "Made a connection",
    description:
      "You connected a new idea with something you already understood.",
    category: "Understanding",
    color: "var(--blue)",
    symbol: "↗",
  },
  {
    title: "Bounced back",
    description:
      "You noticed a mistake, corrected it, and tried again.",
    category: "Resilience",
    color: "var(--lavender)",
    symbol: "↻",
  },
  {
    title: "Went deeper",
    description:
      "You moved beyond the first explanation and explored the idea further.",
    category: "Curiosity",
    color: "var(--sand)",
    symbol: "↓",
  },
  {
    title: "Explained it yourself",
    description:
      "You were able to explain a concept in your own words.",
    category: "Understanding",
    color: "var(--sage)",
    symbol: "✦",
  },
  {
    title: "Put it into practice",
    description:
      "You used something you learned to solve or create something.",
    category: "Application",
    color: "var(--blue)",
    symbol: "→",
  },
];

export default function AchievementsOverview() {
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
      <div className="mb-16">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Your achievements
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">
          The way you learn matters.
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--muted-text)]">
          Atlas celebrates the moments that show curiosity, resilience,
          understanding, and growth—not just how much you complete.
        </p>
      </div>

      {/* Featured achievement */}
      <div className="mb-14 rounded-3xl bg-[var(--surface)] p-8 ring-1 ring-[var(--text)]/5">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-2xl text-[var(--text)]"
            style={{ backgroundColor: "var(--sage)" }}
          >
            ✦
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--muted-text)]">
              Most recent
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-[var(--text)]">
              Explained it yourself
            </h2>

            <p className="mt-2 max-w-xl leading-6 text-[var(--muted-text)]">
              You explained a concept in your own words instead of relying
              on the original explanation.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement collection */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            Your collection
          </h2>

          <p className="mt-2 text-sm text-[var(--muted-text)]">
            Moments Atlas has noticed throughout your learning.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group flex gap-5 rounded-2xl bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg text-[var(--text)]"
                style={{
                  backgroundColor: achievement.color,
                }}
              >
                {achievement.symbol}
              </div>

              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: achievement.color }}
                >
                  {achievement.category}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[var(--text)]">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="mt-16 max-w-xl">
        <p className="text-sm leading-7 text-[var(--muted-text)]">
          There is no score here. These achievements are reminders of
          how your thinking has changed and how you've learned to keep going.
        </p>
      </div>
    </section>
  );
}