# Documentation
- Class name: WAS_Image_Rotate_Hue
- Category: WAS Suite/Image/Adjustment
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Rotate_Hue node is designed to adjust the hue of an image, providing a method to change the overall tone of the image without altering its brightness or saturation. It is particularly useful for creating variations of images for visual effects or color correction purposes.

# Input types
## Required
- image
    - The image parameter is crucial for the node's operation, as it is the input on which the hue adjustment will be performed. It is the primary data that the node will process to achieve the desired color transformation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- hue_shift
    - The hue_shift parameter allows fine-tuning of the color rotation in the image. It is a floating-point number that affects the degree of hue shift, thereby influencing the final visual effect of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- rotated_image
    - The rotated_image output represents the result of applying the hue rotation to the input image. It is the color-adjusted transformed image, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
