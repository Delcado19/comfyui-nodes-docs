# Documentation
- Class name: LTXVNormalizingSampler
- Category: utility
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Normalizing Sampler is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- noise
    - The noise input is used by this node during execution.
    - Comfy dtype: NOISE
    - Python dtype: object
- guider
    - The guider input is used by this node during execution.
    - Comfy dtype: GUIDER
    - Python dtype: object
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
- video_normalization_factors
    - The video_normalization_factors input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- audio_normalization_factors
    - The audio_normalization_factors input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- denoised_output
    - The denoised_output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
