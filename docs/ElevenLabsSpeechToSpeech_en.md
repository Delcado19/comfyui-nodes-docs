# Documentation
- Class name: ElevenLabsSpeechToSpeech
- Category: partner/audio/ElevenLabs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Transform speech from one voice to another while preserving the original content and emotion.

# Input types
## Required
- voice
    - Target voice for the transformation. Connect from Voice Selector or Instant Voice Clone.
    - Comfy dtype: ELEVENLABS_VOICE
    - Python dtype: object
- audio
    - Source audio to transform.
    - Comfy dtype: AUDIO
    - Python dtype: object
- stability
    - Voice stability. Lower values give broader emotional range, higher values produce more consistent but potentially monotonous speech.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model
    - Model to use for speech-to-speech transformation.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- output_format
    - Audio output format.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed for reproducibility.
    - Comfy dtype: INT
    - Python dtype: int
- remove_background_noise
    - Remove background noise from input audio using audio isolation.
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
- AUDIO
    - The AUDIO output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
