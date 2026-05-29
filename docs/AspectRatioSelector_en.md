
# Documentation
- Class name: AspectRatioSelector
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AspectRatioSelector node is designed to select and adjust the aspect ratio of images based on predefined options. It simplifies the process of resizing images to specific dimensions, ensuring the output meets the desired aspect ratio. This node is particularly useful in image processing and layout design, enabling rapid standardized image resizing.

# Input types
## Required
- aspect_ratio
    - Specify the desired image aspect ratio from a predefined list of common ratios. This selection determines the dimensions to which the image will be resized, directly affecting the final appearance and layout of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ratio
    - Returns the selected aspect ratio as a string, representing the proportional relationship between the image width and height. This output can be used for subsequent image processing or layout calculations.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The calculated width of the image after adjustment according to the selected aspect ratio. This value reflects the new width of the image while maintaining the chosen aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The calculated height of the image after adjustment according to the selected aspect ratio. This value reflects the new height of the image while maintaining the chosen aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
