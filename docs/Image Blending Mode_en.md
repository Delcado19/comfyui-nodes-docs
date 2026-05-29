# Documentation
- Class name: WAS_Image_Blending_Mode
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Blending_Mode node blends two images using various blending modes, offering a versatile way to combine visual elements. It emphasizes the creative aspect of image processing, enabling a wide range of effects through different blending techniques.

# Input types
## Required
- image_a
    - Image A is the first input image to be blended with Image B. It plays a crucial role in determining the final appearance of the blended result, as it is one of the primary visual elements being combined.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_b
    - Image B is the second input image to be blended with Image A. It is equally important in influencing the final output, contributing to the overall look and feel of the blended image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- mode
    - The blending mode determines how the colors of Image A and Image B are mixed. Each mode provides a different visual effect, allowing for a high degree of customization during the blending process.
    - Comfy dtype: COMBO['add', 'color', 'color_burn', 'color_dodge', 'darken', 'difference', 'exclusion', 'hard_light', 'hue', 'lighten', 'multiply', 'overlay', 'screen', 'soft_light']
    - Python dtype: str
- blend_percentage
    - The blending percentage controls the intensity of the blending effect. It allows fine-tuning of the blend, enabling subtle or significant merging of the two images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image is the result of blending Image A and Image B using the specified blending mode and blending percentage. It encapsulates the combined visual elements of the input images, reflecting the creative intent of the blending operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
