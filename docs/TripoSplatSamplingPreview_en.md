# Documentation
- Class name: TripoSplatSamplingPreview
- Category: model/latent/triposplat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Patch the TripoSplat model for the standard Ksampler node to show a live decoded gaussian splat preview at each step.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - TripoSplat VAE decoder
    - Comfy dtype: VAE
    - Python dtype: object
- octree_level
    - Octree depth for the preview decode (lower = cheaper/coarser).
    - Comfy dtype: INT
    - Python dtype: int
- num_gaussians
    - Number of gaussians to produce for the preview (rounded to a multiple of 32).
    - Comfy dtype: INT
    - Python dtype: int
- yaw
    - Preview camera yaw in degrees.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pitch
    - Preview camera pitch in degrees.
    - Comfy dtype: FLOAT
    - Python dtype: float
- point_size
    - Maximum splat radius in pixels. Each gaussian is sized from its scale and capped here; lower = finer/pointier, higher = chunkier.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
