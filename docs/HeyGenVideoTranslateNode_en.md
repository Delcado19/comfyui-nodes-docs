# Documentation
- Class name: HeyGenVideoTranslateNode
- Category: partner/video/HeyGen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Translate a spoken video into another language. Clones the original speaker's voice and re-animates the mouth to match the translated speech.

# Input types
## Required
- video
    - Video with speech to translate.
    - Comfy dtype: VIDEO
    - Python dtype: object
- output_language
    - Target language for the translated video.
    - Comfy dtype: COMBO
    - Python dtype: object
- mode
    - 'speed' is faster; 'precision' produces higher-quality lip sync at twice the price.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- translate_audio_only
    - Only swap the audio track, keeping the original mouth movements (no lip sync).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- speaker_count
    - Number of speakers in the video. 0 = detect automatically.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Not sent to HeyGen; change it to force a re-run.
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
