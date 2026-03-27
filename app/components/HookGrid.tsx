import type { Hook } from "@/types/hook";
import HookCard from "./HookCard";
import EmptyState from "./EmptyState";

export default function HookGrid({ hooks }: { hooks: Hook[] }) {
  if (hooks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
