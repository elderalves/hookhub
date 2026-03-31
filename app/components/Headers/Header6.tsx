"use client";

interface Header6Props {
  hookCount: number;
}

export default function Header6({ hookCount }: Header6Props) {
  return (
    <header className="relative pt-20 pb-16 overflow-hidden bg-[var(--background)]">
      {/* ---- Top wave layer (decorative) ---- */}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        style={{ height: "180px" }}
      >
        <path
          d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,60 1440,80 L1440,0 L0,0 Z"
          fill="rgba(99,102,241,0.07)"
        />
        <path
          d="M0,100 C240,20 480,140 720,80 C960,20 1200,140 1440,60 L1440,0 L0,0 Z"
          fill="rgba(139,92,246,0.05)"
        />
      </svg>

      {/* ---- Organic blob orbs ---- */}
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          top: "10%",
          left: "8%",
          width: "260px",
          height: "260px",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          background:
            "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.18), rgba(139,92,246,0.06) 70%, transparent)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute animate-float-delayed"
        style={{
          top: "25%",
          right: "5%",
          width: "320px",
          height: "320px",
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          background:
            "radial-gradient(circle at 60% 50%, rgba(236,72,153,0.14), rgba(139,92,246,0.05) 70%, transparent)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          borderRadius: "50% 50% 40% 60% / 60% 30% 70% 40%",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.1), transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      {/* ---- Flowing curved gradient line ---- */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="h6-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.15)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0.3)" />
          </linearGradient>
        </defs>
        <path
          d="M-50,300 C200,100 400,500 700,250 C1000,0 1200,400 1500,200"
          fill="none"
          stroke="url(#h6-flow)"
          strokeWidth="1.5"
        />
        <path
          d="M-50,400 C250,200 500,550 800,350 C1100,150 1300,450 1500,300"
          fill="none"
          stroke="url(#h6-flow)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      {/* ---- Main content ---- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-[var(--surface)]/60 backdrop-blur-sm border border-[var(--border)]"
          style={{
            borderRadius: "50px",
            boxShadow: "0 0 20px rgba(99,102,241,0.08)",
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
          </span>
          <span className="text-sm font-medium text-slate-300">
            <span className="font-bold text-white">{hookCount}</span> hooks
            available
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-6">
          <span
            className="inline-block bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-2), var(--accent-1))",
              backgroundSize: "200% 200%",
            }}
          >
            Hook
          </span>
          <span className="text-white">Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Streamline your development with{" "}
          <span className="text-slate-200 font-medium">Claude Code hooks</span>{" "}
          — automate workflows, enforce standards, and supercharge your coding
          pipeline.
        </p>

        {/* ---- Decorative divider with chain-link icon ---- */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="h-px w-24 sm:w-32"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--accent-1), var(--accent-2))",
            }}
          />
          {/* Chain-link icon */}
          <svg
            className="w-5 h-5 text-purple-400 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <div
            className="h-px w-24 sm:w-32"
            style={{
              background:
                "linear-gradient(to left, transparent, var(--accent-3), var(--accent-2))",
            }}
          />
        </div>
      </div>

      {/* ---- Bottom wave divider (large SVG) ---- */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "120px" }}
      >
        <defs>
          <linearGradient id="h6-wave-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.12)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.08)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0.12)" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C180,100 360,0 540,50 C720,100 900,20 1080,60 C1260,100 1380,30 1440,50 L1440,120 L0,120 Z"
          fill="url(#h6-wave-bottom)"
        />
        <path
          d="M0,60 C240,10 480,90 720,50 C960,10 1200,80 1440,40 L1440,120 L0,120 Z"
          fill="rgba(99,102,241,0.04)"
        />
      </svg>
    </header>
  );
}
