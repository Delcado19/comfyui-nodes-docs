# Documentation
- Class name: ImageHistogramMatch+
- Category: essentials/image processing
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference
    - The reference input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- factor
    - The factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
