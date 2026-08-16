# Documentation
- Class name: RecraftCreateStyleNode
- Category: partner/image/Recraft
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create a custom style from reference images. Upload 1-5 images to use as style references. Total size of all images is limited to 5 MB.

# Input types
## Required
- style
    - The base style of the generated images.
    - Comfy dtype: COMBO
    - Python dtype: object
- images
    - The images input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
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

# Output types
- style_id
    - The style_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
