---
description: Refine an approved OpenSpec change without editing code.
---
The user has requested to refine the following change proposal. The request may include a change ID and adjustment notes. Update the proposal details and spec deltas without editing code. If you're not sure or if ambiguous, ask for clarification from the user.
<UserRequest>
  $ARGUMENTS
</UserRequest>
<!-- OPENSPEC:START -->
**Guardrails**
- Favor straightforward, minimal implementations first and add complexity only when it is requested or clearly required.
- Keep changes tightly scoped to the requested outcome.
- Refer to `openspec/AGENTS.md` (located inside the `openspec/` directory—run `ls openspec` or `openspec update` if you don't see it) if you need additional OpenSpec conventions or clarifications.
- Do not edit production code during refine. Only update `openspec/changes/<id>/` files (proposal, tasks, design, and spec deltas).
- Use the user's refinement request to drive the updates; ask clarifying questions if the requested adjustments are unclear.
- If the request expands beyond the approved change scope, stop and recommend creating a new change proposal instead of refining.

**Steps**
1. Determine the change ID to refine:
   - If this prompt includes a change ID (for example inside a `<ChangeId>` block), use that value after trimming whitespace.
   - If the user provided a `/openspec-refine <change-id> <adjustments>` style input, parse the change ID and keep the remaining text as refinement instructions.
   - If the conversation references a change loosely, run `openspec list` to surface likely IDs, share the candidates, and confirm the intended change.
   - Otherwise, run `openspec list` and ask the user to confirm the change ID before proceeding.
2. Capture the refinement request from the prompt or user message; if the desired adjustments are missing or ambiguous, ask clarifying questions before editing.
3. Read `changes/<id>/proposal.md`, `design.md` (if present), `tasks.md`, and the spec deltas under `changes/<id>/specs/` to confirm scope and acceptance criteria.
4. Update only the proposal, design, and spec delta files to reflect the requested adjustments (no code edits). Adjust technical decisions in `design.md` when needed.
5. If a spec delta changes, ensure requirements include `#### Scenario:` entries. If the requested behavior does not fit existing spec deltas, create additional spec delta files as needed.
6. Add or roll back tasks so the checklist matches the updated implementation plan.
7. Run `openspec validate <id> --strict` and fix any issues before reporting back.
8. State clearly that no code changes were made, summarize the refined proposal, and stop to request explicit re-approval before any apply work continues.

**Reference**
- Use `openspec show <id> --json --deltas-only` to inspect the current change deltas before editing.
<!-- OPENSPEC:END -->
