# Ravi Saxena — Portfolio

Personal portfolio for **Ravi Saxena**, Senior Software Engineer (Full-Stack & Backend Systems).

## Stack

- React 18 (Create React App)
- SCSS design system (Syne + IBM Plex)
- Firebase Firestore for portfolio content + contact messages

## Quick start

```bash
cd portfolio-frontend
cp .env.example .env   # if needed — keys already set for portfolio-9be96
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Canonical resume content lives in [`src/data/portfolio.js`](src/data/portfolio.js).

The app loads **`portfolio/content`** from Firestore at runtime. If that doc is missing or incomplete, it falls back to the local file (same keys — not mock data).

### Seed Firebase from portfolio.js

```bash
node scripts/seed-portfolio.js
```

Writes the real object to `portfolio/content` with keys:

`greeting`, `socials`, `editor`, `about`, `metrics`, `experience`, `skillGroups`, `awards`, `education`

If seeding fails with a permissions error, temporarily allow writes in Firestore rules:

```
match /portfolio/{doc} {
  allow read: if true;
  allow write: if true; // one-time seed only
}
```

Then re-run the seed script and lock writes again (`allow write: if false`), keeping public read.

### Resume PDF

- Hosted with the site: [`public/ravi_saxena_fullstack_engineer.pdf`](public/ravi_saxena_fullstack_engineer.pdf) → hero CTA uses `/ravi_saxena_fullstack_engineer.pdf`
- Google Drive: [view link](https://drive.google.com/file/d/1ZHkEUw9hcnU5dbtkA8ojIE461aBIiMVs/view?usp=sharing) (also in `greeting.resumeDriveUrl`)
- LaTeX source: [`resume/ravi_saxena_fullstack_engineer.tex`](resume/ravi_saxena_fullstack_engineer.tex) — compile with `pdflatex` when you have TeX installed, then replace the public PDF

### Contact form

Submits to collection `Message` with fields `name`, `email`, `mobileNumber`, `query`, `createdAt`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `node scripts/seed-portfolio.js` | Push portfolio.js → Firestore |

## Env vars

See [`.env.example`](.env.example). CRA requires the `REACT_APP_` prefix.
