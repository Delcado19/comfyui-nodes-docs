# Documentation
- Class name: MoGeRender
- Category: image/geometry estimation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Render a depth map or normal map from geometry data

# Input types
## Required
- moge_geometry
    - The moge_geometry input is used by this node during execution.
    - Comfy dtype: MOGE_GEOMETRY
    - Python dtype: object
- output
    - DirectX vs OpenGL controls the normal-map green-channel convention. DirectX: green = -Y down (Unreal). OpenGL: green = +Y up (Blender, Substance, Unity, glTF).
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
