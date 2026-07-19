# Assets

This project sources all photography directly from Unsplash's CDN
(`images.unsplash.com`) rather than bundling local files, so the app stays
lightweight and easy to `npm install && npm run dev` without large binary
assets in the repo.

To use your own salon photography instead:

1. Drop your image files into this folder (e.g. `src/assets/hero.jpg`).
2. Import them where needed, e.g. in `src/components/Hero.jsx`:
   ```jsx
   import heroImage from "../assets/hero.jpg";
   // ...
   <img src={heroImage} alt="Afreen Salon" />
   ```
3. Replace the corresponding Unsplash URL in `src/data/*.js` or the relevant
   component with your imported asset.

The site favicon lives in `public/favicon.svg` since it needs to be served
from a stable, un-hashed path.
