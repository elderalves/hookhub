export default function Header3({ hookCount }: { hookCount: number }) {
  return (
    <header className="relative pt-20 pb-16 text-center overflow-hidden">
      {/* Single ultra-subtle orb — barely visible */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/[0.03] rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      <div className="relative z-10">
        {/* Badge — minimal: thin border, no fill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-700 px-5 py-1.5 mb-10">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </span>
          <span className="text-xs tracking-widest uppercase text-slate-500 font-light">
            {hookCount} hooks available
          </span>
        </div>

        {/* Title — oversized, letter-spaced, weight contrast */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] mb-6">
          <span className="font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Hook
          </span>
          <span className="font-extralight text-white">Hub</span>
        </h1>

        {/* Subtitle — monospace for typographic contrast */}
        <p className="font-mono text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-loose tracking-wide">
          Open-source hooks for{" "}
          <span className="text-indigo-400">Claude Code</span>.
          <br className="hidden sm:block" />
          Workflow automation, simplified.
        </p>

        {/* Divider — single thin gradient line with chain-link icon */}
        <div className="mt-14 flex items-center justify-center gap-4 pointer-events-none">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-indigo-500/30" />
          <svg
            className="w-3.5 h-3.5 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-500/30" />
        </div>
      </div>
    </header>
  );
}
