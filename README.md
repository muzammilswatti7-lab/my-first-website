# MK Digital Labs — Vercel deployment

This is the Vercel-ready Next.js version of the MK Digital Labs premium website.

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy through GitHub and Vercel

1. Upload this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep **Framework Preset: Next.js** and all build settings at their defaults.
4. Select **Deploy**.

For an existing Vercel project connected to the same GitHub repository, replace the old repository files with these files, commit, and push. Vercel will deploy automatically.

The contact form posts to FormSubmit. The first submission may send an activation email to the configured inbox; approve it once if requested.
