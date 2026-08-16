# Documentation
- Class name: PixaromaPrompt
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Prompt Pixaroma - a prompt box with a single text output, plus a personal library of reusable @tags and an optional text input you can join with.

Type your prompt and drop in @tags for the parts you reuse a lot. Save a tag called oilpainting whose full text is a long 'oil painting, thick brush strokes, Rembrandt lighting, ...' and then just type @oilpainting. Type @ in the box for a searchable list grouped by category; known tags glow, unknown ones warn you of a typo. Each @tag is swapped for its full text at run time, so the box stays short. Turn on Show expanded to preview what is sent.

Wire a prompt into the text input and it is joined with yours - choose My prompt first or Wired first, and the separator. With nothing wired, the output is just your prompt.

Manage tags with the Tags button: a fullscreen library with categories. Your library is saved in ComfyUI's settings, so it stays private to you and survives updating the plugin; share it on purpose with Export / Import.

# Input types
## Optional
- text_in
    - Optional. Wire another prompt in and it is joined with your typed prompt (order + separator set on the node). Leave it unconnected to output just your prompt.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- PromptState
    - The PromptState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - Your prompt with every @tag expanded, joined with the wired text input if one is connected.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
