# Documentation
- Class name: TripoImportModelNode
- Category: partner/3d/Tripo
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Import an external 3D model (e.g. from Rodin, Hunyuan3D or a local file) into Tripo to use it with Tripo's post-processing nodes: Texture, Rig, Convert. GLB is recommended: textures survive import only when embedded in the file. Note that texturing an imported model requires a texture prompt.

# Input types
## Required
- model_3d
    - 3D model to import (GLB / FBX / OBJ / STL, up to 150 MB). OBJ and STL files carry no embedded textures.
    - Comfy dtype: FILE_3D_GLB,FILE_3D_FBX,FILE_3D_OBJ,FILE_3D_STL,FILE_3D
    - Python dtype: object
## Hidden
- auth_token_comfy_org
    - The auth_token_comfy_org input is used by this node during execution.
    - Comfy dtype: AUTH_TOKEN_COMFY_ORG
    - Python dtype: object
- api_key_comfy_org
    - The api_key_comfy_org input is used by this node during execution.
    - Comfy dtype: API_KEY_COMFY_ORG
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- comfy_usage_source
    - The comfy_usage_source input is used by this node during execution.
    - Comfy dtype: COMFY_USAGE_SOURCE
    - Python dtype: object

# Output types
- model task_id
    - The model task_id output is produced by this node.
    - Comfy dtype: MODEL_TASK_ID
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
