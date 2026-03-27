# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, `eslint.config.mjs`)
- `npm start` — serve production build

## Tech Stack

- **Next.js 16.2.1** (App Router) with React 19 and TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`; no `tailwind.config` file — uses CSS-based config in `app/globals.css`)
- Path alias: `@/*` maps to project root

## Architecture

Standard Next.js App Router layout — all routes live under `app/`. Currently a single-page scaffold with `app/layout.tsx` (root layout with Geist fonts) and `app/page.tsx`.
