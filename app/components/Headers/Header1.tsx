"use client";

interface Header1Props {
  hookCount: number;
}

export default function Header1({ hookCount }: Header1Props) {
  return (
    <header className="relative pt-20 pb-16 overflow-hidden">
      {/* ── Geometric background shapes ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large rotated square — top-right */}
        <div
          className="animate-float absolute -top-24 -right-24 h-72 w-72 opacity-[0.07]"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />

        {/* Hexagon — left side */}
        <div
          className="animate-float-delayed absolute top-16 -left-16 h-56 w-56 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(160deg, var(--accent-2), var(--accent-3))",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        />

        {/* Small diamond — bottom-center */}
        <div
          className="animate-float absolute bottom-8 left-1/2 h-36 w-36 -translate-x-1/2 opacity-[0.05]"
          style={{
            background:
              "linear-gradient(45deg, var(--accent-3), var(--accent-1))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />

        {/* Diagonal slash lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--accent-1) 0px, var(--accent-1) 1px, transparent 1px, transparent 48px)",
          }}
        />

        {/* Faceted triangle — top-left */}
        <div
          className="animate-float-delayed absolute top-32 left-1/4 h-20 w-20 opacity-[0.08]"
          style={{
            background:
              "linear-gradient(180deg, var(--accent-1), transparent)",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Rotated rectangle accent — right side */}
        <div
          className="animate-float absolute top-1/2 right-12 h-28 w-12 -translate-y-1/2 rotate-45 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent-2), var(--accent-3))",
          }}
        />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Angular badge */}
        <div className="mb-8 inline-flex items-center gap-2.5">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium tracking-wide text-indigo-300"
            style={{
              background: "rgba(99, 102, 241, 0.08)",
              clipPath:
                "polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            {hookCount} hooks available
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span
            className="animate-gradient bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))",
              backgroundSize: "200% 200%",
            }}
          >
            Hook
          </span>
          <span className="text-white">Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
          Supercharge your workflow with Claude Code hooks — automate tasks,
          enforce standards, and orchestrate your development pipeline.
        </p>

        {/* ── Geometric divider ── */}
        <div className="pointer-events-none flex items-center justify-center gap-3">
          {/* Left gradient line — angled via skew */}
          <div
            className="h-px w-24 -skew-y-2 sm:w-36"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--accent-1))",
            }}
          />

          {/* Chain-link icon (diamond-framed) */}
          <div
            className="relative flex h-9 w-9 shrink-0 items-center justify-center"
            style={{
              background: "rgba(99, 102, 241, 0.12)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          >
            <svg
              className="h-4 w-4 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>

          {/* Right gradient line — angled via skew */}
          <div
            className="h-px w-24 skew-y-2 sm:w-36"
            style={{
              background:
                "linear-gradient(to left, transparent, var(--accent-3))",
            }}
          />
        </div>
      </div>
    </header>
  );
}
