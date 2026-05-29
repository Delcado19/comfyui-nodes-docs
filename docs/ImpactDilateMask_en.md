# Documentation
- Class name: DilateMask
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DilateMask node performs morphological dilation on a binary mask, expanding the boundaries of foreground objects in the mask. It is especially useful for refining segmentation masks by increasing the size of segmented regions, which benefits tasks such as object detection and segmentation refinement.

# Input types
## Required
- mask
- The 'mask' parameter is a binary mask that defines the region of interest within the image. It is essential for the dilation process because it determines which areas will be expanded. The quality of the dilation result largely depends on the accuracy of the input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- dilation
- The 'dilation' parameter specifies the amount of dilation to apply to the mask. Positive values cause the mask edges to expand, while negative values cause them to contract. This parameter is crucial for controlling the extent of the dilation effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- dilated_mask
- The 'dilated_mask' output is the result of applying the dilation operation to the input mask. It is a binary mask in which foreground objects have been expanded according to the specified dilation factor.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
