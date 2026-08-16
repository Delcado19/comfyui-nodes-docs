# Documentation
- Class name: Tencent3DTextureEditNode
- Category: partner/3d/Tencent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

After inputting the 3D model, perform 3D model texture redrawing.

# Input types
## Required
- model_3d
    - 3D model in FBX format. Model should have less than 100000 faces.
    - Comfy dtype: FILE_3D_FBX,FILE_3D
    - Python dtype: object
- prompt
    - Describes texture editing. Supports up to 1024 UTF-8 characters.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
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
- GLB
    - The GLB output is produced by this node.
    - Comfy dtype: FILE_3D_GLB
    - Python dtype: object
- OBJ
    - The OBJ output is produced by this node.
    - Comfy dtype: FILE_3D_OBJ
    - Python dtype: object
- texture_image
    - The texture_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
