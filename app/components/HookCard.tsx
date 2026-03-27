import type { Hook, HookCategory } from "@/types/hook";

const categoryColors: Record<HookCategory, string> = {
  "Session Lifecycle": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Prompt & Workflow": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Tool Execution": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Permissions & Notifications": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Agent Teams": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "File & Directory": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  Context: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Git: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

const hookTypeColors: Record<string, string> = {
  command: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  http: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
  prompt: "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300",
  agent: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
};

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start gap-2 mb-3">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          {hook.name}
        </h3>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[hook.category]}`}
        >
          {hook.category}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <code className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-600 dark:text-zinc-400">
          {hook.event}
        </code>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${hookTypeColors[hook.hookType]}`}
        >
          {hook.hookType}
        </span>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
        {hook.description}
      </p>
      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
      >
        {hook.repoName}
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
