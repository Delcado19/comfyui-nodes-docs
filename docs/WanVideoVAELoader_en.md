# Documentation
- Class name: WanVideoVAELoader
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Loads Wan VAE model from 'ComfyUI/models/vae'

# Input types
## Required
- model_name
    - These models are loaded from 'ComfyUI/models/vae'
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- precision
    - The precision input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- compile_args
    - The compile_args input is used by this node during execution.
    - Comfy dtype: WANCOMPILEARGS
    - Python dtype: object
- use_cpu_cache
    - Reduces VRAM usage, but slows the VAE down a lot
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- verbose
    - Enables memory usage logging when using the model
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- vae
    - The vae output is produced by this node.
    - Comfy dtype: WANVAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
