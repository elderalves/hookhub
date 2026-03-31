"use client";

interface Header4Props {
  hookCount: number;
}

export default function Header4({ hookCount }: Header4Props) {
  return (
    <header className="relative pt-20 pb-16 overflow-hidden">
      {/* Background orbs - vivid for glass refraction effect */}
      <div
        className="pointer-events-none absolute top-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full bg-indigo-500/30 blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-60px] right-[-80px] w-[380px] h-[380px] rounded-full bg-purple-600/25 blur-[90px] animate-float-delayed"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-[260px] h-[260px] rounded-full bg-pink-500/20 blur-[80px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/3 w-[200px] h-[200px] rounded-full bg-accent-1/25 blur-[70px] animate-float"
        aria-hidden="true"
      />

      {/* Offset glass rectangles - decorative background layers */}
      <div
        className="pointer-events-none absolute top-8 left-[10%] w-[45%] h-[70%] rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rotate-[-2deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 right-[8%] w-[40%] h-[65%] rounded-2xl bg-indigo-500/[0.03] backdrop-blur-sm border border-white/[0.05] rotate-[1.5deg] shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-16 left-[20%] w-[55%] h-[55%] rounded-3xl bg-purple-500/[0.02] backdrop-blur-md border border-white/[0.04] rotate-[0.5deg] shadow-[inset_0_2px_2px_rgba(255,255,255,0.03)]"
        aria-hidden="true"
      />

      {/* Main content - z-10 above orbs */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Badge on its own glass card */}
        <div className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(99,102,241,0.08)] ring-1 ring-inset ring-white/[0.04]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
          </span>
          <span className="text-sm font-medium text-slate-200 tracking-wide">
            <span className="font-bold text-white">{hookCount}</span>{" "}
            hooks available
          </span>
        </div>

        {/* Glass panel behind title + subtitle */}
        <div className="relative w-full py-10 px-6 sm:px-10 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_8px_60px_rgba(99,102,241,0.06)] ring-1 ring-inset ring-white/[0.03]">
          {/* Inner decorative glass accent */}
          <div
            className="pointer-events-none absolute inset-x-8 top-3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Hook
            </span>
            <span className="text-white">Hub</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Supercharge your development with{" "}
            <span className="text-slate-200 font-medium">Claude Code hooks</span>{" "}
            — automate repetitive workflows, enforce standards, and ship faster
            with intelligent automation.
          </p>
        </div>

        {/* Decorative divider in a thin glass strip */}
        <div className="mt-10 w-full max-w-md flex items-center justify-center">
          <div className="relative flex items-center w-full py-3 px-6 rounded-full bg-white/[0.03] backdrop-blur-lg border border-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            <div className="mx-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 shadow-[0_0_12px_rgba(139,92,246,0.15)]">
              {/* Chain-link icon */}
              <svg
                className="w-4 h-4 text-purple-400"
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
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
}
