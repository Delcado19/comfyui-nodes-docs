# Documentation
- Class name: DualCFGGuider
- Category: sampling/custom_sampling/guiders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DualCFGGuider node is designed to guide the sampling process of a generative model by using two sets of conditions. It focuses on enhancing control over the generated results by adjusting the influence of positive, negative, and intermediate conditions through configurable parameters, allowing fine-tuned control over the output.

# Input types
## Required
- model
    - The model parameter is critical as it represents the generative model that the node will use for the sampling process. It defines the foundation upon which conditions and configurations are applied to produce the desired output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cond1
    - The first condition input is essential for providing the initial context or guidance for the sampling process. It helps shape the direction of the generated content based on the specific requirements of the task at hand.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- cond2
    - The second condition input further refines the sampling process by providing an additional layer of context. It works in conjunction with the first condition input to achieve more nuanced and detailed results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative condition input plays a crucial role in steering the sampling process away from undesired outcomes. It helps define what should be avoided in the generated content, ensuring the results are more targeted and focused.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
## Optional
- cfg_conds
    - The cfg_conds parameter allows adjustment of the configuration conditions, influencing the balance between positive and negative influences during the sampling process. This is an important tuning parameter for achieving the desired level of control over generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_cond2_negative
    - The cfg_cond2_negative parameter is used to fine-tune the influence of the second condition input, particularly in its role as a negative condition. It provides a mechanism to adjust the strength of negative guidance applied during sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- guider
    - The output guider is a configured instance of the DualCFGGuider class, ready for use in the sampling process. It encapsulates the conditions and configurations set by the user, ensuring the sampling aligns with the desired specifications.
    - Comfy dtype: GUIDER
    - Python dtype: comfy.samplers.CFGGuider

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
