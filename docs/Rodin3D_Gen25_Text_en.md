# Documentation
- Class name: Rodin3D_Gen25_Text
- Category: partner/3d/Rodin
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a 3D model from a text prompt via Rodin Gen-2.5. Pick a mode (Fast / Regular / Extreme-High) to tune quality vs. cost.

# Input types
## Required
- prompt
    - Text prompt for the 3D model.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - Generation mode. Regular = balanced. Fast = 1K-20K faces for rapid prototyping. Extreme-High = 20K-2M faces with optional micro details.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- material
    - The material input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- geometry_file_format
    - The geometry_file_format input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- texture_mode
    - Texture quality preset. 'Default' uses the server's default for the selected tier.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- TAPose
    - T/A pose for human-like models.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- hd_texture
    - High-quality texture enhancement.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- texture_delight
    - Remove baked lighting from textures.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- addon_highpack
    - HighPack addon: 4K textures and ~16x faces in Quad mode.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bbox_width
    - Bounding-box width (Y axis). Set to 0 with the others to skip bbox.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - Bounding-box height (Z axis).
    - Comfy dtype: INT
    - Python dtype: int
- bbox_length
    - Bounding-box length (X axis).
    - Comfy dtype: INT
    - Python dtype: int
- height_cm
    - Approximate model height in centimeters (0 to skip).
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
- model_file
    - The model_file output is produced by this node.
    - Comfy dtype: FILE_3D
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
