# Documentation
- Class name: PiDConditioning
- Category: model/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Attaches a latent and a degrade_sigma scalar to a CONDITIONING for PiD decoding/upscaling

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - latent (from VAEEncode or a KSampler).
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_format
    - Flux1 (16-ch) and Flux2 (128-ch) latents are auto-detected from channel dim under 'flux'. For SD3 (16-ch), SDXL (4-ch), or QwenImage (16-ch), select manually.
    - Comfy dtype: COMBO
    - Python dtype: object
- degrade_sigma
    - 0 = clean latent. Increase to denoise corrupted latent outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
