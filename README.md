# Sagar Marble

A modern, responsive marketing website for **Sagar Marble**, showcasing Rajasthani sandstone, granite, tiles, stone products, machinery, and business information.

The website is built with **Next.js 14 App Router** and configured for **static export**, making it easy to deploy on Vercel or any static hosting provider.

## Features

* Responsive design for desktop, tablet, and mobile
* Rajasthani sandstone, granite and tile product showcase
* Product collection sections
* Stone and machinery gallery
* Image lightbox with next/previous navigation
* Dark and light theme support
* WhatsApp contact button
* Google Maps integration
* Responsive navigation
* SEO-friendly metadata
* JSON-LD / Schema.org structured business data
* Dynamic `sitemap.xml`
* Dynamic `robots.txt`
* Custom 404 page
* Static site generation for fast deployment
* Reusable React and TypeScript components

## Tech Stack

* **Next.js 14**
* **React**
* **TypeScript**
* **Next.js App Router**
* **CSS**
* **Static Export**
* **Schema.org / JSON-LD**
* **LocalStorage** for theme preference

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 3. Build the project

```bash
npm run build
```

The build generates the static website inside:

```text
out/
```

The generated `out/` folder can be deployed to a static hosting provider.

## Deployment

The project can be deployed to:

* Vercel
* Any static hosting provider
* Any server capable of serving static HTML/CSS/JavaScript files

For Vercel, you can connect the GitHub repository directly and deploy the project.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  not-found.tsx
  robots.ts
  sitemap.ts
  globals.css

components/
  HomePage.tsx

  layout/
    SiteHeader.tsx
    SiteFooter.tsx

  sections/
    ...

  ui/
    Brand.tsx
    ThemeToggle.tsx
    Lightbox.tsx
    WhatsAppButton.tsx
    icons/

hooks/
  use-theme.ts
  use-lightbox.ts

data/
  products.ts
  gallery.ts
  site.ts

lib/
  constants.ts
  schema.ts
  site-url.ts

types/
  ...

styles/
  tokens.css
  base.css
  animations.css
  responsive.css

  components/
    ...

  layout/
    ...

  sections/
    ...

public/
  images/
    ...
```

## Common Changes

| Change                          | File                   |
| ------------------------------- | ---------------------- |
| Phone number, WhatsApp, address | `lib/constants.ts`     |
| Products                        | `data/products.ts`     |
| Gallery images/data             | `data/gallery.ts`      |
| Navigation and business content | `data/site.ts`         |
| Page content and sections       | `components/sections/` |
| Colors and design tokens        | `styles/tokens.css`    |
| SEO metadata                    | `app/layout.tsx`       |
| Business structured data        | `lib/schema.ts`        |
| Canonical site URL              | `lib/site-url.ts`      |

## Environment Variables

Set the production website URL using:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for the canonical site URL and SEO-related files.

If you deploy on Vercel with a custom domain, add the environment variable from:

```text
Vercel Project Settings → Environment Variables
```

Then redeploy the project.

## SEO

The project includes several SEO-related features:

* Page metadata
* Canonical URL configuration
* Open Graph metadata
* Schema.org / JSON-LD business information
* `sitemap.xml`
* `robots.txt`

These are configured through the Next.js App Router.

## Generated Files

The following files and folders are generated during development or build:

```text
.next/
out/
*.tsbuildinfo
```

They are ignored through `.gitignore` and should not be committed to the repository.

Run:

```bash
npm run build
```

to generate the production static files again.

## Business

**Sagar Marble**

Rajasthani sandstone, granite and tiles.

**Location:** Madhavapur Road, Pata Village, Gujarat

For contact and location information, see the website's contact section.

## License

This project is developed for the Sagar Marble website.
