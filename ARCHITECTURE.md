# ARCHITECTURE.md

## Overview

Marketing website for Y2 Design & Build — a hand-maintained Next.js App Router project deployed as a static export (`output: "export"`) to Netlify.

## Structure

- `src/app/layout.tsx`: root layout, fonts, metadata, viewport, JSON-LD, shared shell
- `src/app/page.tsx` and nested `page.tsx` routes: marketing pages
- `src/app/globals.css`: global styles and design tokens
- `src/lib/content.ts`: primary editable content / CTA / webhook config
- `src/lib/blogContent.ts`, `locationContent.ts`, `locations.ts`: content modules
- `src/components/`: reusable sections and UI
- `public/`: static assets and images

## Deploy

- Build: `npm run build` → `out/`
- Netlify publishes `out/` (see `netlify.toml`)

## Integrations

- Quote forms → Make.com webhooks (client-side `fetch`)
- Optional Netlify Forms backup on quote submit
- `/book` → CRM booking iframe

## Do Not Add

- Site-clone / Ditto API keys or runtime calls
- CRM or internal tooling in this package
