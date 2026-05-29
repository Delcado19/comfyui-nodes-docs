
# Documentation
- Class name: ConditioningSetMaskAndCombine4
- Category: KJNodes/masking/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node applies a series of masks to conditioning data, combining them according to specified strength and region parameters. It enables dynamic adjustment of conditioned regions through masks, providing precise control over the conditioning process in multi-step or complex conditioning scenarios.

# Input types
## Required
- positive_i
    - Specifies the positive conditioning data to combine with the corresponding mask. Strength and application region can be adjusted to achieve nuanced conditioning effects.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_i
    - Specifies the negative conditioning data to combine with the corresponding mask, allowing the conditioning effect to be weakened or counteracted based on mask application.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- mask_i
    - Masks applied to the conditioning data, defining the region and strength of the conditioning effect.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_i_strength
    - Defines the strength of the conditioning effect for the corresponding mask, influencing the intensity of the applied condition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Determines whether the conditioning region follows the boundaries defined by the mask or uses default settings, affecting how the condition is applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- combined_positive
    - The resulting positive conditioning data after applying masks and combining according to specified parameters.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- combined_negative
    - The resulting negative conditioning data reflecting the weakened or counteracted effect of the mask on the original condition.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
