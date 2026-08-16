# Documentation
- Class name: BatchResizeWithLanczos
- Category: image/resize
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

CUDA-accelerated, gamma-correct Lanczos resizer (TorchLanc).

Modes:
• Keep AR
• Stretch
• Crop (Cover + Crop)
• Pad (Fit + Pad)
• AR Scale + Divisible Crop

Node functionality based on Resize nodes by Kijai

More from me!: https://artificialsweetener.ai

# Input types
## Required
- image
    - Input batch (B,H,W,C) in [0,1] float.
Processed on GPU.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Target width (pixels).

Notes:
• Keep AR / Pad: maximum width for the fit
• Crop: final output width
• AR Scale + Divisible Crop: requested width before divisibility
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Target height (pixels).

Notes:
• Keep AR / Pad: maximum height for the fit
• Crop: final output height
• AR Scale + Divisible Crop: requested height before divisibility
    - Comfy dtype: INT
    - Python dtype: int
- resize_mode
    - Modes:
- Keep AR: Fit inside width×height (preserve aspect)
- Stretch: Force to width×height (may distort)
- Crop (Cover + Crop): Scale to cover, then crop to width×height
- Pad (Fit + Pad): Fit inside, then pad to width×height
- AR Scale + Divisible Crop: Scale by SOURCE long side to ≤ requested divisible; crop ONLY the short side to its divisible
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- divisible_by
    - Force output dimensions to multiples of N.

Details:
• Keep AR: Fit → then step down to the largest size ≤ requested that keeps AR AND makes both sides divisible
• AR Scale + Divisible Crop: Lock the scaled LONG side to its divisible target; crop ONLY the short side to its divisible
Set to 1 (or 0 in UI) to disable
    - Comfy dtype: INT
    - Python dtype: int
- max_batch_size
    - 0 = process whole batch
>0 = chunk the batch to this size
    - Comfy dtype: INT
    - Python dtype: int
- sinc_window
    - Lanczos window size (a). Higher = sharper (more ringing).
    - Comfy dtype: INT
    - Python dtype: int
- pad_color
    - Pad mode only. RGB as 'r, g, b' (0-255).
    - Comfy dtype: STRING
    - Python dtype: str
- crop_position
    - Where to crop/pad from.
Choose which edges are preserved for cropping, or where padding is added.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- precision
    - Resampling compute dtype.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- mask
    - Optional mask (B,H,W) in [0,1].
Resized with nearest.
Follows the same crop/pad as the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
