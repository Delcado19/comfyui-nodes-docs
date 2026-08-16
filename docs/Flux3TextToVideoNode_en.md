# Documentation
- Class name: Flux3TextToVideoNode
- Category: partner/video/BFL
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates a video with synchronized audio from a text prompt via FLUX 3.

# Input types
## Required
- prompt
    - What you want, in plain language; the prompt is interpreted and expanded before generation. Describe ambient sound, music and speech separately for layered audio.
    - Comfy dtype: STRING
    - Python dtype: str
- aspect_ratio
    - Output aspect ratio. 'auto' picks one from the prompt and inputs.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - Clip length in seconds. 'auto' fits the length to the content.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - Output resolution.
    - Comfy dtype: COMBO
    - Python dtype: object
- generate_audio
    - Generate synchronized audio (ambient, speech, effects). Off produces a video with no audio track.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- safety_tolerance
    - Moderation tolerance, 0 is the strictest. Requests that send images or video are capped at 2 whatever you set here.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to determine if node should re-run; FLUX 3 picks its own seed, so actual results are nondeterministic regardless of this value.
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
