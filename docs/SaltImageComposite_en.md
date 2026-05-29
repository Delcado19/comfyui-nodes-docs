
# Documentation
- Class name: SaltImageComposite
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltImageComposite node aims to create complex image compositions by mixing or overlaying multiple images according to a specified schedule plan. This node implements dynamic composition of images, helping to create visually rich and diverse outputs.

# Input types
## Required
- images_a
    - The first set of images used in the composition process. These images serve as one of the primary layers of the composition.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- images_b
    - The second set of images used in the composition process. These images serve as another primary layer of the composition, and will be mixed with the first set according to a specified mode.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- mode
    - Defines the mixing method of the two sets of images. This mode determines how images_a and images_b are combined, affecting the visual effect of the composition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- masks
    - Optional masks that can be applied to images during the composition process. Masks allow for more controlled blending by specifying areas of the image that are affected or protected.
    - Comfy dtype: MASK
    - Python dtype: List[Mask]
- blend_schedule
    - An optional schedule plan for controlling the blending strength or method over time, allowing dynamic changes during the composition process.
    - Comfy dtype: LIST
    - Python dtype: List[Any]

# Output types
- images
    - The resulting image after applying the composition operation. This output shows the final composition effect, blending all input images according to the defined mode and schedule plan.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
