---
name: file-organizer
description: Intelligently organizes files and folders by understanding context, finding duplicates, suggesting better structures, and automating cleanup. Analyze first, propose a plan, get user approval, then execute with move-logging. Use for messy folders, duplicate hunting, restructures, and cleanup.
license: MIT
source: github.com/jjmartres/opencode (skillsmp)
---

# File Organizer

This skill acts as a personal organization assistant, helping maintain a clean, logical file structure without the mental overhead of manual organization.

## When to Use This Skill

- A folder is a chaotic mess
- Files scattered everywhere / can't find things
- Duplicate files taking up space
- Folder structure doesn't make sense anymore
- Establishing better organization habits
- Cleaning up before archiving old projects

## Workflow (STRICT ORDER — never skip the approval gate)

1. **Understand the Scope** — ASK THE USER before touching anything:
   - Which directory needs organization?
   - What's the main problem? (can't find things / duplicates / too messy / no structure)
   - Any files or folders to avoid? (current projects, sensitive data)
   - How aggressively to organize? (conservative vs comprehensive)

2. **Analyze Current State** (read-only):
   - Overview: `ls -la`, sizes: `du -sh */ | sort -rh | head -20`
   - File types: `find . -type f | sed 's/.*\.//' | sort | uniq -c | sort -rn`
   - Largest: `du -ah --max-depth=2 | sort -rh | head -30`
   - Date ranges, obvious issues. Summarize findings plainly.

3. **Identify Organization Patterns** — groupings by type / purpose (work vs personal, active vs archive) / date. Propose what fits THIS user's actual content, not a generic template.

4. **Find Duplicates** (when requested):
   - Hash: `find -type f -exec md5sum {} + | sort | uniq -w32 -d`
   - Same name: `find -type f -printf '%f\n' | sort | uniq -d`
   - Show paths + sizes + dates, recommend which to keep (usually newest/best-named), ALWAYS ask before deleting.

5. **Propose Organization Plan** — present BEFORE any change:
   - Current state summary (counts, sizes, issues)
   - Proposed structure (tree diagram)
   - Exact changes: creates / moves / renames / deletions
   - Files needing HER decision (unsure ones listed separately)
   - Then STOP. "Ready to proceed? (yes/no/modify)"

6. **Execute Organization** (only after approval):
   - `mkdir -p` structure, `mv` with a logged move list (undo possible)
   - NEVER delete without confirmation; preserve mtimes; handle name conflicts; STOP and ask on surprises

7. **Summary + Maintenance** — what changed, new tree, tips.

## Rules

- Always confirm before deleting anything
- Log all moves for undo
- Preserve original modification dates
- Stop and ask on unexpected situations
- Start small to build trust; archive rather than delete (see folder-organization skill's deprecation strategy)
- Naming: descriptive lowercase-hyphen names, dates as YYYY-MM-DD, avoid "(1)" download artifacts, be specific

## nvii additions (binding)

- Nothing under ~/vault or ~/DeVault moves without explicit instruction
- No service-owned paths move without paired reference updates + restart + verify (systemd units, Caddyfile, app configs)
- One question at a time; itemized reports; no moves without say-go
