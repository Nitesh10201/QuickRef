# Template for a New Tool

1. Create `src/content/docs/<ToolName>/index.md` from the skeleton below.
2. Folder name is the tool name, capitalized (`Docker`, `Kubectl`).
3. When a section passes ~300 lines, split it into sibling files named
   `config.md`, `commands.md`, `troubleshooting.md`, `notes.md`.
   Every file needs frontmatter with at least `title`.
   If a title contains a colon, quote it: `title: "Git: Config"`.

## index.md

````markdown
---
title: ToolName
description: One line on what this page covers.
sidebar:
  order: 0
---

One or two lines: what the tool is and why you use it.

## Top Commands

### `command`

What it does.

```bash
command --flag value   # what this example shows
```

> Gotcha: the thing that bit you.

## Config

Config file paths and settings you always change.

## Troubleshooting

### `exact error message`

- **Cause:** why it happens
- **Fix:** what worked
- **Seen on:** OS / version, date

## Notes

Concepts, links, why you chose this tool.
````
