
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCompanionStore } from "@/store/useCompanionStore";
import { COMPANION_IMAGES } from "@/lib/companion";

const suggestions = [
  "Explain something to me",
  "Help me understand a concept",
  "Quiz me on something",
];


export default function LearningWorkspace() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const companion = useCompanionStore((s) => s.companion);
  const images = COMPANION_IMAGES[companion]

  // --- companion cycling state ---
  const [isTyping, setIsTyping] = useState(false);
  const [companionIndex, setCompanionIndex] = useState(0);
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingStopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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


    useEffect(() => {
     setCompanionIndex(0);
    }, [companion]);

  // Cycle companion image on a random 1s–2s interval while typing
  useEffect(() => {
    if (!isTyping) {
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
      return;
    }


    const scheduleNext = () => {
      const delay = 1000 + Math.random() * 1000; // 1000ms - 2000ms
      cycleTimeoutRef.current = setTimeout(() => {
        setCompanionIndex((prev) => (prev + 1) % images.length);
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
  }, [isTyping]);

  const handleTextareaChange = () => {
    setIsTyping(true);
    if (typingStopTimeoutRef.current) clearTimeout(typingStopTimeoutRef.current);
    typingStopTimeoutRef.current = setTimeout(() => setIsTyping(false), 1000);
  };

  // Clean up the "stopped typing" timeout on unmount
  useEffect(() => {
    return () => {
      if (typingStopTimeoutRef.current) clearTimeout(typingStopTimeoutRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`pt-16 transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {/* Introduction */}
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Learning space
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">
          What are you curious about?
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted-text)]">
          Ask Atlas anything. Explore ideas, question your understanding,
          and learn at your own pace.
        </p>
      </div>

      {/* Learning input */}
      <div
        className="
          relative
          rounded-3xl
          bg-[var(--surface)]
          p-6
          shadow-sm
          ring-1 ring-[var(--text)]/5
        "
      >
        <textarea
          placeholder="What would you like to learn?"
          onChange={handleTextareaChange}
          className="
            min-h-40
            w-full
            resize-none
            bg-transparent
            text-lg
            leading-8
            text-[var(--text)]
            outline-none
            placeholder:text-[var(--muted-text)]/60
          "
        />
        <Image
          src={images[companionIndex]}
          alt="atlas companion"
          width={80}
          height={80}
          className="absolute right-12 bottom-17.5 transition-opacity duration-300"
        />
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-[var(--muted-text)]">
            Atlas learns from how you learn.
          </p>

          <button
            className="
              cursor-pointer
              rounded-full
              bg-sage/60
              px-6
              py-3
              text-sm
              font-medium
              text-background
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:shadow-sm
              hover:bg-sage/80
            "
          >
            Start learning →
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-8">
        <p className="mb-4 text-sm text-[var(--muted-text)]">
          Or start with something like...
        </p>

        <div className="flex flex-wrap gap-3">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="
                cursor-pointer
                rounded-full
                border
                border-[var(--text)]/10
                px-4
                py-2.5
                text-sm
                text-[var(--text)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-0.5
                hover:bg-[var(--surface)]
              "
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}