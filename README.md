# LOX — Live Off XRP

Official community website — V8.

## Local preview
Open `index.html` in a browser, or serve the folder using any static file server (recommended for network-backed functionality). No build dependencies required.

## Deployment
Connected to Vercel project `lox-website`. Pushing to `main` triggers automatic deployments.

## Artwork
Image files live in `assets/`. Replace an image using the **same filename** to update the site without editing markup.

Required images: `logo.png`, `mascot.png`, `dip.png`, `rug.png`, `time.png`, `grind.png`, `watch.png`, `goldmascot.png`, `goldhand.png`, `gladiator.png`.

## Data and links
Edit `config.js` for official social/DEX links and XRPL settings.
The Burn Vault monitors reserve-wallet balances, but **a wallet transfer is not automatically a verifiable burn**. Historical baseline figures are reference figures and not independently verified; verify supply and milestone accounting before making financial claims.

## Structure
- `index.html` — markup and sections
- `styles.css` — layout, branding, animations
- `config.js` — network and project settings
- `app.js` — navigation/UI
- `vault.js` — XRPL reserve monitoring
- `milestones.js` — burn milestone UI
- `fire.js` — animated Burn Vault effects
- `experience.js` — interactive grind-to-dream journey
- `assets/` — images
