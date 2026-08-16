# Documentation
- Class name: NABLA_AttentionKJ
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Experimental node for patching attention mode to use NABLA sparse attention for video models, currently only works with Kadinsky5

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent
    - Only used to get the latent shape
    - Comfy dtype: LATENT
    - Python dtype: dict
- window_time
    - Temporal attention window size
    - Comfy dtype: INT
    - Python dtype: int
- window_width
    - Spatial attention window size
    - Comfy dtype: INT
    - Python dtype: int
- window_height
    - Spatial attention window size
    - Comfy dtype: INT
    - Python dtype: int
- sparsity
    - The sparsity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- torch_compile
    - Most likely required for reasonable memory usage
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
