"use client";

interface Header5Props {
  hookCount: number;
}

export default function Header5({ hookCount }: Header5Props) {
  return (
    <header className="pt-24 pb-20 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-surface-elevated text-sm text-muted">
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        <span>
          <span className="font-medium text-foreground">{hookCount}</span> hooks
          available
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-foreground mb-6 font-heading">
        HookHub
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed mb-10">
        Discover and share{" "}
        <span className="text-foreground font-medium">Claude Code hooks</span>{" "}
        for workflow automation — open&#8209;source, community&#8209;driven,
        ready to install.
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-border" />
        <svg
          className="w-4 h-4 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <div className="h-px w-12 bg-border" />
      </div>
    </header>
  );
}
