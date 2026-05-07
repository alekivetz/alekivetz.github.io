# Angela Lekivetz · Portfolio

Static portfolio site. No build step.

## Files
- `index.html` — the deployed site (Direction B, terminal index style)
- `data.jsx` — your projects + profile data. Edit here to update the site.
- `direction-b-deploy.jsx` — the page component used by `index.html`
- `styles.css` — all styling
- `screenshots/` — drop your dashboard screenshots here, named `<project-id>.png`

## Adding screenshots
Save each screenshot in the `screenshots/` folder using the project id as the filename:

- `screenshots/canada-restaurant-analytics.png`
- `screenshots/canadian-labour-analytics.png`
- `screenshots/go-predict.png`
- `screenshots/banff-traffic-management.png`

If a screenshot is missing, the card falls back to a `// project-id.png` placeholder.

## Deploy to GitHub Pages

1. Create a new public repo on GitHub named `alekivetz.github.io`.
2. Push everything in this folder to the repo's `main` branch.
3. In the repo: Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save.
4. Site goes live at `https://alekivetz.github.io` in ~1 minute.

## Working on it locally
Just open `index.html` in a browser. Or for a tiny local server:
```
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Iteration file
`Portfolio.html` is the design-canvas comparison view (Direction A vs B). Keep it for tweaking; don't deploy it. Only `index.html` needs to ship.
