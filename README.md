# Betsy — static site

Plain HTML/CSS/JS. No build step, no dependencies.

    index.html      front page (watercolor portrait painted in)
    naps.html       nap menu: pick a nap, add-ons, printed receipt
    wardrobe.html   coat lookbook with "how it ends" (← / → keys or swipe)
    404.html        "gone napping" not-found page
    travel.html     "Can Betsy come?" dog-travel map; data in data/destinations.js
    _headers        Cloudflare Pages caching + security headers
    robots.txt, sitemap.xml   for search engines (update sitemap when adding a page)
    assets/style.css
    assets/img/     all photos (webp)

## Deploy (Cloudflare Pages)
Connected to this GitHub repo — every push to `main` deploys automatically.

Build settings: framework preset **None**, build command **`node scripts/prerender.mjs`**, output directory **/** (repo root).

`scripts/prerender.mjs` copies the places from `data/destinations.js` into `travel.html` as plain HTML (between the `prerender` comments) so crawlers that don't run JavaScript see them, and bumps the travel `<lastmod>` in `sitemap.xml`. Run it locally after editing the data if you want the committed copy fresh; the deploy runs it anyway.

Social preview tags (assets/img/og.jpg) and canonical URLs point at `https://betsy-site.pages.dev`. If the site moves to a
custom domain, update the `og:url` / `og:image` tags in the three HTML pages.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000
