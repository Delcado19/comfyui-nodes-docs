# Documentation
- Class name: MaskToRegion
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The MaskToRegion node is designed to process a given mask and determine a rectangular region that fits the mask under specified constraints. It intelligently adjusts the bounding box dimensions to accommodate the mask while maintaining desired properties such as aspect ratio, divisibility, or multiples. This node plays a critical role in applications requiring precise manipulation of mask regions, such as image segmentation or object detection.

# Input types
## Required
- mask
    - The 'mask' parameter is essential, as it defines the input mask from which the region is derived. It is the primary data source that the node operates on to produce the desired output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- padding
    - The 'padding' parameter allows for additional space around the mask, which can be critical in applications requiring a buffer around the object of interest.
    - Comfy dtype: INT
    - Python dtype: int
- constraints
    - The 'constraints' parameter is crucial in determining how the region dimensions are adjusted. It dictates whether the aspect ratio should be maintained, divisibility enforced, or multiples respected.
    - Comfy dtype: COMBO[keep_ratio, keep_ratio_divisible, multiple_of, ignore]
    - Python dtype: str
- constraint_x
    - The 'constraint_x' parameter, used alongside 'constraint_y', helps define constraints for width and height adjustments, ensuring the output region meets specific dimensional requirements.
    - Comfy dtype: INT
    - Python dtype: int
- constraint_y
    - The 'constraint_y' parameter is similar to 'constraint_x'; it helps set vertical constraints for the region, complementing the horizontal constraints set by 'constraint_x'.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
    - The 'min_width' parameter ensures the resulting region's width does not fall below a specified minimum, which is essential for maintaining the visibility of the contained object.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
    - The 'min_height' parameter, similar to 'min_width', guarantees the region's height meets a minimum threshold, preventing the object from being overly compressed vertically.
    - Comfy dtype: INT
    - Python dtype: int
- batch_behavior
    - The 'batch_behavior' parameter affects how regions within a batch are processed, allowing matching sizes across all regions or ensuring consistent aspect ratios.
    - Comfy dtype: COMBO[match_ratio, match_size]
    - Python dtype: str

# Output types
- region
    - The 'region' output parameter represents the final rectangular region containing the input mask after all specified constraints and adjustments are applied. It is a critical component for downstream tasks relying on precise region localization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
