# Documentation
- Class name: Rodin3D_Sketch
- Category: partner/3d/Rodin
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate 3D Assets using Rodin API

# Input types
## Required
- Images
    - The Images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- Seed
    - The Seed input is used by this node during execution.
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
- 3D Model Path
    - The 3D Model Path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- GLB
    - The GLB output is produced by this node.
    - Comfy dtype: FILE_3D_GLB
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
