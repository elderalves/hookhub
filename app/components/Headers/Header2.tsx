"use client";

interface Header2Props {
  hookCount: number;
}

/* ── tiny star data (fixed positions so no layout shift) ── */
const STARS = [
  { x: 5, y: 12, size: 2, opacity: 0.6 },
  { x: 12, y: 45, size: 1.5, opacity: 0.4 },
  { x: 20, y: 8, size: 2.5, opacity: 0.7 },
  { x: 28, y: 70, size: 1, opacity: 0.35 },
  { x: 35, y: 25, size: 2, opacity: 0.5 },
  { x: 42, y: 55, size: 1.5, opacity: 0.45 },
  { x: 50, y: 15, size: 3, opacity: 0.8 },
  { x: 58, y: 80, size: 1, opacity: 0.3 },
  { x: 65, y: 35, size: 2, opacity: 0.55 },
  { x: 72, y: 60, size: 1.5, opacity: 0.5 },
  { x: 78, y: 10, size: 2.5, opacity: 0.65 },
  { x: 85, y: 42, size: 1, opacity: 0.4 },
  { x: 90, y: 75, size: 2, opacity: 0.6 },
  { x: 95, y: 20, size: 1.5, opacity: 0.35 },
  { x: 15, y: 85, size: 2, opacity: 0.5 },
  { x: 55, y: 90, size: 1, opacity: 0.3 },
  { x: 38, y: 5, size: 2, opacity: 0.7 },
  { x: 82, y: 88, size: 1.5, opacity: 0.45 },
  { x: 8, y: 60, size: 1, opacity: 0.35 },
  { x: 68, y: 5, size: 2, opacity: 0.55 },
];

/* ── constellation lines connecting certain stars ── */
const CONSTELLATIONS = [
  { x1: 5, y1: 12, x2: 20, y2: 8 },
  { x1: 20, y1: 8, x2: 35, y2: 25 },
  { x1: 35, y1: 25, x2: 50, y2: 15 },
  { x1: 50, y1: 15, x2: 68, y2: 5 },
  { x1: 68, y1: 5, x2: 78, y2: 10 },
  { x1: 12, y1: 45, x2: 28, y2: 70 },
  { x1: 28, y1: 70, x2: 42, y2: 55 },
  { x1: 42, y1: 55, x2: 65, y2: 35 },
  { x1: 65, y1: 35, x2: 72, y2: 60 },
  { x1: 72, y1: 60, x2: 90, y2: 75 },
  { x1: 85, y1: 42, x2: 95, y2: 20 },
  { x1: 15, y1: 85, x2: 55, y2: 90 },
];

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L13.6 8.4L22 10L13.6 11.6L12 20L10.4 11.6L2 10L10.4 8.4L12 0Z" />
      <path
        d="M19 14L19.8 17.2L23 18L19.8 18.8L19 22L18.2 18.8L15 18L18.2 17.2L19 14Z"
        opacity={0.6}
      />
      <path
        d="M5 16L5.5 18.5L8 19L5.5 19.5L5 22L4.5 19.5L2 19L4.5 18.5L5 16Z"
        opacity={0.4}
      />
    </svg>
  );
}

function ChainLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function Header2({ hookCount }: Header2Props) {
  return (
    <header className="relative pt-20 pb-16 overflow-hidden">
      {/* ── radial fade overlay ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, var(--background) 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* ── starfield ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      {/* ── constellation lines ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {CONSTELLATIONS.map((c, i) => (
          <line
            key={`line-${i}`}
            x1={`${c.x1}%`}
            y1={`${c.y1}%`}
            x2={`${c.x2}%`}
            y2={`${c.y2}%`}
            stroke="rgba(139,92,246,0.12)"
            strokeWidth={0.8}
          />
        ))}
      </svg>

      {/* ── nebula orbs ── */}
      <div
        className="pointer-events-none absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-24 h-[360px] w-[360px] rounded-full animate-float-delayed"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(139,92,246,0.06) 45%, transparent 70%)",
          filter: "blur(55px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* ── content layer ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-950/40 px-4 py-1.5 text-sm backdrop-blur-sm">
          <SparkleIcon className="h-3.5 w-3.5 text-purple-400" />
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          <span className="text-slate-300">
            <span className="font-semibold text-white">{hookCount}</span> hooks
            available
          </span>
        </div>

        {/* title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
          <span
            className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
          >
            Hook
          </span>
          <span className="text-white">Hub</span>
        </h1>

        {/* subtitle */}
        <p className="mt-5 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Automate your development workflow with{" "}
          <span className="text-purple-300">Claude Code hooks</span> — event-driven
          scripts that run before, during, and after every coding session.
        </p>

        {/* ── decorative divider ── */}
        <div
          className="pointer-events-none mt-10 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <SparkleIcon className="h-3 w-3 text-indigo-500/50" />
          <span className="h-px w-8 bg-purple-500/40" />
          <ChainLinkIcon className="h-4 w-4 text-purple-400/60" />
          <span className="h-px w-8 bg-purple-500/40" />
          <SparkleIcon className="h-3 w-3 text-pink-500/50" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
      </div>
    </header>
  );
}
