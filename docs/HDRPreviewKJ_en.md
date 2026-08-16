# Documentation
- Class name: HDRPreviewKJ
- Category: KJNodes/image
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Realtime-exposure preview for HDR-compressed images.

Input: LogC3-compressed [0,1] image/video batch (e.g. the VAE-decoded output of an HDR IC-LoRA workflow, prior to HDR decompression).

Decompression + exposure + saturation + Reinhard tonemap + sRGB runs in a WebGL fragment shader in the browser for realtime slider feedback, and the same math runs server-side to produce the baked sRGB IMAGE output. Slider changes update the preview immediately; the IMAGE output only updates when the workflow is re-queued.

# Input types
## Required
- image
    - LogC3-compressed HDR image/video in [0,1], or linear HDR if 'input_space' is 'linear'.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- exposure
    - Exposure in EV stops. 0 = no change, +1 = 2x brighter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - Saturation multiplier. 0 = grayscale, 1 = unchanged, 2 = 2x.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- fps
    - Playback frame rate for video (batch) inputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_space
    - Color space of input. 'logc3' = ARRI LogC3 compressed HDR; 'linear' = linear HDR directly; 'srgb' = already-graded sRGB image (skips Reinhard tonemap).
    - Comfy dtype: COMBO
    - Python dtype: object
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
    - Tonemapped sRGB image, ready for preview/save.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
