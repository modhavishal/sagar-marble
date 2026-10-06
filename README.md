# Sagar Marble

Marketing site for Sagar Marble — Rajasthani sandstone, granite and tiles at
Madhavapur Road, Pata Village, Gujarat. Built with Next.js 14 (App Router) and
statically exported, so the `out/` folder can be dropped on any host.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # type-checks, then writes static files to out/
```

`npm run build` produces a fully static site in `out/`. Upload that folder, or
deploy the repo to Vercel.

## Project structure

```
app/                    routes only (App Router)
  layout.tsx            root layout, fonts, metadata, JSON-LD
  page.tsx              the home route — renders <HomePage />
  not-found.tsx         404 page
  robots.ts             /robots.txt
  sitemap.ts            /sitemap.xml
  globals.css           stylesheet entry point — imports styles/*

components/
  HomePage.tsx          composes the page and owns shared state
  layout/               SiteHeader, SiteFooter
  sections/             one component per page section
  ui/                   Brand, ThemeToggle, Lightbox, WhatsAppButton, icons

hooks/
  use-theme.ts          dark/light scheme, persisted to localStorage
  use-lightbox.ts       open/close, next/previous, keyboard and focus handling

data/
  products.ts           the collection grid
  gallery.ts            yard photos used by the gallery and lightbox
  site.ts               nav links, reasons, machinery benefits, contacts

lib/
  constants.ts          phone numbers, WhatsApp and Maps links, address
  schema.ts             schema.org JSON-LD business data
  site-url.ts           canonical site URL (NEXT_PUBLIC_SITE_URL)

types/                  shared TypeScript types
styles/                 CSS partials, split by concern
  tokens.css            colour and sizing variables (dark + light)
  base.css              reset, typography, .wrap container
  components/           eyebrow, buttons, section, lightbox, whatsapp-float
  layout/               nav, footer
  sections/             hero, products, machinery, why, gallery, contact, not-found
  animations.css        shared @keyframes
  responsive.css        narrow-screen overrides (imported last)

public/images/          stone photography
```

### Where to make common changes

| Change | File |
| --- | --- |
| Phone number, WhatsApp, address | `lib/constants.ts` |
| Products, gallery photos, reasons | `data/*.ts` |
| Page text and layout | `components/sections/*` |
| Colours | `styles/tokens.css` |
| Page metadata and SEO | `app/layout.tsx` |

## Environment variables

For canonical URLs and SEO files, set `NEXT_PUBLIC_SITE_URL` to the production
URL (for example, `https://your-domain.com`). On Vercel the production project
URL is used automatically when this variable is not set. Set the variable in
Vercel Project Settings → Environment Variables if you use a custom domain, then
redeploy.

## Generated files

`.next/`, `out/` and `*.tsbuildinfo` are build output, not source. They are
listed in `.gitignore` and are safe to delete at any time — `npm run build`
recreates them.
