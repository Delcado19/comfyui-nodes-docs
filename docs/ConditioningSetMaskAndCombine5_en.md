
# Documentation
- Class name: ConditioningSetMaskAndCombine5
- Category: KJNodes/masking/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetMaskAndCombine5 node applies masks to condition data and combines multiple sets of conditions and masks at varying intensities. It allows selective enhancement or suppression of features in condition data based on applied masks, enabling complex conditioning scenarios for generative models. This node provides fine-grained control over the generation process by masking and combining multiple input sets.

# Input types
## Required
- positive_i
    - Specifies a set of positive condition data to apply masks and combine. The mask intensity affects how strongly these features appear in the final result.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_i
    - Specifies a set of negative condition data to apply masks and combine. The mask intensity affects how strongly these features are suppressed in the final result.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- mask_i
    - The mask to apply to the condition dataset, determining the affected regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_i_strength
    - Defines the mask intensity applied to the condition dataset, affecting the degree of feature enhancement or suppression.
    - Comfy dtype: FLOAT
    - Python dtype: float
- set_cond_area
    - Determines whether to set the condition area to the mask-defined boundary, allowing more precise control over condition effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- combined_positive
    - The combined positive condition dataset after mask application, usable in further generation processes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- combined_negative
    - The combined negative condition dataset after mask application, indicating features suppressed in the generative model.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
