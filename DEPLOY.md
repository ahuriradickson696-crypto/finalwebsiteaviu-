# Deploy AVIU website to Vercel

## Why you saw `404 NOT_FOUND`

This is a **Vite React SPA**. Vercel must:

1. Build from the **project** folder (where `package.json` lives)
2. Publish the **`dist`** folder
3. Rewrite all routes to `index.html` (see `vercel.json`)

Your app uses **hash routing** (`/#/study`).  
- Correct: `https://your-app.vercel.app/` or `https://your-app.vercel.app/#/study`  
- Wrong: `https://your-app.vercel.app/study` (no hash → can 404 without rewrites)

## Fix on Vercel (Dashboard)

1. Import the Git repo **or** upload the project.
2. **Root Directory** → set to `project`  
   (if the ZIP extracted as `AVIU-Website/project`, Root Directory is that `project` folder)
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install`
7. Redeploy

`vercel.json` in the project root already sets:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Deploy with Vercel CLI

```bash
cd project
npm install
npm run build
npx vercel --prod
```

When prompted, link the project and accept defaults (output `dist`).

## Local check before deploy

```bash
cd project
npm install
npm run build
npm run preview
```

Open http://localhost:4173 — if this works, the build is fine and the issue is Vercel settings.

## After deploy

Open the **root URL** only:

`https://YOUR-PROJECT.vercel.app/`

Then use the site menu (hash routes). Bookmark home, not a deep path without `#`.
