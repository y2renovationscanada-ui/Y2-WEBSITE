# AGENTS.md

This is the Y2 Design & Build marketing website for https://y2designandbuild.com. It is a static Next.js App Router project (static export).

## Run

- `npm install`
- `npm run dev:next`
- `npm run build`
- `npm run preview`

## Safe Edit Areas

- `src/lib/content.ts`: services, FAQs, CTAs, quote form copy, Make.com webhook URLs
- `src/lib/blogContent.ts`, `src/lib/locationContent.ts`, `src/lib/locations.ts`: blog and city/service landing content
- `src/components/`: page sections and UI modules
- `src/app/`: routes (`page.tsx`, `layout.tsx`, `sitemap.ts`, `robots.ts`)
- `public/images/`: marketing assets
- Root docs: `AGENTS.md`, `ARCHITECTURE.md`, `README.md`

## Notes

- Booking at `/book` embeds the CRM booking UI — coordinate before changing.
- Quote forms post to Make.com webhooks in `src/lib/content.ts`.
- No third-party site-clone APIs (e.g. Ditto) should be configured or committed in this repo.
