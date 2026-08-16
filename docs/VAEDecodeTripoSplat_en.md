# Documentation
- Class name: VAEDecodeTripoSplat
- Category: model/latent/triposplat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Decode the sampled TripoSplat latent into a 3D gaussian splat. Modify the number of gaussians to vary the density.

# Input types
## Required
- samples
    - The samples input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - TripoSplat VAE decoder
    - Comfy dtype: VAE
    - Python dtype: object
- num_gaussians
    - Number of gaussians to produce (rounded to a multiple of 32). 262144 matches the octree's point density; higher oversamples the same points (denser, but no new detail) and costs proportionally more VRAM/time.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seeds the octree point sampler (global RNG) for deterministic decodes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- splat
    - The splat output is produced by this node.
    - Comfy dtype: SPLAT
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
