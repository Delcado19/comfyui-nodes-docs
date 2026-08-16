# Documentation
- Class name: SoniloTextToMusic
- Category: partner/audio/Sonilo
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate music from a text prompt using Sonilo's AI model.

# Input types
## Required
- prompt
    - Text prompt describing the music to generate.
    - Comfy dtype: STRING
    - Python dtype: str
- duration
    - Target duration in seconds. Maximum: 6 minutes.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed for reproducibility. Currently ignored by the Sonilo service but kept for graph consistency.
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
