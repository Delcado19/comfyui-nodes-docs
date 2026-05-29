# Documentation
- Class name: Blend
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Blend node aims to seamlessly combine two images using a specified blend factor and blend mode, producing a visually coherent output. It adjusts opacity and applies various blending techniques to achieve the desired aesthetic effect.

# Input types
## Required
- image1
    - image1 is the first input image that will be blended with the second image. It plays a crucial role in determining the appearance of the final blended image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - image2 is the second input image that will be blended with the first image. Its contribution to the final image is influenced by the blend factor and blend mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blend_factor
    - The blend factor determines the degree to which the second image is blended with the first image. This is a critical parameter used to control the balance between the two images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_mode
    - The blend mode determines the algorithm used to blend the images. It significantly affects the final visual result of the blending operation.
    - Comfy dtype: COMBO['normal', 'multiply', 'screen', 'overlay', 'soft_light', 'difference']
    - Python dtype: str

# Output types
- blended_image
    - The blended image is the output of the blend_images function, representing the combined result of the two input images after applying the blend factor and blend mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
