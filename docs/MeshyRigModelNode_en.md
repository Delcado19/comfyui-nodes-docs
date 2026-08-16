# Documentation
- Class name: MeshyRigModelNode
- Category: partner/3d/Meshy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Provides a rigged character in standard formats. Auto-rigging is currently not suitable for untextured meshes, non-humanoid assets, or humanoid assets with unclear limb and body structure.

# Input types
## Required
- meshy_task_id
    - The meshy_task_id input is used by this node during execution.
    - Comfy dtype: MESHY_TASK_ID
    - Python dtype: object
- height_meters
    - The approximate height of the character model in meters. This aids in scaling and rigging accuracy.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- texture_image
    - The model's UV-unwrapped base color texture image.
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
- rig_task_id
    - The rig_task_id output is produced by this node.
    - Comfy dtype: MESHY_RIGGED_TASK_ID
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
