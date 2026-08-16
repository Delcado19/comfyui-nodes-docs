# Documentation
- Class name: ModelSamplingAdvancedResolution
- Category: RES4LYF/model_shift
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ModelSamplingAdvancedResolution is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scaling
    - The scaling input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_shift
    - The max_shift input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- base_shift
    - The base_shift input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
