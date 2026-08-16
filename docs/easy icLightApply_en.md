# Documentation
- Class name: easy icLightApply
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- lighting
    - The lighting input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- source
    - The source input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- remove_bg
    - The remove_bg input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- lighting_image
    - The lighting_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
