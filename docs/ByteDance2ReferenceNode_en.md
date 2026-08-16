# Documentation
- Class name: ByteDance2ReferenceNode
- Category: partner/video/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate, edit, or extend video using Seedance 2.5 or 2.0 with reference images, videos, and audio. Supports multimodal reference, video editing, and video extension.

# Input types
## Required
- model
    - Seedance 2.5 for the newest model, videos up to 30 seconds and mp4/mov output; Seedance 2.0 for maximum quality and 1080p/4k; Fast for speed optimization; Mini for the fastest, lowest-cost generation.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
- watermark
    - Whether to add a watermark to the video.
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
