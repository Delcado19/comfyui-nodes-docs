# Documentation
- Class name: PreviewGaussianSplat
- Category: 3d
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Preview a gaussian splat 3D file without saving it to the ComfyUI output directory.

# Input types
## Required
- model_3d
    - A gaussian splat 3D file.
    - Comfy dtype: FILE_3D_SPLAT_ANY,FILE_3D_PLY,FILE_3D_SPLAT,FILE_3D_SPZ,FILE_3D_KSPLAT
    - Python dtype: object
- viewport_state
    - The viewport_state input is used by this node during execution.
    - Comfy dtype: LOAD_3D
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model_3d_info
    - The model_3d_info input is used by this node during execution.
    - Comfy dtype: LOAD3D_MODEL_INFO
    - Python dtype: object
- camera_info
    - The camera_info input is used by this node during execution.
    - Comfy dtype: LOAD3D_CAMERA
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- model_3d
    - The model_3d output is produced by this node.
    - Comfy dtype: FILE_3D_SPLAT_ANY
    - Python dtype: object
- model_3d_info
    - The model_3d_info output is produced by this node.
    - Comfy dtype: LOAD3D_MODEL_INFO
    - Python dtype: object
- camera_info
    - The camera_info output is produced by this node.
    - Comfy dtype: LOAD3D_CAMERA
    - Python dtype: object
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
