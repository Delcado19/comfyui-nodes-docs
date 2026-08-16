# Documentation
- Class name: GrokVideoNode
- Category: partner/video/Grok
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate video from a prompt or an image

# Input types
## Required
- model
    - The model to use for video generation.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - Text description of the desired video. Optional for grok-imagine-video-1.5 when an input image is provided.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution of the output video. 1080p is only available for grok-imagine-video-1.5.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - The aspect ratio of the output video.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - The duration of the output video in seconds.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to determine if node should re-run; actual results are nondeterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - Optional starting image. If omitted, the video is generated from the text prompt alone.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
