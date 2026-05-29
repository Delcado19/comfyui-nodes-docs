
# Documentation
- Class name: GrowMaskWithBlur
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GrowMaskWithBlur node processes single or batched masks. It can expand or shrink masks, optionally apply blur effects, and perform various other transformations such as flipping, filling holes, and inter-frame interpolation. This node is highly flexible in mask processing, allowing dynamic adjustment and enhancement of mask data.

# Input types
## Required
- mask
    - The input mask or batch of masks to be processed. It is the primary data source for all transformations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- expand
    - Determines the degree to which the mask will be expanded or contracted. Positive values expand the mask, negative values shrink it.
    - Comfy dtype: INT
    - Python dtype: int
- incremental_expandrate
    - Specifies the ratio for adjusting the expand parameter per frame, allowing dynamic resizing across a sequence of masks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tapered_corners
    - When enabled, applies gradient angles to the mask during expansion or contraction, affecting the shape of the processed mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- flip_input
    - If set to true, horizontally flips the input mask before any other processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- blur_radius
    - Applies a blur effect to the mask using the specified radius. Values greater than 0 activate this effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lerp_alpha
    - Alpha value for linear interpolation between frames, enabling smooth transitions in animated mask sequences.
    - Comfy dtype: FLOAT
    - Python dtype: float
- decay_factor
    - Decay factor applied to the mask between frames, allowing features to gradually fade or intensify.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- fill_holes
    - When enabled, fills any holes in the mask, which is particularly useful for creating more solid or coherent mask shapes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- mask
    - The primary output mask after applying the specified transformations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_inverted
    - The inverted version of the primary output mask, providing an alternative visualization or application method.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
