# Documentation
- Class name: ElevenLabsInstantVoiceClone
- Category: partner/audio/ElevenLabs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create a cloned voice from audio samples. Provide 1-8 audio recordings of the voice to clone.

# Input types
## Required
- files
    - Audio recordings for voice cloning.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- remove_background_noise
    - Remove background noise from voice samples using audio isolation.
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
- voice
    - The voice output is produced by this node.
    - Comfy dtype: ELEVENLABS_VOICE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
