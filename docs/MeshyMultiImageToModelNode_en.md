# Documentation
- Class name: MeshyMultiImageToModelNode
- Category: partner/3d/Meshy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Meshy: Multi-Image to Model is a ComfyUI node registered by `comfy_api_nodes.nodes_meshy`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- images
    - The images input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- should_remesh
    - When set to false, returns an unprocessed triangular mesh.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- symmetry_mode
    - The symmetry_mode input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- should_texture
    - Determines whether textures are generated. Setting it to false skips the texture phase and returns a mesh without textures.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- pose_mode
    - Specify the pose mode for the generated model.
    - Comfy dtype: COMBO
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
