# Documentation
- Class name: LTXVDilateVideoMask
- Category: Lightricks/mask_operations
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Dilates a video mask spatially and/or temporally using separable max-pooling and thresholds the result.

# Input types
## Required
- spatial_radius
    - Half-size of the spatial dilation kernel. Kernel = 2*radius+1.
    - Comfy dtype: INT
    - Python dtype: int
- temporal_radius
    - Half-size of the temporal dilation kernel. Kernel = 2*radius+1.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - Video mask to dilate. Either this or image_as_mask must be provided.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_as_mask
    - Image to use as mask (channel-averaged). Either this or mask must be provided.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
