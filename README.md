# Word of Wisdom

A mobile-friendly Christian teaching and podcast website built with Next.js, React, TypeScript, and Lucide icons.

## Included pages
- `/` — homepage and featured teaching
- `/teachings` — searchable, filterable Bible teaching library
- `/teachings/proverbs-15` — featured Proverbs 15 teaching
- `/teachings/gentle-answer` — sample teaching
- `/teachings/humility-correction` — sample teaching
- `/podcasts` — podcast list with browser speech previews
- `/about` — mission and editorial approach
- `/admin` — draft-form prototype

## Run locally
Install Node.js and npm, then from this folder run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser. For a production build, run `npm run build` then `npm start`.

## Important prototype limitations
This is a working front-end starter, not a production publishing system. The creator form stores draft text in the current browser's local storage only. It does not publish drafts to the public pages, provide secure admin authentication, or upload audio files to a server. Podcast spoken previews use the browser's built-in speech synthesis; voice quality depends on the device/browser. The uploaded-audio player, shared database, secure admin login, and publishing workflow still need backend implementation before public launch.

## Suggested production architecture
- Next.js website and admin interface
- PostgreSQL database for teachings, categories, and episode metadata
- Secure authentication and role-protected admin routes
- Object storage for uploaded audio and cover images
- Server-side validation, file size/type limits, backups, and moderation/review before publication
- SEO metadata, sitemap, RSS feed, accessibility checks, and analytics configured before launch
