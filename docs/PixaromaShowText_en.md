# Documentation
- Class name: PixaromaShowText
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: True
- Repo Ref: https://github.com/pixaroma/ComfyUI-Pixaroma

Show Text Pixaroma - inspect what's flowing through your nodes in a real read-only text box you can select and copy from. Wire ANYTHING into source - strings, ints, floats, latents, IMAGE tensors, even unknown types - and the node prints a compact human-readable form:

- Tensors: shape, dtype, min, max
- Latents: sample shape
- Anything else: str(value)

Resize the node freely; long text scrolls with a scrollbar instead of forcing the node to grow. The same string is also passed through to the 'text' STRING output, so you can chain it into other nodes (useful for inspecting a prompt before passing it through).

# Input types
## Required
- source
    - Anything to inspect. Tensors are summarized as shape / dtype / min / max; latents show their sample shape; everything else uses str(value). The string representation is also passed through unchanged to the 'text' output.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- text
    - The same text shown in the box, passed through so you can keep chaining it.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
