# Documentation
- Class name: EmptyLatentImageCustom
- Category: RES4LYF/latents
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Generates an empty latent image tensor with configurable dimensions, batch size, channel count, and precision. Supports multiple mode and compression settings for flexible latent space initialization.

# Input types
## Required
- width
    - Sets the width of the generated latent image in pixels.
    - Comfy dtype: INT
    - Default: `24`
- height
    - Sets the height of the generated latent image in pixels.
    - Comfy dtype: INT
    - Default: `24`
- batch_size
    - Sets the number of latent images to generate in a single batch.
    - Comfy dtype: INT
    - Default: `1`
- channels
    - Selects the number of channels in the latent tensor.
    - Comfy dtype: COMBO
    - Default: `"4"`
    - Options: `4`, `16`
- mode
    - Selects the generation mode for the latent image.
    - Comfy dtype: COMBO
    - Default: `"default"`
    - Options: `sdxl`, `cascade_b`, `cascade_c`, `exact`
- compression
    - Sets the compression level applied to the latent representation.
    - Comfy dtype: INT
    - Default: `42`
- precision
    - Selects the numerical precision of the latent tensor values.
    - Comfy dtype: COMBO
    - Default: `"fp32"`
    - Options: `fp16`, `fp32`, `fp64`

# Output types
- LATENT
    - The generated empty latent image tensor ready for downstream processing.
    - Comfy dtype: LATENT

# Source code
[View source repository on GitHub](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
