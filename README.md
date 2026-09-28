# NODIX Systems — Mister Wael

AI automation portfolio and client intake site. Bilingual (EN/AR with RTL), dark + cyan identity, interactive system graph hero, project gallery, and a client project form.

v1.2.0 — Stable. See CHANGELOG section below for newer versions.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react icons

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production check
```

## Configure

Copy `.env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_SITE_URL` — production domain (sitemap, robots, SEO).
- `NEXT_PUBLIC_FORM_ENDPOINT` — optional POST target for project requests
  (n8n webhook, Formspree, etc.). When unset, the form confirms locally only.

## Deploy

Any Next.js host works (Vercel recommended). Set the env vars above in the
host dashboard, then deploy. No database, no secrets in code.

## CHANGELOG

- v1.2.0 — Bilingual EN/AR, interactive node-graph hero, scroll transitions,
  professional footer, security headers, sitemap/robots, env-based form endpoint.
- v1.1.0 — Full one-page portfolio from `form.txt` + `portfolio.txt` content.
- v1.0.0 — Initial Next.js + Tailwind scaffold.
