# Documentation
- Class name: CR_SimpleImageCompare
- Category: Comfyroll/Graphics/Template
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SimpleImageCompare node is designed to compare two images side by side and overlay text on the images. It provides an intuitive way to visually assess differences between images and includes customization options for text, font, and layout.

# Input types
## Required
- text1
- The first paragraph of text to overlay on the first image. This is essential for providing context or description of the compared image.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
- The second paragraph of text to overlay on the second image. It serves a similar purpose as 'text1', offering a way to annotate or describe the second image in the comparison.
    - Comfy dtype: STRING
    - Python dtype: str
- footer_height
- The footer height where the text is placed. This parameter is crucial for controlling the vertical space allocated to the text overlay.
    - Comfy dtype: INT
    - Python dtype: int
- font_name
- The font name used for the text overlay. This affects the visual appearance of the text and is a key parameter for styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
- The font size of the text overlay. It determines the prominence of the text on the image and is important for adjusting readability.
    - Comfy dtype: INT
    - Python dtype: int
- mode
- The display mode for text and background colors. It allows users to choose between light or dark themes for better contrast and visibility.
    - Comfy dtype: COMBO['normal', 'dark']
    - Python dtype: str
- border_thickness
- The border thickness around the images. This is an important parameter for defining separation and framing of the images being compared.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image1
- The first image to compare. It is the core input for the node's function, as the node is intended to compare and display images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image2
- The second image to compare. It works together with 'image1' to provide a side‑by‑side comparison for the user.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- image
- The resulting image that contains the two input images compared side by side with overlaid text.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- A URL link to the node's documentation for further guidance on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
