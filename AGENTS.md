# Repository Instructions

## Project Shape
- Single React 18 + Vite app at the repository root; ignore `.kilo/` as agent-manager metadata, not an app package.
- Entrypoint flow is `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- `src/main.jsx` wraps the app in `ViewState` and `BrowserRouter`, and imports both Tailwind globals from `src/index.css` and the generated/checked-in stylesheet `css/style.css`.
- SPA routing is handled by `react-router-dom`; `vercel.json` rewrites all paths to `/` so direct visits to dashboard child routes work on Vercel.

## Commands
- Install with `npm install`; `package-lock.json` is the committed lockfile.
- Start dev server with `npm run dev`.
- Build with `npm run build`; this currently passes.
- Preview a production build with `npm run preview` after `npm run build`.
- Lint with `npm run lint`; this is configured but currently fails on existing `no-unused-vars`, `react/prop-types`, and hook-order errors, so separate pre-existing lint debt from regressions.
- `npm run sass` watches `src/sass` into `css`, but `src/sass/` is not present in the current tree; `css/style.css` is still imported by the app.

## App Wiring Gotchas
- Routes are declared in `src/App.jsx`: `/` renders the welcome page, `/dashboard` renders `DashboardLayout`, and dashboard children live under `/dashboard/about`, `/dashboard/portfolio`, `/dashboard/skills`, `/dashboard/formation`, and `/dashboard/contact`.
- Dashboard navigation data lives in `src/dashboard/constants/items.jsx`, but drag/drop navigation is also hard-coded by item id in `src/dashboard/layouts/dashboard-layout.jsx`; when adding or renaming dashboard pages, update both places plus `src/App.jsx`.
- `ViewState` persists `view` in `localStorage`; when the stored view is `normal`, `blockPage` causes the dashboard index route to redirect back to `/`.
- The dashboard uses `@dnd-kit/react` (`DragDropProvider`, draggable items, droppable zone) for navigation behavior, not just visual drag effects.

## Styling And Assets
- Tailwind scans `index.html` and `src/**/*.{js,ts,jsx,tsx}`; custom screens are `2xs: 380px` and `xs: 30rem`, with class-based dark mode enabled.
- Public assets are referenced by root-relative paths under `public/`, including `/brand/...` and `/proyects/...`; keep the existing `proyects` spelling when matching current asset paths.
