# Documentation
- Class name: PixaromaPromptFromList
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Prompt From List Pixaroma - tiny picker. Takes the `prompts` output from a Prompt Multi Pixaroma node (set to List mode) and outputs one prompt from it, chosen by the index number.

Drop several of these in a workflow (all wired to the same Prompt Multi) so scene 1 gets prompt 1, scene 2 gets prompt 2, etc. - without piling many output dots on the library node.

Index is 1-based: 1 picks the first prompt in the library. If the index is out of range the output is an empty string.

# Input types
## Required
- prompts
    - The prompts list from a Prompt Multi Pixaroma node set to List mode.
    - Comfy dtype: PIXAROMA_PROMPT_LIST
    - Python dtype: object
- index
    - 1-based row number in the list. Out of range returns empty.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text
    - The prompt picked from the list at the chosen index. Empty if the index is out of range.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
