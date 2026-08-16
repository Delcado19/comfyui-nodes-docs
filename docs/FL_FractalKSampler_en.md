# Documentation
- Class name: FL_FractalKSampler
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

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
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_factor
    - The scale_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_factor
    - The blend_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fractal_levels
    - The fractal_levels input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
