# Documentation
- Class name: ImageColorMatchAdobe+
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
- color_space
    - The color_space input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- luminance_factor
    - The luminance_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_intensity_factor
    - The color_intensity_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fade_factor
    - The fade_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- neutralization_factor
    - The neutralization_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- reference_mask
    - The reference_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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
