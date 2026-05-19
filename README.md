# Community House Network

A Vite and React site for Community House Network.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages

This project builds static files into `dist/` and includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To enable deployment:

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment > Source** to **GitHub Actions**.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the **Actions** tab.

The workflow runs `npm ci`, `npm run lint`, `npm run typecheck`, and `npm run build`, then publishes `dist/` to GitHub Pages.

This repo includes `public/CNAME` for the custom domain `communityhousenetwork.com`. Make sure the same domain is configured in **Settings > Pages > Custom domain** and that your DNS provider points the domain to GitHub Pages.
