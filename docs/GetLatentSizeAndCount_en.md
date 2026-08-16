# Documentation
- Class name: GetLatentSizeAndCount
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Returns latent tensor dimensions,  
and passes the latent through unchanged.

# Input types
## Required
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- batch_size
    - The batch_size output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- channels
    - The channels output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- frames
    - The frames output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
