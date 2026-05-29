# Documentation
- Class name: CR_BinaryPattern
- Category: Comfyroll/Graphics/Pattern
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_BinaryPattern node generates visual patterns from binary strings. It accepts a binary pattern input, renders it as a grid of colored squares, and provides a way to visualize binary data in graphic form. This node is especially suitable for creating complex designs and patterns based on binary sequences, offering a unique data visualization method.

# Input types
## Required
- binary_pattern
- The binary pattern input is the node's key parameter, as it directly determines the visual output. It is a multiline string representing a series of binary digits used to build the pattern. The complexity and design of the final pattern are largely influenced by this input.
    - Comfy dtype: STRING
    - Python dtype: str
- width
- The width parameter sets the output image's width in pixels, crucial for defining the overall size of the pattern. It works with the height parameter to ensure the pattern scales appropriately to the desired aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height parameter sets the output image's vertical dimension, and together with the width parameter determines the pattern's size. It is a key factor in controlling the pattern's overall appearance and scalability.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- background_color
- The background color parameter allows customization of the pattern's background, affecting the overall visual appeal and contrast of the rendered pattern. It can be set to various predefined colors or custom hexadecimal color values.
    - Comfy dtype: COLORS
    - Python dtype: str
- outline_color
- The outline color parameter defines the color of the squares' outlines, adding detail and enhancing the pattern's visibility against the background. It can be adjusted to match or contrast with the pattern's colors for stylistic purposes.
    - Comfy dtype: COLORS
    - Python dtype: str

# Output types
- IMAGE
- The IMAGE output provides the rendered binary pattern as an image, usable for further processing or display. It represents the node's top-level functionality, showcasing the visual representation of the input binary pattern.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output provides a URL to the node's documentation page, giving users additional information and guidance on how to use the node effectively. It is a useful resource for understanding the node's capabilities and potential use cases.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
