# Documentation
- Class name: LTXVStatNormLatent
- Category: Lightricks/latents
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Stat Norm Latent is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- latents
    - The latents input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- target_mean
    - The target_mean input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_std
    - The target_std input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- percentile
    - Percentile of distribution to use for statistics calculation
    - Comfy dtype: FLOAT
    - Python dtype: float
- factor
    - The factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_outliers
    - The clip_outliers input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
