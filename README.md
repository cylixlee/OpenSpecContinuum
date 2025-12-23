# OpenSpec Continuum

OpenSpec Continuum (or abbreviated as Continuum) is an independently maintained downstream of [OpenSpec](https://github.com/Fission-AI/OpenSpec) that closely follows the upstream. It builds upon all official upstream releases and additionally maintains a curated collection of community-driven, practical improvements that have not been merged upstream, offering greater utility while preserving maximum compatibility.

## Usage and Core Concepts

TODO：flowchart and simple explanation here.

For full usage docs and CLI behavior, read the upstream
[OpenSpec README](https://github.com/Fission-AI/OpenSpec/blob/main/README.md).
OpenSpec Continuum stays compatible with upstream workflows and keeps the same
core semantics, so the upstream documentation applies here as well.

## What's New in Continuum

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
