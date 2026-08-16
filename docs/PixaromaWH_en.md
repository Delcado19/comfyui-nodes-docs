# Documentation
- Class name: PixaromaWH
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

WH Pixaroma - a tiny node with just two number fields for width and height, and matching width/height outputs. No inputs. Type the size you want directly on the node.

Use it when you want to type a target resolution manually and feed it into something like Switch WH Pixaroma to flip between manual values and the size coming from another node (for example, a Load Image's WIDTH/HEIGHT outputs).

# Input types
## Required
- width
    - Output width in pixels. Most AI models work best with multiples of 8.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Output height in pixels. Most AI models work best with multiples of 8.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width you typed.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height you typed.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
