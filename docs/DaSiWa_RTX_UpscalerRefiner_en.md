# Documentation
- Class name: DaSiWa_RTX_UpscalerRefiner
- Category: DaSiWa/Video
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa RTX Upscaler & Refiner: A high-performance 3-pass processing node.
1. Refine Pass: Runs at source resolution to clean up noise or blur using NVIDIA RTX VFX.
2. Upscale Pass: Scales the image up to 4x using VSR or High Bitrate modes.
Processes frame-by-frame to maintain low VRAM usage for video batches.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- denoise_quality
    - The denoise_quality input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- deblur
    - The deblur input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- deblur_quality
    - The deblur_quality input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- upscale
    - The upscale input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- upscale_quality
    - The upscale_quality input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resize_type
    - The resize_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- megapixels
    - The megapixels input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- divisible_by
    - The divisible_by input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ratio_preset
    - The ratio_preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resize_method
    - The resize_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device_id
    - The device_id input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
