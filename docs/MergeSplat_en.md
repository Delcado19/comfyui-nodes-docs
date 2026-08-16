# Documentation
- Class name: MergeSplat
- Category: 3d/splat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Concatenate any number of gaussian splats into one. Unioning several decodes of the same latent at different seeds densifies the surface, this can improve surface quality when meshing.

# Input types
## Required
- splats
    - The splats input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object

# Output types
- splat
    - The splat output is produced by this node.
    - Comfy dtype: SPLAT
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
