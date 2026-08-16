# Documentation
- Class name: FL_KsamplerSEG
- Category: 🏵️Fill Nodes/Ksamplers
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

FL KSampler SEG is a ComfyUI node registered by `custom_nodes.comfyui_fill-nodes`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- regions
    - The regions input is used by this node during execution.
    - Comfy dtype: SEG_REGIONS
    - Python dtype: object
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
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
- cascade_start_corner
    - The cascade_start_corner input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
