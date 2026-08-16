# Documentation
- Class name: ElevenLabsTextToSpeech
- Category: partner/audio/ElevenLabs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Convert text to speech.

# Input types
## Required
- voice
    - Voice to use for speech synthesis. Connect from Voice Selector or Instant Voice Clone.
    - Comfy dtype: ELEVENLABS_VOICE
    - Python dtype: object
- text
    - The text to convert to speech.
    - Comfy dtype: STRING
    - Python dtype: str
- stability
    - Voice stability. Lower values give broader emotional range, higher values produce more consistent but potentially monotonous speech.
    - Comfy dtype: FLOAT
    - Python dtype: float
- apply_text_normalization
    - Text normalization mode. 'auto' lets the system decide, 'on' always applies normalization, 'off' skips it.
    - Comfy dtype: COMBO
    - Python dtype: object
- model
    - Model to use for text-to-speech.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- language_code
    - ISO-639-1 or ISO-639-3 language code (e.g., 'en', 'es', 'fra'). Leave empty for automatic detection.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed for reproducibility (determinism not guaranteed).
    - Comfy dtype: INT
    - Python dtype: int
- output_format
    - Audio output format.
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
- AUDIO
    - The AUDIO output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
