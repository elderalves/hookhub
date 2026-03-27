export default function Header({ hookCount }: { hookCount: number }) {
  return (
    <header className="flex items-center justify-between py-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          HookHub
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Browse open-source Claude Code hooks
        </p>
      </div>
      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {hookCount} {hookCount === 1 ? "hook" : "hooks"}
      </span>
    </header>
  );
}
