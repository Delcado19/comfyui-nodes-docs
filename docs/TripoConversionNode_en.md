# Documentation
- Class name: TripoConversionNode
- Category: partner/3d/Tripo
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Tripo: Convert model is a ComfyUI node registered by `comfy_api_nodes.nodes_tripo`. The live metadata did not provide a longer description.

# Input types
## Required
- original_model_task_id
    - The original_model_task_id input is used by this node during execution.
    - Comfy dtype: MODEL_TASK_ID,RIG_TASK_ID,RETARGET_TASK_ID
    - Python dtype: object
- format
    - The format input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- quad
    - The quad input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- face_limit
    - The face_limit input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- texture_size
    - The texture_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- texture_format
    - The texture_format input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- force_symmetry
    - The force_symmetry input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- flatten_bottom
    - The flatten_bottom input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- flatten_bottom_threshold
    - The flatten_bottom_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pivot_to_center_bottom
    - The pivot_to_center_bottom input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- scale_factor
    - The scale_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- with_animation
    - The with_animation input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pack_uv
    - The pack_uv input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bake
    - The bake input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- part_names
    - The part_names input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fbx_preset
    - The fbx_preset input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- export_vertex_colors
    - The export_vertex_colors input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- export_orientation
    - The export_orientation input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- animate_in_place
    - The animate_in_place input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
