# Documentation
- Class name: SeedVR2PostProcessing
- Category: image/post-processors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Align the generated image with the original resized image and apply color correction.

# Input types
## Required
- images
    - The generated image to process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- original_resized_images
    - The original resized image before pre-processing, used as reference.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- color_correction_method
    - Method to match the generated image colors to the original image. lab: transfer color in CIELAB space, preserving detail (most faithful). wavelet: transfer low-frequency color, keeping upscaled high-frequency detail. adain: match per-channel mean/std (fastest, global tint). none: skip color transfer (geometry alignment only).
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- images
    - The aligned, color-corrected image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
