import type { Hook, HookCategory, HookType } from "@/types/hook";

const categoryAccents: Record<HookCategory, string> = {
  "Session Lifecycle": "from-blue-500 to-cyan-500",
  "Prompt & Workflow": "from-purple-500 to-fuchsia-500",
  "Tool Execution": "from-amber-500 to-orange-500",
  "Permissions & Notifications": "from-red-500 to-rose-500",
  "Agent Teams": "from-green-500 to-emerald-500",
  "File & Directory": "from-teal-500 to-cyan-500",
  Context: "from-indigo-500 to-violet-500",
  Git: "from-orange-500 to-yellow-500",
};

const categoryBadgeStyles: Record<HookCategory, string> = {
  "Session Lifecycle": "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  "Prompt & Workflow": "bg-purple-500/10 text-purple-400 ring-purple-500/20",
  "Tool Execution": "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  "Permissions & Notifications": "bg-red-500/10 text-red-400 ring-red-500/20",
  "Agent Teams": "bg-green-500/10 text-green-400 ring-green-500/20",
  "File & Directory": "bg-teal-500/10 text-teal-400 ring-teal-500/20",
  Context: "bg-indigo-500/10 text-indigo-400 ring-indigo-500/20",
  Git: "bg-orange-500/10 text-orange-400 ring-orange-500/20",
};

const hookTypeBadge: Record<HookType, string> = {
  command: "bg-slate-500/10 text-slate-400 ring-slate-500/20",
  http: "bg-sky-500/10 text-sky-400 ring-sky-500/20",
  prompt: "bg-violet-500/10 text-violet-400 ring-violet-500/20",
  agent: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
};

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 glow-border">
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r ${categoryAccents[hook.category]} opacity-30 group-hover:opacity-60 transition-opacity`}
      />

      <div className="flex flex-wrap items-start gap-2 mb-3">
        <h3 className="font-semibold text-white group-hover:text-indigo-200 transition-colors">
          {hook.name}
        </h3>
        <span
          className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${categoryBadgeStyles[hook.category]}`}
        >
          {hook.category}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <code className="text-xs font-mono bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-indigo-300">
          {hook.event}
        </code>
        <span
          className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${hookTypeBadge[hook.hookType]}`}
        >
          {hook.hookType}
        </span>
      </div>

      <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
        {hook.description}
      </p>

      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        {hook.repoName}
        <svg
          className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
