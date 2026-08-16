# Documentation
- Class name: FluxSamplerParams+
- Category: essentials/sampling
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- guidance
    - The guidance input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_shift
    - The max_shift input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- base_shift
    - The base_shift input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- loras
    - The loras input is used by this node during execution.
    - Comfy dtype: LORA_PARAMS
    - Python dtype: object

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- params
    - The params output is produced by this node.
    - Comfy dtype: SAMPLER_PARAMS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
