# Documentation
- Class name: LatentNoised
- Category: RES4LYF/noise
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

LatentNoised is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- add_noise
    - The add_noise input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_is_latent
    - The noise_is_latent input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_type
    - The noise_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- alpha
    - The alpha input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- k
    - The k input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_seed
    - The noise_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- noise_strength
    - The noise_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize
    - The normalize input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- latent_noise
    - The latent_noise input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- latent_noised
    - The latent_noised output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
