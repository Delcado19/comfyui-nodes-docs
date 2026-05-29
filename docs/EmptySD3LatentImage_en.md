# Documentation
- Class name: EmptySD3LatentImage
- Category: latent/sd3
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Creates an empty latent image tensor with the specified dimensions for use in SD3 workflows. The latent is initialized to zeros and serves as a starting point for diffusion sampling.

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
    - Sets the number of latent images to generate in a single batch.
    - Comfy dtype: INT
    - Default: `1`

# Output types
- LATENT
    - A latent image tensor filled with zeros, ready for use as input to a diffusion sampler.
    - Comfy dtype: LATENT

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
