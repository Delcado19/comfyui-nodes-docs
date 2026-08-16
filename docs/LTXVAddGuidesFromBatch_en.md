# Documentation
- Class name: LTXVAddGuidesFromBatch
- Category: conditioning/ltxv
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Adds multiple guide images from a batch to the latent at corresponding frame indices. Non-black images in the batch are used as guides.

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- images
    - Batch of images - non-black images will be used as guides
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Strength for all guides.
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
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
