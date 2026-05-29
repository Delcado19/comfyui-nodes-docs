# Documentation
- Class name: ConditioningAverage
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningAverage node aims to blend different conditioning inputs by applying a weighted average. It intelligently combines 'conditioning_from' with 'conditioning_to' based on a specified intensity, allowing fine-grained control over the conditioning process in generative models.

# Input types
## Required
- conditioning_to
    - The 'conditioning_to' parameter is critical because it defines the target conditioning data to which the weighted average will be applied. It plays a significant role in determining the node's final output by influencing how the conditioning blend is executed.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- conditioning_from
    - The 'conditioning_from' parameter is essential because it provides the source conditioning data that will be averaged with 'conditioning_to'. It is important because it determines the initial condition to be mixed, thereby affecting the node's execution and resulting output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- conditioning_to_strength
    - The 'conditioning_to_strength' parameter is critical in determining the degree of influence 'conditioning_to' has in the weighted average. It directly affects the node's operation by controlling the extent to which 'conditioning_to' overrides 'conditioning_from' in the blend.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output of the ConditioningAverage node is a list of tuples containing the modified tensor and potentially 'pooled_output'. This output represents the result of the weighted average blending process and is important for further processing in generative models.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
