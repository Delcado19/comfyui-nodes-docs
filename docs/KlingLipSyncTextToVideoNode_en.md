# Documentation
- Class name: KlingLipSyncTextToVideoNode
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Kling Lip Sync Text to Video Node. Syncs mouth movements in a video file to a text prompt. The video file should not be larger than 100MB, should have height/width between 720px and 1920px, and should be between 2s and 10s in length.

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: VIDEO
    - Python dtype: object
- text
    - Text Content for Lip-Sync Video Generation. Required when mode is text2video. Maximum length is 120 characters.
    - Comfy dtype: STRING
    - Python dtype: str
- voice
    - The voice input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- voice_speed
    - Speech Rate. Valid range: 0.8~2.0, accurate to one decimal place.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
