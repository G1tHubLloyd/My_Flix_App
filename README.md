# myFlix App (Parcel + React)

This project is a minimal skeleton for the **myFlix** app. It uses Parcel as the bundler/dev server and React for the UI.

## Files of interest
- `index.html` — Parcel entry point that loads `src/index.jsx`.
- `src/index.jsx` — React entry that mounts the `MyFlixApplication` component.
- `package.json` — Includes `start` and `build` scripts using Parcel and lists `react` and `react-dom` as dependencies.
- `.gitignore` — ignores `node_modules`, build and cache folders.

## Setup & run (Windows / bash)

1. Install dependencies (already included in this repo):

```bash
npm install
```

2. Start the Parcel dev server from the project root:

```bash
npm start
```

Parcel will serve the site at http://localhost:1234 by default. Open that URL in your browser to see the app.

## Build for production

Create an optimized production build with Parcel:

```bash
npm run build
```

The production build output will be in the `dist/` folder.

## Project notes & guidance

- This project now uses React. The primary entry is `src/index.jsx` which uses `react-dom/client` to mount the `MyFlixApplication` component and render the UI (you should see "Good morning").
- `src/index.js` (previous vanilla JS entry) was removed because the React entry is used instead.
- `.gitignore` already excludes `node_modules/`, `.env`, and build/cache folders. Do not commit secrets or `node_modules`.

Note: The greeting text displayed by the app (e.g. "Good morning!!! Its me Lloyd.") is implemented in the `MyFlixApplication` component inside `src/index.jsx`.

## Publishing to GitHub

To publish this repository to GitHub from the command line (if you need to add the remote):

```bash
git remote add origin <YOUR_REMOTE_URL>
git branch -M main
git push -u origin main
```

Or use GitHub Desktop: Add the local repository and click `Publish repository`.

## Final

This README documents how to run and build the app locally. If you want, I can add GitHub topics or a more detailed CONTRIBUTING guide.
