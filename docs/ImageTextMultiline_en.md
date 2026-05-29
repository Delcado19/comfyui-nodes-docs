
# Documentation
- Class name: ImageTextMultiline
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageTextMultiline node renders multiline text on an image canvas, supporting custom font, alignment, size, color, and margins. It also supports adding outlines to text to enhance visibility and aesthetics.

# Input types
## Required
- text
- The text parameter allows multiline input, useful for rendering paragraphs or multiple lines on an image. It is key to defining the displayed content.
    - Comfy dtype: STRING
    - Python dtype: str
- font
- Specifies the font used for the text, affecting style and readability.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- align
- Determines the text alignment within the image, which can be left, centered, or right, influencing layout and presentation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- size
- Controls the font size of the text, directly affecting visibility and space occupied on the image.
    - Comfy dtype: INT
    - Python dtype: int
- red
- Defines the red component of the text color, contributing to the overall color composition.
    - Comfy dtype: INT
    - Python dtype: int
- green
- Defines the green component of the text color, contributing to the overall color composition.
    - Comfy dtype: INT
    - Python dtype: int
- blue
- Defines the blue component of the text color, contributing to the overall color composition.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
- Controls the opacity of the text, allowing adjustment of visibility and overlay effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- margin_x
- Specifies the horizontal margin around the text, affecting its positioning within the image.
    - Comfy dtype: INT
    - Python dtype: int
- margin_y
- Specifies the vertical margin around the text, affecting its positioning within the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Returns an image tensor containing the rendered text, which can be further processed or displayed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
