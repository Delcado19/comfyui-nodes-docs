# Documentation
- Class name: DenoiseScheduleHookProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DenoiseScheduleHookProvider node manages and applies denoise schedules to image processing tasks. It provides a simple schedule that adjusts denoise levels during upscaling to improve image quality.

# Input types
## Required
- schedule_for_iteration
    - The schedule_for_iteration parameter determines which denoise schedule to apply during upscaling. Selecting the correct strategy is crucial for enhancing image quality.
    - Comfy dtype: STRING
    - Python dtype: str
- target_denoise
    - The target_denoise parameter sets the desired denoise level to achieve. It is a key factor in the final quality of the upscaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- hook
    - The hook output provides a configured denoise schedule hook for controlling denoise levels during the upscaling process.
    - Comfy dtype: PK_HOOK
    - Python dtype: PixelKSampleHook

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
