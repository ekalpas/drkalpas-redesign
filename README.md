# drkalpas-redesign

Redesign source for [drkalpas.com](https://drkalpas.com).

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

Production hosting is on Vercel. Deploys automatically on push to `main`.

- Vercel project: `drkalpas-redesign`
- Vercel team: `ekalpas-projects`
- Production domain: `drkalpas.com`
- Framework preset: `Vite`
- Build command: `npm run build`
- Git integration: `ekalpas/drkalpas-redesign`, `main` branch

Useful Vercel commands:

```bash
vercel whoami
vercel inspect drkalpas.com --scope ekalpas-projects
vercel deploy --prod --yes --scope ekalpas-projects
vercel domains ls --scope ekalpas-projects
```

## Notes

- The `.vercel/` directory is local-only and should not be committed.
- The `gh-pages` script and `homepage` field in `package.json` are legacy settings.
- Domain was previously assigned to an old `drkalpas-deploy` project. Moved to `drkalpas-redesign` on 2026-03-31.
