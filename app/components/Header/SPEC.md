# Header Component Spec

## Purpose

The Header is the hero/banner section of HookHub — it introduces the product, communicates its value proposition, and displays a live hook count. It sits at the top of the landing page above all other content.

## Props

| Prop        | Type     | Required | Description                              |
| ----------- | -------- | -------- | ---------------------------------------- |
| `hookCount` | `number` | Yes      | Total number of available hooks to display in the badge |

## Goals

1. **Communicate identity** — clearly display the "HookHub" brand name using a gradient-styled wordmark.
2. **State the value prop** — a short subtitle explaining what HookHub does: discover open-source hooks for Claude Code and automate workflows.
3. **Show social proof / scale** — display the current hook count in a prominent badge so users immediately see there's a real catalog.
4. **Set visual tone** — establish the dark-theme, glowing, modern aesthetic through animated background orbs and gradient text.

## Visual Structure (top to bottom)

1. **Background orbs** — decorative, blurred, semi-transparent circles that float behind the content. Purely atmospheric; must be `pointer-events-none`.
2. **Badge** — a pill-shaped element showing `"{hookCount} hooks available"` with a pulsing dot indicator.
3. **Title** — large `<h1>` with "Hook" in gradient color and "Hub" in white.
4. **Subtitle** — secondary text explaining what the product does, with "Claude Code" highlighted in the brand accent color.
5. **Decorative divider** — a centered horizontal rule made of two gradient lines flanking a chain-link icon, separating the header from the content below.

## Design Guidelines

- **Color palette**: indigo/purple/pink gradient for accents; slate for secondary text; white for primary text. All on a dark background.
- **Responsive**: title scales from `text-5xl` (mobile) to `text-7xl` (sm+). The subtitle line break is hidden on mobile.
- **Animations**: background orbs use `animate-float` / `animate-float-delayed` (defined in globals.css). The badge dot uses `animate-ping`. The title gradient uses `animate-gradient`.
- **Spacing**: `pt-20 pb-16` with `overflow-hidden` on the `<header>` to contain the orbs.
- **Semantics**: uses `<header>` element and `<h1>` for the page title.
- **Z-ordering**: content sits at `z-10` above the decorative orbs.

## Constraints for Variations

When creating alternative implementations of this component:

- Must accept `hookCount` as a prop and display it prominently.
- Must contain an `<h1>` with "HookHub" (or the split "Hook"/"Hub" treatment) for SEO/accessibility.
- Must include the subtitle mentioning Claude Code hooks and workflow automation.
- The component should be self-contained — no external state beyond the `hookCount` prop.
- Keep decorative elements as `pointer-events-none` so they don't interfere with interaction.
- Maintain responsive behavior (readable on mobile through desktop).
- Export as the default export from the file.
