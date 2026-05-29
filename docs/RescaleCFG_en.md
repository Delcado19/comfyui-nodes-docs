# Documentation
- Class name: RescaleCFG
- Category: advanced/model
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RescaleCFG node modifies the model configuration by applying a scaling factor to its parameters. This adjustment aims to enhance model performance or adapt it to different operating conditions without altering its core architecture.

# Input types
## Required
- model
- The model parameters are essential because they define the base model to be rescaled. They are the primary input to the node operation to achieve the desired scaling effect.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiplier
- The multiplier parameter is essential because it determines the degree of scaling applied to the model configuration. It directly influences the final outcome of the rescaling process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- rescaled_model
- The rescaled model output represents the model after the scaling process has been applied. It is the result of the node operation and marks the model's new configuration.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
