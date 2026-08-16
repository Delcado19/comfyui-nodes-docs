# Documentation
- Class name: TripoTextToModelNode
- Category: partner/3d/Tripo
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Tripo: Text to Model is a ComfyUI node registered by `comfy_api_nodes.nodes_tripo`. The live metadata did not provide a longer description.

# Input types
## Required
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- negative_prompt
    - The negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model_version
    - The model_version input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- style
    - The style input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- texture
    - The texture input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pbr
    - The pbr input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- image_seed
    - The image_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- model_seed
    - The model_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- texture_seed
    - The texture_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- texture_quality
    - The texture_quality input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- face_limit
    - The face_limit input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- quad
    - The quad input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- geometry_quality
    - The geometry_quality input is used by this node during execution.
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
- model task_id
    - The model task_id output is produced by this node.
    - Comfy dtype: MODEL_TASK_ID
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
