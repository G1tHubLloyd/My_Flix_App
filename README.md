# myFlix App (Parcel configured)

This small project is a minimal skeleton for the **myFlix** app and is configured to use Parcel as the bundler/dev server.

## Files added
- `index.html` — Parcel entry point.
- `src/index.js` — Minimal JavaScript entry that renders a tiny UI.
- `package.json` — Includes `start` and `build` scripts using Parcel.
- `.gitignore` — ignores `node_modules`, build and cache folders.

## Setup & run (Windows / bash)

1. Install dependencies (this will create `node_modules` and add Parcel):

```bash
npm install --save-dev parcel
```

2. Start the Parcel dev server from the project root (uses `index.html`):

```bash
npx parcel index.html
```

or using the npm script:

```bash
npm run start
```

Parcel will serve the site (default http://localhost:1234). When running the `parcel` command, be sure to pass the actual path to `index.html` relative to the directory you run it from, e.g. `parcel index.html`.

## Build for production

```bash
npm run build
```

## Git / GitHub Desktop

1. I initialized and made an initial commit locally. To publish the repo and push the changes to GitHub, open **GitHub Desktop**, add this repository if not already present, and click `Publish repository` (or `Push origin`) to upload to your GitHub account.

If you prefer the command line, add a remote and push:

```bash
git remote add origin <YOUR_REMOTE_URL>
git branch -M main
git push -u origin main
```

Replace `<YOUR_REMOTE_URL>` with the GitHub repository URL.

## Notes

- If you already have Parcel installed globally you can run `parcel index.html` directly, but `npx parcel index.html` or the npm script are recommended to ensure the right version is used.
- This README documents the minimal steps to verify Parcel is configured and running.
