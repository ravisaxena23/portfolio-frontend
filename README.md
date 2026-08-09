# Ravi Saxena — Full-Stack AI Engineer Portfolio

Personal [portfolio website](https://ravisaxena.vercel.app/) for **Ravi Saxena** — Full-Stack AI Engineer focused on systems, SaaS, and LLM workflows.

**Live demo:** https://ravisaxena.vercel.app/

[![Live Demo](https://img.shields.io/badge/demo-ravisaxena.vercel.app-ffbc42?style=for-the-badge&logo=vercel&logoColor=white)](https://ravisaxena.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

## Features

- Floating pill navigation with dark / light theme
- Interactive **Ask Ravi AI** Q&A grounded in resume data
- Experience timeline, skill matrix, stack cards, awards & education
- Firebase-backed content + contact form
- Resume PDF download (site + Drive)
- Mobile-first responsive layout

## Topics

`portfolio` · `portfolio-website` · `developer-portfolio` · `react` · `personal-website` · `resume` · `fullstack` · `ai-engineer`

## Stack

- React 18 (Create React App)
- SCSS design system (Syne + IBM Plex)
- Firebase Firestore for portfolio content + contact messages
- Deployed on [Vercel](https://ravisaxena.vercel.app/)

## Quick start

```bash
git clone https://github.com/ravisaxena23/portfolio-frontend.git
cd portfolio-frontend
cp .env.example .env
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Firestore security (free Spark plan)

Rules live in [`firestore.rules`](firestore.rules). Paste them in:

**Firebase Console → Firestore Database → Rules → Publish**

What they do on the free tier:

| Path | Client can… |
|------|-------------|
| `portfolio/*` | **Read** only (site content) |
| `Message/*` | **Create** only (contact form), with size/shape checks |
| Everything else | **Denied** |

View contact messages only in the Firebase Console (clients cannot list/read them).

### Seed Firebase from portfolio.js

```bash
npm run seed:portfolio
```

Writes the real object to `portfolio/content` with keys:

`greeting`, `socials`, `editor`, `about`, `metrics`, `experience`, `skillGroups`, `awards`, `education`

Seeding needs a one-time write. Temporarily change only this block in Rules, Publish, seed, then restore locked rules from `firestore.rules` and Publish again:

```
match /portfolio/{docId} {
  allow read: if true;
  allow write: if true; // TEMP seed only — remove after
}
```

### Resume PDF

- Hosted with the site: [`public/ravi_saxena_fullstack_engineer.pdf`](public/ravi_saxena_fullstack_engineer.pdf) → hero CTA uses `/ravi_saxena_fullstack_engineer.pdf`
- Google Drive: [view link](https://drive.google.com/file/d/1ZHkEUw9hcnU5dbtkA8ojIE461aBIiMVs/view?usp=sharing) (also in `greeting.resumeDriveUrl`)
- LaTeX source: [`resume/ravi_saxena_fullstack_engineer.tex`](resume/ravi_saxena_fullstack_engineer.tex)

### Contact form

Submits to collection `Message` with fields `name`, `email`, `mobileNumber`, `query`, `createdAt` (create-only under locked rules).

### Optional: restrict the browser API key (still free)

Google Cloud Console → APIs & Services → Credentials → your Browser key → Application restrictions → HTTP referrers:

- `https://ravisaxena.vercel.app/*`
- `http://localhost:3000/*`
## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `npm run seed:portfolio` | Push portfolio.js → Firestore |

## Env vars

See [`.env.example`](.env.example). CRA requires the `REACT_APP_` prefix.

## License

MIT © [Ravi Saxena](https://github.com/ravisaxena23)
