# Documentation
- Class name: ByteDanceSeedAudio
- Category: partner/audio/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate speech, music, sound effects and multi-speaker dialogue from a single prompt with ByteDance Seed Audio 1.0. Describe the voice(s), emotion, ambience, background music and sound effects in the prompt, and include the lines to speak. Optionally pick a built-in preset voice, clone voices from up to 3 reference clips (tagged @Audio1-3 in the prompt), or derive a voice from a character image. Up to 2 minutes of audio per run. The multilingual model supports 20 languages and timestamp-based timing control.

# Input types
## Required
- text_prompt
    - Describe the voice(s), emotion, pacing, ambience, background music and sound effects, and include the lines to speak (name characters inline for dialogue). In 'audio reference' mode, refer to connected clips by order as @Audio1, @Audio2, @Audio3. With the multilingual model, a quoted line can start with a timestamp range that controls when and how long it is spoken, e.g. "[5.5s:8.0s] Wait for me!". Write the prompt in the same language as the lines to speak. Maximum 3000 characters.
    - Comfy dtype: STRING
    - Python dtype: str
- reference_mode
    - How to condition the voice: 'text only' (describe everything in the prompt), 'audio reference' (clone up to 3 voices, tagged @Audio1-3), 'image reference' (derive a voice from one character image), or 'preset voice' (pick a built-in named voice that reads the prompt).
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- sample_rate
    - Output sample rate in Hz.
    - Comfy dtype: COMBO
    - Python dtype: object
- speech_rate
    - Speaking speed. 0 = normal, 100 = 2.0x, -50 = 0.5x.
    - Comfy dtype: INT
    - Python dtype: int
- loudness_rate
    - Loudness. 0 = normal, 100 = 2.0x, -50 = 0.5x.
    - Comfy dtype: INT
    - Python dtype: int
- pitch_rate
    - Pitch shift in semitones (-12 to 12).
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model
    - seed-audio-1.0-multilingual: 20 languages (English, Chinese, Japanese, Korean, Mexican & Castilian Spanish, Indonesian, German, Brazilian Portuguese, French, Thai, Vietnamese, Malay, Filipino, Italian, Russian, Dutch, Polish, Turkish, Swedish) plus per-sentence timing control via "[5.5s:8.0s] ..." timestamps. seed-audio-1.0: English and Chinese only, no timing control.
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
