# Documentation
- Class name: Save3DAdvanced
- Category: 3d
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Save 3D (Advanced) is a ComfyUI node registered by `comfy_extras.nodes_save_3d`. The live metadata did not provide a longer description.

# Input types
## Required
- model_3d
    - 3D model file from an upstream 3D node.
    - Comfy dtype: FILE_3D_GLB,FILE_3D_GLTF,FILE_3D_FBX,FILE_3D_OBJ,FILE_3D_STL,FILE_3D_USDZ,FILE_3D
    - Python dtype: object
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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
    - Comfy dtype: FILE_3D
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
