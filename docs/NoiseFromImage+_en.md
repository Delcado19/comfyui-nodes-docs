# Documentation
- Class name: NoiseFromImage+
- Category: essentials/image utils
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- noise_strenght
    - The noise_strenght input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_size
    - The noise_size input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_noise
    - The color_noise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_strength
    - The mask_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_scale_diff
    - The mask_scale_diff input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_contrast
    - The mask_contrast input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The saturation input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - The contrast input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur
    - The blur input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- noise_mask
    - The noise_mask input is used by this node during execution.
    - Comfy dtype: IMAGE
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
