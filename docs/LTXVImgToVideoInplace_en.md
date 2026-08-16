# Documentation
- Class name: LTXVImgToVideoInplace
- Category: model/conditioning/ltxv
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LTXVImgToVideoInplace is a ComfyUI node registered by `comfy_extras.nodes_lt`. The live metadata did not provide a longer description.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bypass
    - Bypass the conditioning.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
