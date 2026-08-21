"use client";

import Image from "next/image";
import { useState } from "react";
import {
  useCompanionStore,
  CompanionId,
} from "@/store/useCompanionStore";
import { COMPANION_IMAGES } from "@/lib/companion";

const companionOptions: {
  id: CompanionId;
  name: string;
  description: string;
}[] = [
  {
    id: "companion1",
    name: "Companion One",
    description:
      "Curious, expressive, and always ready to explore with you.",
  },
  {
    id: "companion2",
    name: "Companion Two",
    description:
      "Calm, friendly, and always here when you need a little help.",
  },
];

export default function SettingsOverview() {
  const companion = useCompanionStore((state) => state.companion);
  const setCompanion = useCompanionStore(
    (state) => state.setCompanion
  );

  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <section className="pt-16 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-2 text-sm font-medium text-[var(--muted-text)]">
          Settings
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)]">
          Make Atlas feel like yours.
        </h1>

        <p className="mt-4 max-w-xl leading-7 text-[var(--muted-text)]">
          Customize your learning environment and choose the companion
          that learns alongside you.
        </p>
      </div>

      {/* Appearance */}
      <section className="border-b border-[var(--text)]/5 py-10">
        <div className="mb-7">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Appearance
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
            Choose the appearance you'd like to use while learning.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`
              cursor-pointer
              rounded-full
              px-5 py-2.5
              text-sm font-medium
              transition-all duration-300 ease-out
              ${
                theme === "light"
                  ? "bg-[var(--sage)] text-[var(--text)] shadow-sm"
                  : "bg-[var(--surface)] text-[var(--muted-text)] hover:-translate-y-0.5"
              }
            `}
          >
            Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`
              cursor-pointer
              rounded-full
              px-5 py-2.5
              text-sm font-medium
              transition-all duration-300 ease-out
              ${
                theme === "dark"
                  ? "bg-[var(--lavender)] text-[var(--text)] shadow-sm"
                  : "bg-[var(--surface)] text-[var(--muted-text)] hover:-translate-y-0.5"
              }
            `}
          >
            Dark
          </button>
        </div>
      </section>

      {/* Language */}
      <section className="border-b border-[var(--text)]/5 py-10">
        <div className="mb-7">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Language
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
            Choose the language Atlas uses when communicating with you.
          </p>
        </div>

        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="
            cursor-pointer
            rounded-xl
            border border-[var(--text)]/10
            bg-[var(--surface)]
            px-4 py-3
            text-sm
            text-[var(--text)]
            outline-none
            transition-all duration-300
            focus:ring-2
            focus:ring-[var(--sage)]/40
          "
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
      </section>

      {/* Companion */}
      <section className="py-10">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[var(--text)]">
            Your companion
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted-text)]">
            Choose who you'd like to accompany you while you learn.
            You can change your companion whenever you want.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {companionOptions.map((option) => {
            const selected = companion === option.id;

            return (
              <button
                key={option.id}
                onClick={() => setCompanion(option.id)}
                className={`
                  group
                  cursor-pointer
                  rounded-3xl
                  p-6
                  text-left
                  transition-all
                  duration-500
                  ease-out
                  ${
                    selected
                      ? "bg-[var(--sage)]/15 ring-2 ring-[var(--sage)]"
                      : "bg-[var(--surface)] ring-1 ring-[var(--text)]/5 hover:-translate-y-1 hover:shadow-sm"
                  }
                `}
              >
                <div className="flex items-center gap-6">
                  {/* Companion preview */}
                  <div
                    className={`
                      relative
                      flex h-32 w-32
                      shrink-0
                      items-end
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      transition-all duration-500
                      ${
                        selected
                          ? "bg-[var(--background)]"
                          : "bg-[var(--background)]/70"
                      }
                    `}
                  >
                    <Image
                      src={COMPANION_IMAGES[option.id][0]}
                      alt={option.name}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Information */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-[var(--text)]">
                        {option.name}
                      </h3>

                      {selected && (
                        <span className="text-sm font-medium text-[var(--sage)]">
                          ✓
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                      {option.description}
                    </p>

                    <p
                      className={`
                        mt-3 text-xs font-medium
                        transition-opacity duration-300
                        ${
                          selected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                      style={{
                        color: "var(--sage)",
                      }}
                    >
                      {selected ? "Currently selected" : "Choose companion"}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </section>
  );
}