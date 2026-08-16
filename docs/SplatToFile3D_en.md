# Documentation
- Class name: SplatToFile3D
- Category: 3d/splat
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Serialize a gaussian splat to a File3D object for Save / Preview 3D nodes. Supports one item per batch only.

# Input types
## Required
- splat
    - The splat input is used by this node during execution.
    - Comfy dtype: SPLAT
    - Python dtype: object
- format
    - ply: standard 3D Gaussian Splat with full spherical harmonics. ksplat: mkkellogg SplatBuffer (level 0, uncompressed), base color only spz: Niantic gzip-compressed (~10x smaller), base color only
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- model_3d
    - The model_3d output is produced by this node.
    - Comfy dtype: FILE_3D_SPLAT_ANY
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
