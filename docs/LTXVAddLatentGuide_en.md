# Documentation
- Class name: LTXVAddLatentGuide
- Category: ltxtricks
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Adds a keyframe or a video segment at a specific frame index.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guiding_latent
    - The guiding_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_idx
    - Latent index to start the conditioning at. Can be negative toindicate that the conditioning is on the frames before the latent.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
