# Documentation
- Class name: RescaleClassifierFreeGuidance
- Category: custom_node_experiments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The 'patch' method of the RescaleClassifierFreeGuidance node is designed to modify a given model by introducing a rescaling operation. It adjusts the model's internal configuration, applying a dynamic scaling factor to the classifier's guidance signal, thereby allowing finer control over the model's behavior. This approach is especially suitable for fine‑tuning the model's output to meet specific requirements or constraints.

# Input types
## Required
- model
    - The `model` parameter is critical to the node because it represents the machine‑learning model that the `patch` method will modify. It is the primary input, determining the node's operation and the subsequent behavior of the model after the patching process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiplier
    - The `multiplier` parameter plays a key role in controlling the degree of rescaling applied to the model's guidance signal. It is a floating‑point number that balances the original configuration with the rescaled configuration, directly affecting the model's output after patching.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- modified_model
    - The `modified_model` output is the result of applying the `patch` method to the input model. It is a modified version of the original model with its guidance signal scaling factor adjusted, which may produce different results based on the specified multiplier.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI_experiments)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
