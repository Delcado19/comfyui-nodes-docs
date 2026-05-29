# Documentation
- Class name: WAS_Bounded_Image_Blend
- Category: WAS Suite/Image/Bound
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `bounded_image_blend` method aims to seamlessly blend a source image into a target image within specific boundaries. By applying a blend factor and optional feathering, it creates smooth transitions between images, ensuring visual coherence.

# Input types
## Required
- target
    - The target image into which the source image will be blended. It serves as the background for the blend operation and is critical in determining the final appearance of the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_bounds
    - Coordinates defining the region within the target image where the source image will be blended. These boundaries are essential for specifying the region of interest for the operation.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: Tuple[int, int, int, int]
- source
    - The image to be blended onto the target. It is the primary visual element to be merged into the target image within the specified boundaries.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- blend_factor
    - A floating-point value that determines the degree of blending between the source and target images. It affects the transparency of the source image within the blended region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feathering
    - The amount of feathering applied to the edges of the blended region to create smooth transitions. Higher values result in more gradual blending.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The output image, representing the blended result of the source and target images within the specified boundaries.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
