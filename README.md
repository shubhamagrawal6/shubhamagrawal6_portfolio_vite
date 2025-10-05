# Shubham Agrawal — Portfolio (Vite + React)

A fast, responsive personal portfolio built with Vite, React and a set of Radix UI primitives.

This repository contains the source for my portfolio website. It uses Vite for bundling and development, React for UI, and several small libraries for UI components and icons.

## Features

- Vite-powered dev server and fast HMR
- React 18
- Reusable component primitives under `src/components/ui`
- Static build output in the `build/` directory ready for GitHub Pages deployment

## Quick start

These commands assume you have Node.js (v16+) and npm installed. You can also use yarn or pnpm — replace npm commands accordingly.

1. Install dependencies

   ```bash
   npm install
   ```

2. Start development server (hot reload)

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   ```

   Built files will be output to the `build/` directory (this repo already includes a committed production snapshot in `build/`).

4. Deploy to GitHub Pages

   This project includes a deploy script that uses `gh-pages` and publishes the `build` folder.

   ```bash
   npm run deploy
   ```

   Note: `predeploy` runs `npm run build` automatically. If you publish to GitHub Pages, ensure the `homepage` field in `package.json` is set to `https://<username>.github.io/<repo>` (if needed).

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — create production build
- `npm run deploy` — build and publish `build/` to GitHub Pages (uses `gh-pages`)

## Project structure

- `src/` — application source
  - `main.tsx` — app entry
  - `App.tsx` — root component
  - `components/` — page sections & UI primitives
  - `assets/` — images and static assets
- `index.html` — app HTML template
- `vite.config.ts` — Vite config
- `build/` — committed production build snapshot

## Dependencies

Major libraries used (see `package.json` for full list): React, Vite, Radix UI primitives, Lucide icons, Recharts, and `gh-pages` for deployment.

## Contributing

This is a personal portfolio. If you'd like to suggest improvements (typos, small fixes), open an issue or a PR. For larger changes, please get in touch first.

## License

The project includes a `LICENSE` file in the repository root. Please refer to that file for license details.