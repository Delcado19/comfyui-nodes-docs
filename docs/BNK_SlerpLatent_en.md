# Documentation
- Class name: LatentSlerp
- Category: latent
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

This node performs spherical linear interpolation (slerp) between two sets of latent vectors, providing smooth transitions between different latent states. This is particularly useful for generating intermediate representations in a continuous latent space.

# Input types
## Required
- latents1
    - First set of latent vectors, serving as the starting point for interpolation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- factor
    - Interpolation factor, determining the position along the path between the two latent sets.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- latents2
    - Second set of latent vectors, representing the end point of the interpolation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- mask
    - An optional mask that can be used to selectively apply interpolation to certain elements of the latent vectors.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- slerped_latents
    - The resulting interpolated latent vectors, representing a smooth transition between the input latent sets.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_Noise)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
