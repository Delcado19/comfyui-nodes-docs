# Documentation
- Class name: SoniloVideoToMusic
- Category: partner/audio/Sonilo
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate music from video content using Sonilo's AI model. Analyzes the video and creates matching music.

# Input types
## Required
- video
    - Input video to generate music from. Maximum duration: 6 minutes.
    - Comfy dtype: VIDEO
    - Python dtype: object
- prompt
    - Optional text prompt to guide music generation. Leave empty for best quality - the model will fully analyze the video content.
    - Comfy dtype: STRING
    - Python dtype: str
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
