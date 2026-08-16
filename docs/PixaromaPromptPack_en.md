# Documentation
- Class name: PixaromaPromptPack
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Prompt Pack Pixaroma - paste a block of prompts and queue one workflow run per prompt.

Pick how to split them with the pill at the top: Paragraph (default, splits on blank lines, good for long prompts) or Line (splits on every newline, good for short prompt lists).

The counter in the bottom-right corner of the textarea shows the total number of prompts. During a run it switches to current / total so you can see progress.

Empty prompts (whitespace only) are silently skipped. If the textarea is empty when you click Run, nothing queues and a toast warns you.

# Input types
## Hidden
- PromptPackState
    - The PromptPackState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The current prompt for this queue run (one prompt from the block). Wire to CLIP Text Encode.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
