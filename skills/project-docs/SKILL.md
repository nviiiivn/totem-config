---
name: project-docs
description: Generate comprehensive project documentation structures — README, ARCHITECTURE, USER_GUIDE, DEVELOPER_GUIDE, CONTRIBUTING — adapted to language and context (Python/Go, OpenSource/internal). Use when asked to document a project or set up docs for a repository.
license: MIT
source: github.com/jjmartres/opencode (skillsmp)
---

# Project Documentation Generator

Generate complete, professional documentation structures for software projects. Adapts content based on language (Python/Go), context (OpenSource/internal), and existing files.

## Core Files (always these five)

1. **README.md** — overview, quick start, badges
2. **ARCHITECTURE.md** — system design, components, data flow
3. **DEVELOPER_GUIDE.md** — setup, testing, contribution workflow
4. **USER_GUIDE.md** — usage examples, configuration, troubleshooting
5. **CONTRIBUTING.md** — standards, PR process

## Workflow

1. **Context detection**: scan for `go.mod`/`pyproject.toml`/`requirements.txt`, Dockerfile/terraform/k8s, existing docs (avoid duplication), LICENSE, OpenSource-vs-internal signals.
2. **Clarifying questions** — ONE at a time: purpose in one sentence? main audience? OpenSource or internal? company tooling to mention?
3. **Content adaptation**: Python (uv/pip/poetry, pytest, ruff, mypy) vs Go (build/test/golangci-lint); OpenSource (badges, CoC, security policy) vs internal (channels, compliance, contacts); project-type adjustments (AI agents: MCP architecture + example interactions; infra: Terraform/K8s + DR plans; microservices: API schemas + health checks; CLI: install + flags).
4. **Generation order**: README → ARCHITECTURE → DEVELOPER_GUIDE → USER_GUIDE → CONTRIBUTING.
5. **Quality checks**: runnable examples, correct commands, cross-references consistent, no placeholder text, tone consistent.

## Quality Standards

- TOC for files >200 lines; code fences with language tags; Quick Start at top; real tested examples; explain WHY decisions were made.

## Avoid

- "TODO"/"Coming soon" placeholders; outdated tech references; duplication across files; missing concrete examples.

NOTE: upstream references/templates.md not shipped in source repo; use embedded guidance above.
