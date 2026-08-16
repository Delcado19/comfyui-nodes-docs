# Documentation
- Class name: File3DToSplat
- Category: 3d/splat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Parse a splat File3D into a gaussian splat. Inverse of Create 3D File (from Splat). Supported format:  PLY, SPLAT, KSPLAT, SPZ. PLY carries full spherical harmonics, the other formats are base color only. Format is auto-detected from the file contents.

# Input types
## Required
- model_3d
    - A gaussian splat 3D file
    - Comfy dtype: FILE_3D,FILE_3D_SPLAT_ANY,FILE_3D_PLY,FILE_3D_SPLAT,FILE_3D_KSPLAT,FILE_3D_SPZ
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
