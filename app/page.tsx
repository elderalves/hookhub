import { Suspense } from "react";
import { getAllHooks, getCategories } from "@/lib/hooks";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";

export default function Home() {
  const hooks = getAllHooks();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Header hookCount={hooks.length} />
        <Suspense>
          <CategoryFilter hooks={hooks} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
}
