
# Documentation
- Class name: SaltMaskSmoothRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltMaskSmoothRegion node is used to apply a smoothing filter to mask regions, controlled by a specified sigma value. This process enhances the visual quality of mask regions by reducing noise and irregularity.

# Input types
## Required
- masks
    - masks parameter represents the input masks that need smoothing, and is the main data for node processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- sigma
    - sigma parameter controls the smoothness of the smoothing filter applied to the mask region, directly affecting the smoothing effect and the degree of noise reduction.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - output is the mask tensor after smoothing processing according to the specified sigma value, providing higher visual quality by reducing noise and irregularity.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
