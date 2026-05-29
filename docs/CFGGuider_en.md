# Documentation
- Class name: CFGGuider
- Category: sampler
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CFGGuider node is designed to guide the sampling process in generative models by adjusting conditions and controlling noise prediction. It encapsulates the logic for setting conditions and configuring the guidance factor, which is crucial for steering the model toward desired outcomes.

# Input types
## Required
- model_patcher
    - The model_patcher parameter is critical for CFGGuider because it provides the model options and functionality required for the sampling process. It manages the model's state and ensures conditions are correctly applied during sampling.
    - Comfy dtype: comfy.model_patcher.ModelPatcher
    - Python dtype: comfy.model_patcher.ModelPatcher
## Optional
- positive
    - Positive conditions are used to guide the sampling process to generate content containing specific features. They play a significant role in shaping the final output by influencing the model's decision-making process.
    - Comfy dtype: List[comfy.conds.Condition]
    - Python dtype: List[comfy.conds.Condition]
- negative
    - Negative conditions are used to prevent certain features or elements from appearing in the generated content. They are essential for refining the output and ensuring it meets the desired specifications.
    - Comfy dtype: List[comfy.conds.Condition]
    - Python dtype: List[comfy.conds.Condition]
- cfg
    - The cfg parameter, representing the guidance factor, is a key component of CFGGuider. It determines the strength of the condition's influence on the sampling process, allowing fine-tuning of the model's behavior.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output of the CFGGuider node is a tensor representing the sampled latent image. It is the result of the guided sampling process and encapsulates the generated content based on the provided conditions and settings.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
