# Documentation
- Class name: TripoRetargetNode
- Category: partner/3d/Tripo
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Tripo: Retarget rigged model is a ComfyUI node registered by `comfy_api_nodes.nodes_tripo`. The live metadata did not provide a longer description.

# Input types
## Required
- original_model_task_id
    - The original_model_task_id input is used by this node during execution.
    - Comfy dtype: RIG_TASK_ID
    - Python dtype: object
- animation
    - The animation input is used by this node during execution.
    - Comfy dtype: COMBO
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
- retarget task_id
    - The retarget task_id output is produced by this node.
    - Comfy dtype: RETARGET_TASK_ID
    - Python dtype: object
- GLB
    - The GLB output is produced by this node.
    - Comfy dtype: FILE_3D_GLB
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
