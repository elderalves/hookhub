# HookHub MVP Spec

## Context

HookHub is a read-only web app for browsing open-source Claude Code hooks. Claude Code hooks are user-defined automation commands that execute at specific points in Claude Code's lifecycle (19 distinct events across 8 categories). The MVP focuses solely on displaying and filtering hooks — no auth, no submissions, no database.

## Data Model

Static JSON file at `data/hooks.json`. Types in `types/hook.ts`.

```ts
export type HookCategory =
  | "Session Lifecycle"
  | "Prompt & Workflow"
  | "Tool Execution"
  | "Permissions & Notifications"
  | "Agent Teams"
  | "File & Directory"
  | "Context"
  | "Git";

export type HookType = "command" | "http" | "prompt" | "agent";

export interface Hook {
  id: string;           // slug, e.g. "auto-lint-on-save"
  name: string;
  category: HookCategory;
  event: string;        // e.g. "FileChanged", "PreToolUse"
  hookType: HookType;
  description: string;  // 1-2 sentences
  repoUrl: string;      // full GitHub URL
  repoName: string;     // "owner/repo" shorthand
  author?: string;
}
```

## Hook Events by Category

| Category | Events |
|---|---|
| Session Lifecycle | `SessionStart`, `SessionEnd`, `InstructionsLoaded` |
| Prompt & Workflow | `UserPromptSubmit`, `Stop`, `StopFailure` |
| Tool Execution | `PreToolUse`, `PostToolUse`, `PostToolUseFailure` |
| Permissions & Notifications | `PermissionRequest`, `Notification` |
| Agent Teams | `SubagentStart`, `SubagentStop`, `TeammateIdle` |
| File & Directory | `CwdChanged`, `FileChanged`, `ConfigChange` |
| Context | `PreCompact`, `PostCompact` |
| Git | `WorktreeCreate`, `WorktreeRemove` |

## Page & Component Architecture

Single page app — no additional routes for MVP.

### New files

```
data/hooks.json                   # 10-15 seed hooks across categories
types/hook.ts                     # Hook, HookCategory, HookType types
lib/hooks.ts                      # getAllHooks(), getCategories()
app/components/Header.tsx         # site title + hook count
app/components/CategoryFilter.tsx # client component — filter pills
app/components/HookGrid.tsx       # responsive grid wrapper
app/components/HookCard.tsx       # individual hook card
app/components/EmptyState.tsx     # "no hooks found" fallback
```

### Modified files

- `app/page.tsx` — rewrite to compose all components
- `app/layout.tsx` — update metadata (title, description)
- `app/globals.css` — minor additions if needed

### Component details

| Component | Server/Client | Responsibility |
|---|---|---|
| `page.tsx` | Server | Imports data, passes to components |
| `Header` | Server | "HookHub" title, tagline, hook count |
| `CategoryFilter` | **Client** (`"use client"`) | Filter pills, manages `selectedCategory` state, renders HookGrid with filtered data |
| `HookGrid` | Client (child of filter) | CSS grid of HookCards, shows EmptyState if empty |
| `HookCard` | Client (child of grid) | Name, category badge, event label, hook type pill, description (2-line clamp), repo link |
| `EmptyState` | Client (child of grid) | "No hooks found" message |

## UI Layout

1. **Header** — full-width, "HookHub" bold left, hook count right
2. **Category filter bar** — horizontal scrollable pills, "All" selected by default
3. **Hook grid** — responsive: 1 col mobile, 2 col `sm`, 3 col `lg`, `gap-4`
4. **Hook card** — `rounded-xl border`, hover shadow, contains:
   - Name (bold), category badge (colored pill), event (monospace), hook type pill
   - Description (line-clamp-2)
   - Repo link as `owner/repo` with external link icon

Category badges use 8 distinct muted colors via a simple map object in the component.

## Technical Decisions

- **Static JSON import** — no API routes, no database, fully static build
- **Client-side filtering** — instantaneous at this scale (tens of hooks)
- **Single `"use client"` boundary** — only CategoryFilter needs state
- **No component library** — Tailwind utilities suffice
- **No search** — category filtering covers MVP browse use case
- **URL query param** (`?category=...`) for shareable filtered views

## Implementation Sequence

1. Create `types/hook.ts`
2. Create `data/hooks.json` with 10-15 seed entries
3. Create `lib/hooks.ts` (data helpers)
4. Build `HookCard.tsx` and `HookGrid.tsx`
5. Build `CategoryFilter.tsx`
6. Build `Header.tsx` and `EmptyState.tsx`
7. Rewrite `app/page.tsx`
8. Update `app/layout.tsx` metadata
9. Adjust `app/globals.css` if needed

## Verification

- `npm run build` — compiles without errors
- `npm run dev` — grid renders, filtering works, responsive breakpoints, dark mode, external links open in new tab
- `npm run lint` — no lint errors
