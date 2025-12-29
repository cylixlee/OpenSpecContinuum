# OpenSpec Continuum

OpenSpec Continuum (hereafter Continuum) is an independently maintained downstream of [OpenSpec](https://github.com/Fission-AI/OpenSpec) that closely follows the upstream. It builds upon all official upstream releases and additionally maintains a curated collection of community-driven, practical improvements that have not been merged upstream, offering greater utility while preserving maximum compatibility.

AI assistance matters because its outputs are **better aligned when re-consumed by AI systems**. Having AI render intent into structured specs creates a more consistent intermediate layer than natural human language, reducing ambiguity and improving downstream accuracy.

## Usage and Core Concepts

OpenSpec separates current truth from proposed changes:
- `openspec/specs/` holds what IS built and deployed.
- `openspec/changes/` holds proposals for what SHOULD change (with `proposal.md`, `tasks.md`, and spec deltas).
- Archiving a completed change applies its deltas to `specs/` and moves the change into `openspec/changes/archive/`.

## How It Works

```text
┌────────────────────┐
│ Draft Change       │
│ Proposal           │
└────────┬───────────┘
         │ share intent with your AI
         ▼
┌────────────────────┐
│ Review & Align     │
│ (edit specs/tasks) │◀──── refine loop ───────┐
└────────┬───────────┘                          │
         │ approved plan                        │
         ▼                                      │
┌────────────────────┐                          │
│ Implement Tasks    │──────────────────────────┘
│ (AI writes code)   │
└────────┬───────────┘
         │ ship the change
         ▼
┌────────────────────┐
│ Archive & Update   │
│ Specs (source)     │
└────────────────────┘
```

1. Draft a change proposal that captures the spec updates you want.
2. Review the proposal with your AI assistant; Continuum adds a refine step for feedback-driven edits (no code changes) and requires re-approval before applying again.
3. Implement tasks that reference the agreed specs.
4. Archive the change to merge the approved updates back into the source-of-truth specs.

## Common Commands

**OpenSpec CLI (common)**
- `openspec init`: scaffold the OpenSpec directory structure and base instruction files.
- `openspec list`: view active changes and their progress.
- `openspec show`: display a change or spec (supports interactive selection).
- `openspec validate`: check changes/specs against OpenSpec formatting rules.
- `openspec archive`: apply deltas and move a change into the archive.
- `openspec update`: refresh OpenSpec instructions and templates.

**Slash Commands (set up first)**
Slash commands are created by `openspec init` for your selected tools and become available after restarting your editor/assistant. Once configured, `openspec update` refreshes their content without creating new files.

- `/openspec-learn`: *Continuum-only*, learn about the project context, OpenSpec workflow, existing specifications, and active changes.
- `/openspec-proposal`: draft a change proposal and spec deltas.
- `/openspec-apply`: implement approved tasks in code.
- `/openspec-refine`: *Continuum-only*, refine proposal artifacts without code changes.
- `/openspec-archive`: archive a completed change and update specs.

For full usage docs and CLI behavior, read the upstream
[OpenSpec README](https://github.com/Fission-AI/OpenSpec/blob/main/README.md).
Continuum stays compatible with upstream workflows and keeps the same
core semantics, so the upstream documentation applies here as well.

## What's New in Continuum

**Learn command**. Continuum adds `/openspec-learn` to help agents quickly understand the project context, OpenSpec workflow, existing specifications, and active changes. This command guides agents through reading project documentation, exploring source code, and understanding current implementation status.

**Refine workflow**. Continuum adds a dedicated refine command `/openspec-refine` for post-apply adjustments. Refine updates proposal artifacts only (no code
changes) and requires explicit re-approval before re-applying. You can see [the closed PR in the upstream repo](https://github.com/Fission-AI/OpenSpec/pull/372).

**Build pipeline**. The build pipeline replaces the old manual `build.js` with
`tsdown` for faster, cleaner builds. This keeps the build process simple and maintainable.

## Install

Use your preferred package manager with the scoped name
`@cylixlee/openspec`. The CLI name remains `openspec`, so existing workflows
and scripts continue to work.

**pnpm**
```bash
pnpm add -g @cylixlee/openspec
```

**npm**
```bash
npm install -g @cylixlee/openspec
```

**Yarn**
```bash
yarn global add @cylixlee/openspec
```

**Bun**
```bash
bun add -g @cylixlee/openspec
```

## License

This project is licensed under the MIT License.
