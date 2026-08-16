# Documentation
- Class name: KlingVideoNode
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate videos with Kling V3. Supports text-to-video and image-to-video with optional storyboard multi-prompt and audio generation.

# Input types
## Required
- multi_shot
    - Generate a series of video segments with individual prompts and durations.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- generate_audio
    - 'kling-3.0-turbo' always generates native audio, so the audio toggle is ignored.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model
    - Model and generation settings.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- start_frame
    - Optional start frame image. When connected, switches to image-to-video mode.
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
