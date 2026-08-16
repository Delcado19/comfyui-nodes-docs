# Documentation
- Class name: MeshyRefineNode
- Category: partner/3d/Meshy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Refine a previously created draft model.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- meshy_task_id
    - The meshy_task_id input is used by this node during execution.
    - Comfy dtype: MESHY_TASK_ID
    - Python dtype: object
- enable_pbr
    - Generate PBR Maps (metallic, roughness, normal) in addition to the base color. Note: this should be set to false when using Sculpture style, as Sculpture style generates its own set of PBR maps.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- texture_prompt
    - Provide a text prompt to guide the texturing process. Maximum 600 characters. Cannot be used at the same time as 'texture_image'.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- texture_image
    - Only one of 'texture_image' or 'texture_prompt' may be used at the same time.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
- meshy_task_id
    - The meshy_task_id output is produced by this node.
    - Comfy dtype: MESHY_TASK_ID
    - Python dtype: object
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
