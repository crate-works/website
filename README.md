# CrateWorks website

The public site for [CrateWorks](https://crate-works.org) — a workbench of open-source tools built around the
RO-Crate API specification.

Built with [Astro](https://astro.build), Tailwind CSS 4, and content collections.

## Project structure

```
src/
├── components/        # Astro components (Hero, Workbench, Logo, …)
├── content/
│   ├── governance/    # Imported from github/MVG; user-edited
│   └── tools/         # One markdown file per tool tile
├── layouts/           # Layout.astro (header, footer, head)
├── pages/
│   ├── index.astro    # Front page
│   └── governance/    # /governance/ hub + [...slug].astro doc renderer
├── styles/global.css  # Tailwind 4 entry + design tokens
└── content.config.ts  # Collection schemas
```

## Local development

```sh
pnpm install
pnpm dev          # → http://localhost:4321
```

## Commands

| Command            | Action                                  |
| ------------------ | --------------------------------------- |
| `pnpm dev`         | Start dev server                        |
| `pnpm build`       | Build static site to `./dist/`          |
| `pnpm preview`     | Preview the built site                  |
| `pnpm lint:biome`  | Biome lint + format check               |
| `pnpm lint:knip`   | Knip unused-code check                  |
| `pnpm lint:types`  | TypeScript `--noEmit`                   |
| `pnpm lint:astro`  | `astro check` (template + content)      |

## Deployment

The site deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow:

1. Installs deps with `pnpm install --frozen-lockfile`.
2. Runs all four lint/typecheck commands.
3. Builds the static site.
4. Publishes `dist/` to the `github-pages` environment.

Pull requests run the same lint + build job (no deploy) as a status check.

**Custom domain.** `public/CNAME` contains `crate-works.org`, which GitHub Pages
serves as the canonical host. DNS for `crate-works.org` must point at the
GitHub Pages IPs (or `CNAME` to `<owner>.github.io`) — that is configured
outside this repo.

**First-time setup.** In the repo's *Settings → Pages*, set the source to
"GitHub Actions". Subsequent deploys are automatic.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for what lives where (tool tiles,
blog posts, governance docs), style conventions, and licensing.
