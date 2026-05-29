# Documentation
- Class name: HLFrequencyDetailRestore
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Use low-frequency filtering plus retaining high frequencies to restore image details. Compared to [kijai's DetailTransfer](https://github.com/kijai/ComfyUI-IC-Light), this node preserves details while blending better with the environment.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_image
    - Original detail image input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- keep_high_freq
    - Range of high frequencies to retain. The larger the value, the richer the high-frequency details retained.
    - Comfy dtype: INT
    - Python dtype: int

- erase_low_freq
    - Range of low frequencies to erase. The larger the value, the more low-frequency content is erased.
    - Comfy dtype: INT
    - Python dtype: int

- mask_blur
    - Mask edge blur. Only effective when a mask input is provided.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- mask
    - If a mask is input, only the details in the masked area are restored.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
