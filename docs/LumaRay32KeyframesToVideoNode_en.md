# Documentation
- Class name: LumaRay32KeyframesToVideoNode
- Category: partner/video/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a video that interpolates through a sequence of guide images, each anchored to a position on the timeline, using Luma Ray 3.2. Build the sequence with Luma Ray 3.2 Keyframe nodes (at least 2).

# Input types
## Required
- prompt
    - Text prompt for the video generation.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed to determine if node should re-run; results are nondeterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
- keyframes
    - Keyframe sequence from Luma Ray 3.2 Keyframe nodes (at least 2).
    - Comfy dtype: LUMA_RAY32_KEYFRAME
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
