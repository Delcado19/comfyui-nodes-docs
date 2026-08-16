# Documentation
- Class name: easy imageDetailTransfer
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- target
    - The target input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- source
    - The source input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- blur_sigma
    - The blur_sigma input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_factor
    - The blend_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_output
    - The image_output input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - The save_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
