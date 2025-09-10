# Aidvenger — “Every Mess Needs a Hero.”

Premium Jamstack site built with **Astro** + **Netlify**. Comic‑styled, cinematic, community‑centric.

## Quickstart

```bash
npm i
npm run dev
# build
npm run build
# preview build
npm run preview
```

### Deploy to Netlify
1. Create a new site from this repo in Netlify.
2. Build command: `npm run build` — Publish dir: `dist`
3. Set environment variables from `.env.example` as needed.
4. Enable **Identity** and **Git Gateway** for Decap CMS.
5. Visit `/admin` to log in and edit content.

### CMS (Decap)
- Admin UI at `/admin`
- Uses Netlify Identity. Invite yourself from Netlify > Identity.
- Collections edit JSON under `src/data` and blog posts.

### Forms
- Netlify Forms are enabled via HTML attributes.
- Forms: Book a Clean, Sponsor a Mission, Contact.
- Submissions appear in Netlify dashboard.

### Functions
- Netlify Functions live in `src/functions` (configured in `netlify.toml`).
- `webhook-stripe.js` (stub), `notify-sms.js` (stub).

### Quality
- WCAG 2.2 AA, responsive 320→1440+
- Budgets: CSS ≤100KB, JS ≤200KB (home)
- Images: responsive AVIF/WEBP via `<picture>` + lazyload
- Fonts preloaded, CLS < 0.05, LCP < 2.5s on 4G

### Scripts
- `npm run format` — Prettier
- `npm run lint` — ESLint

© 2025 Aidvenger.
