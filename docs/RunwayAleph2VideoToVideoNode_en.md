# Documentation
- Class name: RunwayAleph2VideoToVideoNode
- Category: partner/video/Runway
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Edit a video with a text prompt using Runway's Aleph2 model. Aleph2 transforms your footage (restyle, relight, add or remove elements, change the viewpoint) while keeping the original motion and timing; the output resolution matches the input video, which must be 2-30 seconds at 30 fps or lower. Optionally steer the edit with either keyframes (anchored to the input video) or prompt images (anchored to the output video) - use one or the other, not both.

# Input types
## Required
- prompt
    - Describes what should appear in the output (1-1000 characters).
    - Comfy dtype: STRING
    - Python dtype: str
- video
    - Input video to edit. Must be 2-30 seconds at 30 fps or lower.
    - Comfy dtype: VIDEO
    - Python dtype: object
- seed
    - Random seed for generation
    - Comfy dtype: INT
    - Python dtype: int
- public_figure_threshold
    - Content moderation for recognizable public figures.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- keyframes
    - Guidance images anchored to the input video, from Aleph2 Keyframe nodes (up to 5). Use keyframes or prompt images, not both.
    - Comfy dtype: RUNWAY_ALEPH2_KEYFRAME
    - Python dtype: object
- prompt_images
    - Guidance images anchored to the output video, from Aleph2 Prompt Image nodes (up to 5). Use keyframes or prompt images, not both.
    - Comfy dtype: RUNWAY_ALEPH2_PROMPT_IMAGE
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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
