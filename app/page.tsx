import { Suspense } from "react";
import { getAllHooks, getCategories } from "@/lib/hooks";
import Header from "./components/Headers/Header5";
import CategoryFilter from "./components/CategoryFilter";
import FAQ from "./components/FAQ";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  const hooks = getAllHooks();
  const categories = getCategories();

  return (
    <div className="min-h-screen noise-bg grid-pattern">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Header hookCount={hooks.length} />
        <main className="pb-16">
          <Suspense>
            <CategoryFilter hooks={hooks} categories={categories} />
          </Suspense>
        </main>
        <TestimonialCarousel />
        <FAQ />
        <footer className="border-t border-slate-800/50 py-8 text-center">
          <p className="text-sm text-slate-600">
            Built for the Claude Code community
          </p>
        </footer>
      </div>
    </div>
  );
}
