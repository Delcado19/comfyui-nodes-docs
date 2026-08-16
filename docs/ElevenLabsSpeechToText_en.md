# Documentation
- Class name: ElevenLabsSpeechToText
- Category: partner/audio/ElevenLabs
- Output node: False
- Repo Ref: https://github.com/karthikg-09/Elevenlabs-ComfyUI

Transcribe audio to text. Supports automatic language detection, speaker diarization, and audio event tagging.

# Input types
## Required
- audio
    - Audio to transcribe.
    - Comfy dtype: AUDIO
    - Python dtype: object
- model
    - Model to use for transcription.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- language_code
    - ISO-639-1 or ISO-639-3 language code (e.g., 'en', 'es', 'fra'). Leave empty for automatic detection.
    - Comfy dtype: STRING
    - Python dtype: str
- num_speakers
    - Maximum number of speakers to predict. Set to 0 for automatic detection.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed for reproducibility (determinism not guaranteed).
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
- text
    - The text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- language_code
    - The language_code output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- words_json
    - The words_json output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/karthikg-09/Elevenlabs-ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
