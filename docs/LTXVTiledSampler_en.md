# Documentation
- Class name: LTXVTiledSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Tiled Sampler is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- noise
    - The noise input is used by this node during execution.
    - Comfy dtype: NOISE
    - Python dtype: object
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- guider
    - The guider input is used by this node during execution.
    - Comfy dtype: GUIDER
    - Python dtype: object
- latents
    - The latents input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- horizontal_tiles
    - The horizontal_tiles input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- vertical_tiles
    - The vertical_tiles input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- latents_cond_strength
    - The latents_cond_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- boost_latent_similarity
    - The boost_latent_similarity input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop
    - The crop input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- optional_cond_images
    - The optional_cond_images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_cond_indices
    - The optional_cond_indices input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- images_cond_strengths
    - The images_cond_strengths input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_output
    - The denoised_output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
