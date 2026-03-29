export default function Header({ hookCount }: { hookCount: number }) {
  return (
    <header className="relative pt-20 pb-16 text-center overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          <span className="text-sm font-medium text-indigo-300">
            {hookCount} hooks available
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Hook
          </span>
          <span className="text-white">Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
          Discover and browse open-source hooks for{" "}
          <span className="text-indigo-400 font-medium">Claude Code</span>.
          <br className="hidden sm:block" />
          Automate your workflow in seconds.
        </p>

        {/* Decorative line */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <svg
            className="w-5 h-5 text-indigo-500/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>
      </div>
    </header>
  );
}
