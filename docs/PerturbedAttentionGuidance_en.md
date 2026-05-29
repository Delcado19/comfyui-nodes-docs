# Documentation
- Class name: PerturbedAttentionGuidance
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PerturbedAttentionGuidance class introduces a method to modify the model's attention mechanism by injecting perturbations, aiming to enhance the model's robustness and adaptability to various conditions.

# Input types
## Required
- model
    - Model parameters are necessary because they define the base architecture for applying perturbations, directly affecting the results of the attention guidance process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scale
    - The scale parameter adjusts the strength of the perturbation, significantly affecting how the model's attention is altered, which in turn affects the quality of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is a modified version of the input model, now enhanced with perturbed attention guidance, which can lead to improved performance in various tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
