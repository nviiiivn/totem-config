---
name: folder-organization
description: Folder structure conventions, naming rules, MANIFEST system (token-efficient navigation), deprecation strategy (archive-not-delete), and safe reorganization guide (path-reference grep, file-count verify). Use when setting up or reorganizing directory structures and when writing MANIFEST.md files.
source: eliteai.tools/agent-skills/folder-organization
---

# Folder Organization Best Practices

Expert guidance for organizing directories, establishing naming conventions, and maintaining clean, navigable structures.

## When to Use

- Setting up new projects/directory trees
- Reorganizing existing structures
- Establishing conventions
- Creating reproducible structures
- Writing MANIFEST.md navigation files

## Core Principles

1. **Predictability** — standard locations for common file types
2. **Scalability** — structure grows gracefully
3. **Separation of concerns** — code, data, docs, outputs separated
4. **Discoverability** — future-you can navigate
5. **Version-control friendly** — large/generated files excluded appropriately

## Naming Rules

1. lowercase + hyphens or underscores (no spaces, no CamelCase)
2. descriptive but concise: `process-telomere-data.py` not `script.py`
3. hyphens for files, underscores for Python modules
4. version/date important outputs: `report-2026-01-23.pdf`
5. zero-pad sequences: `01-exploration`, `02-analysis`
6. session notes standardized in `session-saves/`

## MANIFEST System (token-efficient navigation)

- Root MANIFEST.md = complete overview in ~1,500 tokens → 85-90% token reduction at session start
- Subdirectory MANIFESTs for data/, figures/, scripts/, documentation/
- Update at end of every session / after every landing
- Records: what lives here, what it is, what it's linked to

## Deprecation Strategy (NEVER delete)

1. Create `deprecated/` subdirectory with descriptive name
2. Move old files there
3. Write README.md explaining WHAT, WHEN, WHY, and HOW TO RECOVER
4. Scattered deprecated dirs → consolidate to single root `deprecated/`

## Reorganization Guide (move safety)

1. **Update all file paths** in scripts/configs/units after moving files
2. **Grep for references**: search moved paths across configs, service units, cron, app code
3. **Verify file counts** match expectations (nothing lost)
4. **Remove temp files**: `.bak`, checkpoints
5. **Test** that services/scripts still run; restart + verify

## Common Anti-Patterns

- Flat structure (everything in root)
- Ambiguous naming (`notebook1`, `analysis_new`)
- Mixed concerns (data files inside src/)
- Deleting instead of deprecating

## Documentation Standards

- Every project root: README (description, install, usage, structure, data, results)
- Dated summary docs after major changes
- Only README.md, LICENSE, .gitignore at root
