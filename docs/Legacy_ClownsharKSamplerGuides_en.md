# Documentation
- Class name: Legacy_ClownsharKSamplerGuides
- Category: RES4LYF/legacy/samplers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy_ClownsharKSamplerGuides is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- guide_mode
    - The mode used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- latent_guide_weight
    - The latent_guide_weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rescale_floor
    - If true, latent_guide_weight(s) primarily affect the masked areas. If false, they control the unmasked areas.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- latent_guide
    - The latent_guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_guide_inv
    - The latent_guide_inv input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- latent_guide_mask
    - The latent_guide_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- latent_guide_weights
    - The latent_guide_weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- GUIDES
    - The GUIDES output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
