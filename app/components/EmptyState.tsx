export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
        No hooks found
      </p>
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
        Try selecting a different category.
      </p>
    </div>
  );
}
