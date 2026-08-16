# Documentation
- Class name: TripoP1ImageToModelNode
- Category: partner/3d/Tripo
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Tripo P1 image-to-3D. Optimized for low-poly, game-ready meshes.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_mode
    - "Geometry only" returns an untextured mesh. "Textured" adds color/PBR maps.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- enable_image_autofix
    - Pre-process the input image for better generation quality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- face_limit
    - Target face count, 48-20000. -1 lets Tripo pick adaptively.
    - Comfy dtype: INT
    - Python dtype: int
- model_seed
    - The model_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- auto_size
    - Scale the output to approximate real-world meters.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- export_uv
    - UV unwrap during generation. Turn off for faster geometry-only runs.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- compress_geometry
    - Apply geometry-based compression. Decompress before editing.
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
