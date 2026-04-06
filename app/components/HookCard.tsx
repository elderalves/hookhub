import type { Hook, HookCategory, HookType } from "@/types/hook";

const categoryBadgeStyles: Record<HookCategory, string> = {
  "Session Lifecycle": "bg-blue-50 text-blue-700",
  "Prompt & Workflow": "bg-purple-50 text-purple-700",
  "Tool Execution": "bg-amber-50 text-amber-700",
  "Permissions & Notifications": "bg-red-50 text-red-700",
  "Agent Teams": "bg-green-50 text-green-700",
  "File & Directory": "bg-teal-50 text-teal-700",
  Context: "bg-indigo-50 text-indigo-700",
  Git: "bg-orange-50 text-orange-700",
};

const hookTypeBadge: Record<HookType, string> = {
  command: "bg-stone-100 text-stone-600",
  http: "bg-sky-50 text-sky-700",
  prompt: "bg-violet-50 text-violet-700",
  agent: "bg-emerald-50 text-emerald-700",
};

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="group relative rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:shadow-md hover:border-accent/30">
      <div className="flex flex-wrap items-start gap-2 mb-3">
        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
          {hook.name}
        </h3>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryBadgeStyles[hook.category]}`}
        >
          {hook.category}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <code className="text-xs font-mono bg-surface-elevated px-2 py-0.5 rounded text-foreground/70">
          {hook.event}
        </code>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${hookTypeBadge[hook.hookType]}`}
        >
          {hook.hookType}
        </span>
      </div>

      <p className="text-sm text-muted line-clamp-2 mb-4 leading-relaxed">
        {hook.description}
      </p>

      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-muted-light hover:text-accent transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
