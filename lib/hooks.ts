import type { Hook, HookCategory } from "@/types/hook";
import hooksData from "@/data/hooks.json";

export function getAllHooks(): Hook[] {
  return hooksData as Hook[];
}

export function getCategories(): HookCategory[] {
  const categories = new Set(hooksData.map((h) => h.category));
  return [...categories] as HookCategory[];
}
