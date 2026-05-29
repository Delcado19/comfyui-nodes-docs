
# Documentation
- Class name: ConditioningSetMaskAndCombine3
- Category: KJNodes/masking/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ConditioningSetMaskAndCombine3 node applies a set of masks to conditional data, may modify the conditional region based on specified parameters, then combines these conditional elements into a single output. It focuses on enhancing or altering conditional processing by applying multiple masks with different strengths and regions, achieving complex conditional scenarios.

# Input types
## Required
- positive_i
- Specify a set of positive conditional elements to be masked and combined. The intensity and region of the masks applied to these elements can be adjusted, thereby affecting the final conditional output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_i
- Specify a set of negative conditional elements to be masked and combined. Like the positive input, the mask intensity and region settings affect the result of conditional processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- mask_i
- The masks applied to the conditional elements. It defines the area and intensity of the conditional effect.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_i_strength
- Defines the mask intensity applied to the conditional elements, affecting the strength of conditional processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
- Determines whether to set the conditional region to the mask boundary or use the default setting, affecting how the mask is applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- combined_positive
- The combined result of the positive conditional elements after mask application and processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- combined_negative
- The combined result of the negative conditional elements after mask application and processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
