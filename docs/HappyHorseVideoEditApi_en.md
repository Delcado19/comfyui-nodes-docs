# Documentation
- Class name: HappyHorseVideoEditApi
- Category: partner/video/Wan
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Edit a video using text instructions or reference images with the HappyHorse model. Output duration is 3-15s and matches the input video; inputs longer than 15s are truncated.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- video
    - The video to edit.
    - Comfy dtype: VIDEO
    - Python dtype: object
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- watermark
    - Whether to add an AI-generated watermark to the result.
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
