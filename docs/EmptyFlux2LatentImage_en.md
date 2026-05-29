# Documentation
- Class name: EmptyFlux2LatentImage
- Display name: Empty Flux 2 Latent
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Creates an empty latent image tensor with the specified width, height, and batch size for use in Flux 2 workflows. The output is a blank LATENT suitable for use as a starting point for image generation.

# Input types
## Required
- width
    - Sets the width of the latent image in pixels.
    - Comfy dtype: INT
    - Default: `1024`
- height
    - Sets the height of the latent image in pixels.
    - Comfy dtype: INT
    - Default: `1024`
- batch_size
    - Sets the number of latent images to generate in the batch.
    - Comfy dtype: INT
    - Default: `1`

# Output types
- LATENT
    - A blank latent tensor with the specified dimensions and batch size.
    - Comfy dtype: LATENT

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
