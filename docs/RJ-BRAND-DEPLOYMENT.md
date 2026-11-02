# RJ logo integration (original artwork only)

The original RJ emblem supplied by the portfolio owner is the approved brand source. Do **not** redraw, recolor, generate, or replace it.

Copy the supplied original PNG into the repository as:

- `public/brand/rj-logo.png` — exact original, full logo (used for site branding and sharing)
- `app/icon.png` — square version prepared from the **same** source with no creative changes (Next.js favicon)
- `app/apple-icon.png` — 180 × 180 PNG export from the exact source (optional iOS icon)

If the original file is already square, it may be copied directly to `app/icon.png`. Keep the black background and golden RJ artwork unchanged. Do not overwrite the existing `public/favicon.ico` or `public/icon.svg` until the new icons have been checked in the browser.

The website's shared navigation and metadata can be switched to `/brand/rj-logo.png` after these assets exist. Always validate icons on light/dark mobile browser tabs, and run `npm run check && npm run build` before merging.

## Publishing

1. Copy these files on the local working branch.
2. Check the images, run the TypeScript check and production build.
3. Commit and push to the feature branch.
4. Review and merge the PR.
5. On the VPS: `git pull --ff-only origin main && npm ci && npm run check && npm run build && sudo systemctl restart john-portfolio`.

SEO verification: add the domain property in Google Search Console and submit `https://johnportifolio.rjaybarber.shop/sitemap.xml`. Search ranking and resulting snippets are controlled by Google.
