export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-surface-elevated flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-muted-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <p className="text-lg font-medium text-foreground">No hooks found</p>
      <p className="text-sm text-muted mt-1">
        Try selecting a different category.
      </p>
    </div>
  );
}
