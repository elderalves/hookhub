"use client";

import { useSearchParams, useRouter } from "next/navigation";
import type { Hook, HookCategory } from "@/types/hook";
import HookGrid from "./HookGrid";

const categoryIcons: Record<HookCategory, string> = {
  "Session Lifecycle": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  "Prompt & Workflow":
    "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  "Tool Execution":
    "M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.7-.7a1.5 1.5 0 012.12 0l3.57 3.57 7.17-7.17a1.5 1.5 0 012.12 0l.7.7a1.5 1.5 0 010 2.12l-8.58 8.58a1.5 1.5 0 01-2.12.12z",
  "Permissions & Notifications":
    "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  "Agent Teams":
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  "File & Directory":
    "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  Context:
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  Git: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
};

export default function CategoryFilter({
  hooks,
  categories,
}: {
  hooks: Hook[];
  categories: HookCategory[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selected = searchParams.get("category");

  const filtered = selected
    ? hooks.filter((h) => h.category === selected)
    : hooks;

  function handleSelect(category: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-6 -mx-1 px-1 mb-2">
        <button
          onClick={() => handleSelect(null)}
          className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border ${
            !selected
              ? "border-accent bg-accent/10 text-accent"
              : "border-border bg-surface text-muted hover:border-foreground/20 hover:text-foreground"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border ${
              selected === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-surface text-muted hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={categoryIcons[cat]} />
            </svg>
            {cat}
          </button>
        ))}
      </div>
      <HookGrid hooks={filtered} />
    </>
  );
}
