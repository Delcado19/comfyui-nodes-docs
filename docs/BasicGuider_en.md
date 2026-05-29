# Documentation
- Class name: BasicGuider
- Category: sampling/custom_sampling/guiders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The BasicGuider node is responsible for generating a guider object that assists the sampling process. It is designed to integrate with the model and apply conditions to guide the sampling towards the desired outcome.

# Input types
## Required
- model
    - The model parameter is crucial for the BasicGuider node, as it defines the underlying model that the guider will operate on. It is through this model that the guider influences the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- conditioning
    - The condition input is essential for the BasicGuider node, as it provides the conditions that will be used to guide the sampling process. It determines the direction and focus of the sampling based on the provided conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- guider
    - The output guider is a key component of the BasicGuider node's functionality. It represents the guider object configured according to the provided model and conditions, which will be used to direct the sampling process.
    - Comfy dtype: GUIDER
    - Python dtype: comfy.samplers.CFGGuider

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
