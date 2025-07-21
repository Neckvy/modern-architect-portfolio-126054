# Modern Architect Portfolio

This is a modern, minimal, and responsive architect portfolio website built with [Next.js](https://nextjs.org). The site features a multi-section single-page layout including Home, About Me, Projects (with card grid), Skills, and a styled Contact form. Design emphasizes a clean look, smooth navigation, modern fonts, subtle transitions, mobile and accessibility support.

## Features

- Sticky navigation bar for easy section access
- Home section with personal/introduction blurb
- About Me section for profile details and background
- Projects section displaying a card grid of sample works (with images)
- Skills section (pills)
- Contact section with styled, accessible form (Name, Email, Subject, Message)
- Color palette: 
  - Primary: `#22223b`
  - Secondary: `#4a4e69`
  - Accent: `#f2e9e4`
- Minimal, modern theme with focus on whitespace and subtle transitions
- Fully responsive & keyboard accessible

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Or use your preferred package manager (`yarn`, `pnpm`, `bun`).

Open [http://localhost:3000](http://localhost:3000) with your browser to see your portfolio.

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit.

## .env Environment

If you want to connect the contact form to a real backend/email service, store your API endpoints/keys in a `.env` file at the project root. For example:

```
NEXT_PUBLIC_CONTACT_API_URL=https://api.yourservice.com/send
```

Reference variables in your frontend code with `process.env.NEXT_PUBLIC_*`, following Next.js conventions.

## Accessibility & Mobile

- All navigation and controls are keyboard and screen reader accessible.
- Fully responsive layout for phones, tablets, and desktop screens.
- Uses modern fonts and color contrast for readability.

## Customizing

- Update your info and projects in `src/app/page.tsx`.
- Images for projects should be placed in the `public/` folder (e.g., `public/project1.jpeg`).

## Deployment

Deploy your site easily on [Vercel](https://vercel.com) or another provider supporting Next.js static export.

## Credits

- Design and code by [Your Name], architect.
- Built with [Next.js](https://nextjs.org).
