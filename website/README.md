# AstraDrive website

The project website is published at https://yash-rai-93.github.io/astradrive/.

From this directory:

```sh
npm ci
npm run dev
```

Open http://localhost:4173/astradrive/. To validate and build:

```sh
npm run check
npm run build
npm run preview
```

The build creates direct-entry HTML pages for each route so navigation and refresh work on
GitHub Pages. Identity and repository details are centralized in `src/site.ts`.
The Pages workflow builds only this directory and deploys `dist/`.
No API keys or analytics account are required. Demo media remains under `public/`.
