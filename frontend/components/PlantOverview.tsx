"use client";

import { useEffect, useRef, useState } from "react";

const growthAreas = [
  {
    title: "Understanding",
    description: "How deeply you're grasping the ideas you explore.",
    value: 72,
    color: "var(--sage)",
  },
  {
    title: "Application",
    description: "How often you're putting what you learn into practice.",
    value: 58,
    color: "var(--blue)",
  },
  {
    title: "Transfer",
    description: "How well you connect your knowledge to new situations.",
    value: 44,
    color: "var(--lavender)",
  },
];

export default function PlantOverview() {
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
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Your plant
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">
          Watch your learning grow.
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--muted-text)]">
          Your plant represents your learning journey as a whole. It grows
          through understanding, effort, reflection, and persistence.
        </p>
      </div>

      {/* Plant area */}
      <div className="mb-16 flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-[var(--surface)]">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex h-64 w-64 items-center justify-center">
            {/* Soft background circles */}
            <div className="absolute h-56 w-56 rounded-full bg-[var(--sage)]/20" />
            <div className="absolute h-44 w-44 rounded-full bg-[var(--sage)]/10" />

            {/* Plant placeholder */}
            <div className="relative z-10 text-8xl">
              🌱
            </div>
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-[var(--text)]">
            Still growing
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted-text)]">
            Every thoughtful question, corrected mistake, and moment of
            understanding helps your plant grow.
          </p>
        </div>
      </div>

      {/* Growth areas */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            What helps it grow?
          </h2>

          <p className="mt-2 text-sm text-[var(--muted-text)]">
            Atlas looks at different kinds of evidence across your learning.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {growthAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl bg-[var(--surface)] p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--text)]">
                  {area.title}
                </h3>

                <span
                  className="text-sm font-medium"
                  style={{ color: area.color }}
                >
                  {area.value}%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--text)]/5">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${visible ? area.value : 0}%`,
                    backgroundColor: area.color,
                  }}
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-[var(--muted-text)]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reflection */}
      <div className="mt-16 text-center">
        <p className="mx-auto max-w-xl text-sm leading-7 text-[var(--muted-text)]">
          Your plant isn't a score. It's a quiet reflection of the effort
          you're putting into becoming a better learner.
        </p>
      </div>
    </section>
  );
}