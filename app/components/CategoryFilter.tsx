"use client";

import { useSearchParams, useRouter } from "next/navigation";
import type { Hook, HookCategory } from "@/types/hook";
import HookGrid from "./HookGrid";

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
      <div className="flex gap-2 overflow-x-auto pb-4 -mx-1 px-1">
        <button
          onClick={() => handleSelect(null)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            !selected
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selected === cat
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <HookGrid hooks={filtered} />
    </>
  );
}
