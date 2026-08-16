# Documentation
- Class name: PixaromaPortraitLandscape
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Output a width and height in the orientation you pick. Enter your two dimensions (or wire them in from another node), then click Portrait or Landscape. Portrait gives the tall arrangement (the smaller number becomes the width), Landscape gives the wide arrangement (the larger number becomes the width). Flipping orientation is one click, with no need to keep two WH nodes and a switch. The order you enter the two numbers does not matter.

Models are usually fussy about sizes, wanting them in steps of 8, 16, 32 or 64. The small button at the top of the node sets that: click it to step through Off, 8, 16, 32 and 64, and both numbers are rounded to the nearest step before they go out. Each node keeps its own setting, so one workflow can hold several set up differently. Outputs width and height.

# Input types
## Required
- width
    - One of your two dimensions. Type a value or wire a number in. Portrait/Landscape decides whether this becomes the long or short side, so the order you enter the two numbers does not matter.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The other dimension. Type a value or wire a number in.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- PortraitLandscapeState
    - The PortraitLandscapeState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- width
    - The output width. In Portrait this is the smaller of your two numbers; in Landscape it is the larger. Rounded to the nearest step when one is set on the node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The output height. In Portrait this is the larger of your two numbers; in Landscape it is the smaller. Rounded to the nearest step when one is set on the node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
