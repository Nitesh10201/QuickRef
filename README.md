# QuickRef

Personal cheatsheets and command references, one folder per tool.
Live site: https://<your-username>.github.io/QuickRef/

Built with Starlight (Astro), published on GitHub Pages by GitHub Actions.

## Structure

```
src/content/docs/
  index.md          # site home
  Git/
    index.md        # cheatsheet; add sibling files when it grows
Scratch/            # local only, ignored by git
TEMPLATE.md         # skeleton for a new tool
```

A tool gets its own folder after about 5-7 days of real use.
Newer tools go in `Scratch/`.

## Scratch

`Scratch/.gitignore` contains `*`, so the whole folder is ignored,
including that file. On a new machine, recreate it:

```bash
mkdir Scratch && echo '*' > Scratch/.gitignore
```

## Setup

```bash
mise install
pnpm install
pnpm dev        # http://localhost:4321/QuickRef/
pnpm build      # run before pushing
```

## Workflow

- Work directly on `main`; every push deploys the site.
- Use short-lived branches only for risky site changes.
- Commit format: `Tool: Imperative Message in Title Case`
  - Tool prefix matches the folder name (`Git:`, `Docker:`).
  - Fixed non-tool prefixes: `Site:`, `CI:`, `Deps:`, `Repo:`.
  - One tool per commit.
- Write internal links in lowercase (`/QuickRef/git/commands/`).

## Rule

No secrets, tokens, internal hostnames or company-specific details.
Git history is permanent.
