# Contributing to the CrateWorks website

This repository hosts the source for [crate-works.org](https://crate-works.org).
Suggestions, fixes, and new content are welcome.

## What lives where

| Path                            | What you can change                                          |
| ------------------------------- | ------------------------------------------------------------ |
| `src/content/tools/*.md`        | The tile shown for each tool on the front page. Edit the frontmatter (`tagline`, `summary`, `site`, `status`, `order`) and the file appears or moves on the workbench. |
| `src/content/posts/*.md`        | Blog posts. Add a new markdown file with `title`, `description`, `pubDate`, and optional `author`, `tags`, `draft`. |
| `src/content/governance/*.md`   | Organisation-level governance docs (charter, code of conduct, …). **These were imported from [github/MVG](https://github.com/github/MVG) and inherit the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) licence** — see `LICENSE`. |
| `src/components/`, `src/pages/`, `src/layouts/`, `src/styles/` | Astro components, page templates, layouts, Tailwind 4 entry CSS. Code is MIT-licensed. |

## Before opening a PR

See [README.md](./README.md) for local dev setup and the full command list.
The four linters (`lint:biome`, `lint:knip`, `lint:types`, `lint:astro`) all
need to pass — Lefthook runs them on every commit, and CI re-runs them on
every PR alongside `pnpm build`.

## Style

- **Commits**: Conventional Commits, enforced by Commitlint (`feat:`, `fix:`,
  `chore:`, `docs:`, …). Lefthook checks the message on commit.
- **Code**: Biome owns formatting (160-char line width, single quotes).
  TypeScript is strict via `astro/tsconfigs/strict`. Prefer arrow function
  expressions over `function` declarations, including for named exports
  (`getStaticPaths`, route handlers).
- **URLs**: no trailing slashes. `trailingSlash: 'never'` in
  `astro.config.mjs` and all internal links written as `/blog/<slug>` (not
  `/blog/<slug>/`).
- **Spelling**: Australian English (`colour`, `organise`, …) — matches the
  rest of the PARADISEC / LDaCA ecosystem.

## Licensing of contributions

By submitting a PR you agree that:

- Code contributions are licensed under MIT (the repo's `LICENSE`).
- Edits to files under `src/content/governance/` are licensed under
  [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/), to preserve the
  licence inherited from `github/MVG`.

The umbrella governance framework for projects joining CrateWorks lives on
the live site at [/governance](https://crate-works.org/governance) — those
documents are the canonical reference for org-level policy, not this file.
