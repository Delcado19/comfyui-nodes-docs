# Documentation
- Class name: WAS_Image_Displacement_Warp
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Displacement_Warp node is designed to apply a displacement warp effect to a given set of images. It uses a displacement map and an amplitude factor to determine the degree of warping, resulting in visually distorted outputs that can be used for various creative and technical applications.

# Input types
## Required
- images
    - The input images to which the displacement warp effect is applied. These images serve as the base layer for the transformation process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- displacement_maps
    - The displacement map indicates the direction and intensity of the warp effect applied to the input images. Each pixel value in the map corresponds to a displacement vector.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- amplitude
    - The amplitude parameter controls the intensity of the displacement effect. Higher values result in more pronounced warping, while lower values produce a more subtle effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The output images are the result of applying the displacement warp effect to the input images, using the specified displacement map and amplitude.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
