# Documentation
- Class name: CR_BinaryPatternSimple
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_BinaryPatternSimple node parses a binary pattern and renders it as a visual grid. It accepts a string of binary digits and converts it into an image where each bit represents the color of a block in the grid, creating a visual representation of the binary data.

# Input types
## Required
- binary_pattern
- The binary pattern is a string composed of binary digits (0 and 1) that defines the pattern to be drawn. Each row of bits corresponds to a row in the output image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- width
- The width determines the width of the output image in pixels. It should be a positive integer and will affect the size of each block in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height determines the height of the output image in pixels. Like the width, it should be a positive integer and defines the vertical dimension of the grid.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
- The output image is a visual representation of the input binary pattern. It consists of a grid of squares, each square corresponding to a bit in the pattern.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- Provide a URL link to the documentation for more information and help on using this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
