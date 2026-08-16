# Documentation
- Class name: HeyGenTextToSpeechNode
- Category: partner/audio/HeyGen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate speech audio from text using HeyGen's Starfish TTS engine. Includes HeyGen's most popular voices across 17 languages.

# Input types
## Required
- text
    - Text to synthesize (up to 5000 characters). The generated speech must be at least 1 second long.
    - Comfy dtype: STRING
    - Python dtype: str
- voice
    - Voice to use (curated from HeyGen's most popular Starfish-compatible voices).
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- custom_voice_id
    - Optional HeyGen voice ID. When set, overrides the voice selected above. The voice must support the Starfish engine.
    - Comfy dtype: STRING
    - Python dtype: str
- speed
    - Speech speed multiplier.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ssml
    - Treat the text as SSML markup (for pauses, emphasis, and pronunciation control).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
- AUDIO
    - The AUDIO output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
