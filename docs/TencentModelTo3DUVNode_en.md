# Documentation
- Class name: TencentModelTo3DUVNode
- Category: partner/3d/Tencent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Perform UV unfolding on a 3D model to generate UV texture. Input model must have less than 30000 faces.

# Input types
## Required
- model_3d
    - Input 3D model (GLB, OBJ, or FBX)
    - Comfy dtype: FILE_3D_GLB,FILE_3D_OBJ,FILE_3D_FBX,FILE_3D
    - Python dtype: object
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
- OBJ
    - The OBJ output is produced by this node.
    - Comfy dtype: FILE_3D_OBJ
    - Python dtype: object
- FBX
    - The FBX output is produced by this node.
    - Comfy dtype: FILE_3D_FBX
    - Python dtype: object
- uv_image
    - The uv_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
