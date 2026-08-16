# Documentation
- Class name: KlingTextToVideoNode
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Kling Text to Video Node

# Input types
## Required
- prompt
    - Positive text prompt
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Negative text prompt
    - Comfy dtype: STRING
    - Python dtype: str
- cfg_scale
    - The cfg_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- mode
    - The configuration to use for the video generation following the format: mode / duration / model_name.
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

# Output types
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object
- video_id
    - The video_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- duration
    - The duration output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
