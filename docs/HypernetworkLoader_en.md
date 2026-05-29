# Documentation
- Class name: HypernetworkLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The HypernetworkLoader class is designed to conveniently load and integrate hypernetworks into existing neural network models. It enhances the model's capabilities by applying dynamically generated hypernetwork patches based on the provided strength parameter.

# Input types
## Required
- model
    - The model parameter is required because it represents the neural network that will be enhanced through the hypernetwork. It is the core component that will be modified to include hypernetwork functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- hypernetwork_name
    - The hypernetwork_name parameter specifies the name of the hypernetwork to be loaded. It is a critical input because it determines which hypernetwork patch will be applied to the model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- strength
    - The strength parameter determines the impact of the hypernetwork on the model. It is an optional input that allows fine-tuning the intensity of the hypernetwork effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is the original neural network model that has been enhanced with hypernetwork patches. It is now equipped to leverage the additional capabilities provided by the hypernetwork.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
