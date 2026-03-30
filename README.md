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

Production hosting is on Vercel.

- Production project: `drkalpas-deploy`
- Production domain: `drkalpas.com`
- Framework preset: `Vite`
- Build command: `npm run build`

Current deployment workflow:

1. Merge approved changes into `main`
2. Push `main` to GitHub
3. Deploy to Vercel production for the `drkalpas-deploy` project
4. Verify `drkalpas.com` points at the new production deployment

Useful Vercel commands:

```bash
vercel whoami
vercel project inspect drkalpas-deploy
vercel deploy --prod --yes
vercel inspect drkalpas.com
vercel alias set <deployment-url> drkalpas.com
```

## Notes

- The `.vercel/` directory is local-only and should not be committed.
- The `gh-pages` script and `homepage` field in `package.json` are legacy settings and are not the production deployment path for `drkalpas.com`.
