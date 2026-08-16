# Documentation
- Class name: MeshyAnimateModelNode
- Category: partner/3d/Meshy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Apply a specific animation action to a previously rigged character.

# Input types
## Required
- rig_task_id
    - The rig_task_id input is used by this node during execution.
    - Comfy dtype: MESHY_RIGGED_TASK_ID
    - Python dtype: object
- action_id
    - Visit https://docs.meshy.ai/en/api/animation-library for a list of available values.
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
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- model_file
    - The model_file output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- GLB
    - The GLB output is produced by this node.
    - Comfy dtype: FILE_3D_GLB
    - Python dtype: object
- FBX
    - The FBX output is produced by this node.
    - Comfy dtype: FILE_3D_FBX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
