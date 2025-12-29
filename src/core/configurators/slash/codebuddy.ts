import { SlashCommandConfigurator } from './base.js';
import { SlashCommandId } from '../../templates/index.js';

const FILE_PATHS: Record<SlashCommandId, string> = {
  proposal: '.codebuddy/commands/openspec/proposal.md',
  apply: '.codebuddy/commands/openspec/apply.md',
  refine: '.codebuddy/commands/openspec/refine.md',
  archive: '.codebuddy/commands/openspec/archive.md',
  learn: '.codebuddy/commands/openspec/learn.md'
};

const FRONTMATTER: Record<SlashCommandId, string> = {
  proposal: `---
name: OpenSpec: Proposal
description: Scaffold a new OpenSpec change and validate strictly.
category: OpenSpec
tags: [openspec, change]
---`,
  apply: `---
name: OpenSpec: Apply
description: Implement an approved OpenSpec change and keep tasks in sync.
category: OpenSpec
tags: [openspec, apply]
---`,
  refine: `---
name: OpenSpec: Refine
description: Refine an approved OpenSpec change without editing code.
category: OpenSpec
tags: [openspec, refine]
---`,
  archive: `---
name: OpenSpec: Archive
description: Archive a deployed OpenSpec change and update specs.
category: OpenSpec
tags: [openspec, archive]
---`,
  learn: `---
name: OpenSpec: Learn
description: Learn about the project, OpenSpec workflow, specs, and active changes.
category: OpenSpec
tags: [openspec, learn]
---`
};

export class CodeBuddySlashCommandConfigurator extends SlashCommandConfigurator {
  readonly toolId = 'codebuddy';
  readonly isAvailable = true;

  protected getRelativePath(id: SlashCommandId): string {
    return FILE_PATHS[id];
  }

  protected getFrontmatter(id: SlashCommandId): string {
    return FRONTMATTER[id];
  }
}

