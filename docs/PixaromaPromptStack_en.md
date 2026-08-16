# Documentation
- Class name: PixaromaPromptStack
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Prompt Stack Pixaroma - hold an ordered list of prompt chunks you can toggle on or off, label, and reorder. All enabled chunks are joined into one STRING output using your chosen separator (a comma and a space to start with, changed in this node's own settings, opened with the gear button on the node toolbar or by right-clicking the node).

Click + Add row to add a chunk. Click the toggle pill to mute or unmute a chunk. Drag the handle on the left to reorder.

# Input types
## Hidden
- PromptStackState
    - The PromptStackState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - All enabled chunks joined into one string using your separator.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
