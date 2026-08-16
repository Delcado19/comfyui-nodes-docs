# Documentation
- Class name: EmptyLatentImageCustomPresets
- Category: KJNodes/latents
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Generates an empty latent image with the specified dimensions.  
The choices are loaded from 'custom_dimensions.json' in the nodes folder.

# Input types
## Required
- dimensions
    - The dimensions input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert
    - The invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Latent
    - The Latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- Width
    - The Width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- Height
    - The Height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
