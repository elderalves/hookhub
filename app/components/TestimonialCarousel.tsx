"use client";

import { useState, useSyncExternalStore } from "react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  accent: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mia Hoffmann",
    role: "Senior Engineer",
    company: "Vercel",
    quote:
      "HookHub turned my Claude Code setup from a blank slate into a production-grade workflow in under ten minutes. The PostToolUse lint hook alone saves me from committing broken code daily.",
    initials: "MH",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    name: "Carlos Reyes",
    role: "Staff Engineer",
    company: "Stripe",
    quote:
      "I never realized how much context I was manually re-typing every session. The SessionStart hooks I found here inject my full project spec automatically. Game-changer.",
    initials: "CR",
    accent: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Priya Nair",
    role: "Engineering Manager",
    company: "Linear",
    quote:
      "We rolled out the Permissions hooks across our entire team to prevent accidental writes to production paths. Zero incidents since. I recommend HookHub to every eng team using Claude Code.",
    initials: "PN",
    accent: "from-pink-500 to-rose-500",
  },
  {
    name: "Tom Lindqvist",
    role: "Founding Engineer",
    company: "Resend",
    quote:
      "The agent-type hooks are wild. I have a validator LLM that reviews every file write before it lands. It caught three security issues in the first week.",
    initials: "TL",
    accent: "from-amber-500 to-orange-500",
  },
  {
    name: "Aisha Kamara",
    role: "Developer Advocate",
    company: "Supabase",
    quote:
      "I feature HookHub in every Claude Code workshop I run. The catalogue is well-curated, the source links are transparent, and new hooks land every week.",
    initials: "AK",
    accent: "from-teal-500 to-cyan-500",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/3 px-3">
      <div className="h-full rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 flex flex-col gap-4 glow-border">
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
          <div
            className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-xs font-semibold text-white">
              {t.initials}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-200">{t.name}</p>
            <p className="text-xs text-slate-500">
              {t.role} · {t.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isDesktop = useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(min-width: 640px)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(min-width: 640px)").matches,
    () => false,
  );

  const visibleCount = isDesktop ? 3 : 1;
  const maxIndex = TESTIMONIALS.length - visibleCount;
  const clampedIndex = Math.min(currentIndex, maxIndex);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-16 border-t border-slate-800/50">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Loved by engineers
        </h2>
        <p className="text-slate-400">
          Hear from teams already running HookHub hooks in production.
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex carousel-track"
          style={{
            transform: `translateX(-${clampedIndex * (100 / TESTIMONIALS.length)}%)`,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          disabled={clampedIndex === 0}
          aria-label="Previous testimonial"
          className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === clampedIndex
                  ? "w-5 h-2 bg-indigo-500"
                  : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={clampedIndex === maxIndex}
          aria-label="Next testimonial"
          className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
