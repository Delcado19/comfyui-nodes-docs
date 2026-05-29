# Documentation
- Class name: WAS_Bounded_Image_Blend_With_Mask
- Category: WAS Suite/Image/Bound
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `bounded_image_blend_with_mask` blends a source image into a target image within a specified boundary, using a mask to control the blending process. It intelligently applies a blend factor to determine the degree of blending, and optionally uses a feathering effect to smooth the transition between images.

# Input types
## Required
- target
    - The target image is the image onto which the source image will be blended. It serves as the foundation for the entire blending operation and is critical to the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_mask
    - Defines the mask that specifies the region in the target image where blending will occur. It plays a key role in determining which parts of the target image are affected by the source image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- target_bounds
    - Specifies the boundary within the target image where blending will take place. It is essential for limiting the blending effect to a specific area.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: Tuple[int, int, int, int]
- source
    - The image that will be blended onto the target. Its visual content and properties significantly influence the result of the blending process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- blend_factor
    - A factor that controls the blending intensity between the source and target images. It allows fine-tuning of the blending effect to achieve the desired visual result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feathering
    - The amount of feathering applied to the mask, which smooths the edges of the blended region for a more natural transition. It enhances the aesthetic quality of the blended image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The resulting image after the blending process, reflecting the combined visual elements of the source and target images within the specified boundary and mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
