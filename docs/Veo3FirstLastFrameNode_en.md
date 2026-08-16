# Documentation
- Class name: Veo3FirstLastFrameNode
- Category: partner/video/Veo
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate video using prompt and first and last frames.

# Input types
## Required
- prompt
    - Text description of the video
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Negative text prompt to guide what to avoid in the video
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - Aspect ratio of the output video
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - Duration of the output video in seconds
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed for video generation
    - Comfy dtype: INT
    - Python dtype: int
- first_frame
    - Start frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- last_frame
    - End frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- generate_audio
    - Generate audio for the video.
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
