# Documentation
- Class name: UltraSharkSampler Tiled
- Category: RES4LYF/legacy/samplers/ultracascade
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

For use with UltraCascade.

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
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_type
    - The guide_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- guide_weight
    - The guide_weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_width
    - The tile_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tiling_strategy
    - The tiling_strategy input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_tile_batch_size
    - The max_tile_batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- clip_name
    - The clip_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_augment
    - The noise_augment input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- latent_noise
    - The latent_noise input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide
    - The guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_weights
    - The guide_weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- image_cv
    - The image_cv input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
