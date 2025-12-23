# OpenSpec Continuum

OpenSpec Continuum is a downstream, community-maintained fork of
[OpenSpec](https://github.com/Fission-AI/OpenSpec) that tracks upstream releases
and adds a small set of practical improvements that are not accepted upstream.
It stays close to the upstream workflow while keeping a small, opinionated
surface area.

## Upstream Documentation

For full usage docs and CLI behavior, read the upstream
[OpenSpec README](https://github.com/Fission-AI/OpenSpec/blob/main/README.md).
OpenSpec Continuum stays compatible with upstream workflows and keeps the same
core semantics, so the upstream documentation applies here as well.

## What's Different in This Fork

**Refine workflow**. The `/openspec-refine` workflow adds a dedicated refine
command for post-apply adjustments. Refine updates proposal artifacts only (no code
changes) and requires explicit re-approval before re-applying. You can see [the rejected PR in the upstream repo](https://github.com/Fission-AI/OpenSpec/pull/372).

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
