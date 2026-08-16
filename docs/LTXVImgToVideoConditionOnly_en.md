# Documentation
- Class name: LTXVImgToVideoConditionOnly
- Category: conditioning/video_models
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Applies image conditioning to the first frames of an existing latent. Creates a noise mask to control conditioning strength.

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
## Optional
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
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
