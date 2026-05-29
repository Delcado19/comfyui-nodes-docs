
# Documentation
- Class name: SAIColorTransfer
- Category: SALT/Image/Process
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SAIColorTransfer node is specifically designed to apply color transfer techniques between images, modifying the palette of a target image to match that of a source image. This process is useful for harmonizing colors across different images or achieving specific aesthetic effects.

# Input types
## Required
- target_images
    - Specifies the image whose palette needs to be modified. This input is crucial for determining the final appearance of the output image.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- source_images
    - Defines the image that provides the palette to be transferred onto the target image. The choice of source image directly affects the color transformation applied.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- mode
    - Determines the color transfer method to apply, such as PDF transfer, mean transfer, or LAB color space transfer, influencing the visual effect of color adaptation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- images
    - The resulting image after the color transfer process, showcasing the adjusted palette.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
