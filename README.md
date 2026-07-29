# Y2 Design & Build — Website

Marketing website for [y2canada.com](https://y2canada.com) (Next.js static export).

## Setup

```bash
npm install
npm run dev:next
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

| Command | What it does |
|---------|----------------|
| `npm run dev:next` | Local edit/preview with hot reload |
| `npm run build` | Production build → `out/` folder |
| `npm run preview` | Serve the built `out/` folder |

## Where to edit

- **Copy, services, FAQs, CTAs, webhooks:** `src/lib/content.ts`
- **Blog posts:** `src/lib/blogContent.ts`
- **Location / city pages:** `src/lib/locationContent.ts`, `src/lib/locations.ts`
- **Page layouts & sections:** `src/components/`
- **Routes / pages:** `src/app/`
- **Images:** `public/images/`

## Notes

- Booking at `/book` embeds the live CRM booking UI in an iframe — do not replace that unless coordinated with Y2.
- Quote forms post to Make.com webhooks defined in `src/lib/content.ts`. Coordinate before changing those URLs.
- This package is website source only (no CRM app, no internal tools).
