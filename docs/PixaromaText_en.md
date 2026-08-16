# Documentation
- Class name: PixaromaText
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Text Pixaroma - a multi-line text field with a STRING output. Useful for prompts and any other long text you want to author in one place and wire into multiple downstream nodes (positive prompt, negative prompt, captions, instructions, etc.).

The text field grows with the node: drag the bottom-right corner to make the field taller or wider when working on a long prompt.

Dynamic prompts switch (OFF by default): when off, the text is sent exactly as typed and every curly brace is kept, which is what you want for JSON prompts. Turn the switch on to enable {a|b} wildcards (one option picked at random each queue, nest freely like {a|{b|c}}), use \{ and \} for literal braces, and strip comments (// to end of line and /* ... */ blocks).

# Input types
## Required
- text
    - The text to output. Supports multiple lines. Sent exactly as typed unless the Dynamic prompts switch is on - then {a|b} picks one at random each queue and // /* */ comments are stripped.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The text from the field, with {a|b} dynamic prompts resolved if the Dynamic prompts switch is on (otherwise sent exactly as typed).
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
