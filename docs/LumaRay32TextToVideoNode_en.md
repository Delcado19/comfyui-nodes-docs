# Documentation
- Class name: LumaRay32TextToVideoNode
- Category: partner/video/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a video from a text prompt using Luma's Ray 3.2 model.

# Input types
## Required
- prompt
    - Text prompt for the video generation.
    - Comfy dtype: STRING
    - Python dtype: str
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- loop
    - Make the video loop seamlessly. Only available with 5s duration.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Seed to determine if node should re-run; results are nondeterministic regardless of seed.
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
- generation_id
    - The generation_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
