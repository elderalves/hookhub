"use client";

interface Header5Props {
  hookCount: number;
}

export default function Header5({ hookCount }: Header5Props) {
  return (
    <header className="relative pt-20 pb-16 overflow-hidden font-mono grid-pattern">
      {/* Background orbs */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent-1/10 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-2/10 blur-3xl animate-float-delayed"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-3/5 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Decorative line numbers on left */}
      <div
        className="pointer-events-none absolute left-4 sm:left-8 top-16 bottom-8 flex flex-col gap-[1.15rem] text-xs text-muted/30 select-none"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="tabular-nums">
            {String(i + 1).padStart(3, "\u00a0")}
          </span>
        ))}
      </div>

      {/* Decorative code snippets in background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none text-accent-1/[0.04] text-sm leading-relaxed"
        aria-hidden="true"
      >
        <pre className="absolute top-12 right-[10%] rotate-3">
          {`export function useHook() {\n  const [state, setState] = useState();\n  return { state };\n}`}
        </pre>
        <pre className="absolute bottom-16 left-[15%] -rotate-2">
          {`import { HookConfig } from "@hookhub/core";\nconst config: HookConfig = {\n  automate: true,\n  trigger: "on-commit"\n};`}
        </pre>
        <pre className="absolute top-1/3 right-[5%] rotate-1 text-accent-3/[0.04]">
          {`{\n  "hooks": [\n    "pre-commit",\n    "post-build",\n    "on-deploy"\n  ]\n}`}
        </pre>
      </div>

      {/* Floating curly braces and angle brackets */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
      >
        <span className="absolute top-24 left-[20%] text-6xl text-accent-1/[0.06] animate-float">
          {"{"}
        </span>
        <span className="absolute top-48 left-[22%] text-6xl text-accent-1/[0.06] animate-float">
          {"}"}
        </span>
        <span className="absolute top-20 right-[18%] text-5xl text-accent-2/[0.06] animate-float-delayed">
          {"</>"}
        </span>
        <span className="absolute bottom-24 right-[30%] text-4xl text-accent-3/[0.05] animate-float">
          {"=>"}
        </span>
        <span className="absolute bottom-32 left-[40%] text-5xl text-accent-2/[0.05] animate-float-delayed">
          {"[ ]"}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal prompt badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-md bg-surface-elevated/80 border border-border backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-sm text-muted">
            <span className="text-green-400">$</span>{" "}
            <span className="text-accent-1">hooks</span>{" "}
            <span className="text-accent-3">--count</span>{" "}
            <span className="text-white font-bold tabular-nums">{hookCount}</span>{" "}
            <span className="text-muted/60">available</span>
          </span>
        </div>

        {/* Title with cursor blink */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent animate-gradient">
            Hook
          </span>
          <span className="text-white">Hub</span>
          <span className="inline-block w-[3px] h-[0.8em] bg-accent-1 ml-1 align-baseline animate-[blink_1s_steps(1)_infinite]" />
        </h1>

        {/* Subtitle as code comment */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          <span className="text-accent-1/60">{"// "}</span>
          Discover and share{" "}
          <span className="text-accent-2">Claude Code hooks</span> for{" "}
          <span className="text-accent-3">workflow automation</span>
          <span className="text-accent-1/60">{" — "}</span>
          <span className="text-slate-400">
            open-source, community-driven, ready to install
          </span>
        </p>

        {/* Terminal-style divider */}
        <div className="flex items-center justify-center gap-0 mb-4 text-sm text-muted/40 select-none">
          <span className="hidden sm:inline">{"────────────"}</span>
          <span className="sm:hidden">{"──────"}</span>
          <span className="mx-2 text-base">
            <span className="text-muted/30">{"┤"}</span>
            <span className="text-accent-1">{"⚡"}</span>
            <span className="text-muted/30">{"├"}</span>
          </span>
          <span className="hidden sm:inline">{"────────────"}</span>
          <span className="sm:hidden">{"──────"}</span>
        </div>

        {/* Secondary line under divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-1/40" />
          <span className="text-xs text-muted/50 tracking-widest uppercase">
            v1.0.0
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-3/40" />
        </div>
      </div>

      {/* Cursor blink keyframes */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
}
