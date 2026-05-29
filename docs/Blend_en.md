# Documentation
- Class name: Blend
- Category: postprocessing/Blends
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Blend node combines two images using different blend modes, adjusting the final output according to a specified factor to create composite visual effects.

# Input types
## Required
- image1
    - The primary image serves as the base layer for the blend operation, significantly influencing the resulting composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The secondary image is the overlay layer that interacts with the base image, affecting the final visual effect after blending.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blend_factor
    - This parameter controls the influence of the overlay image in the final blend, with higher values making the overlay image more dominant.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_mode
    - Determines the blend mode used to combine the images, altering the interaction between the base and overlay layers to achieve different visual effects.
    - Comfy dtype: COMBO['normal', 'multiply', 'screen', 'overlay', 'soft_light']
    - Python dtype: str

# Output types
- blended_image
    - The resulting image after the blend process, representing a harmonious fusion of the input images according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
