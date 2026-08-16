# Documentation
- Class name: PixaromaPromptMulti
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Prompt Multi Pixaroma - one node, two run modes you switch with the pill at the top.

Queue mode: click Run and the workflow runs once per enabled prompt, in a loop. Empty rows are silently skipped. Each prompt becomes its own item in the queue panel so you can cancel individually. Wire the `text` output to CLIP Text Encode. Use this when you want to compare prompt variants (one image per prompt).

List mode: click Run once and the node sends ALL enabled prompts as a list (no queue loop). Wire the `prompts` output into one or more Prompt From List Pixaroma nodes downstream; each grabs a different prompt by number. Use this when you want different parts of the same workflow (scene 1, scene 2, ...) to each pull a different prompt from the same library, without extra nodes everywhere.

Both outputs are always visible - the mode pill just controls whether the queue loops or not. Click + Add prompt to add a row. Toggle ON/OFF to include/exclude. Drag the handle to reorder. Clear prompts wipes text but keeps rows. Reset goes back to two empty rows.

# Input types
## Hidden
- PromptMultiState
    - The PromptMultiState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The active row's prompt for this queue run. Use in Queue mode - wire to CLIP Text Encode.
    - Comfy dtype: STRING
    - Python dtype: str
- prompts
    - The list of all enabled prompts. Use in List mode - wire into Prompt From List Pixaroma nodes.
    - Comfy dtype: PIXAROMA_PROMPT_LIST
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
