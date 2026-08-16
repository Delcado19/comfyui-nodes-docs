# Documentation
- Class name: Preview3D
- Category: 3d
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Preview a 3D model file without saving it to the ComfyUI output directory.

# Input types
## Required
- model_file
    - 3D model file or path string
    - Comfy dtype: STRING,FILE_3D_GLB,FILE_3D_GLTF,FILE_3D_FBX,FILE_3D_OBJ,FILE_3D_STL,FILE_3D_USDZ,FILE_3D
    - Python dtype: object
## Optional
- camera_info
    - The camera_info input is used by this node during execution.
    - Comfy dtype: LOAD3D_CAMERA
    - Python dtype: object
- bg_image
    - The bg_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
