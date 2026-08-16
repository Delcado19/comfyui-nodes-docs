# Documentation
- Class name: ByteDanceImageToVideoNode
- Category: partner/video/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate video using ByteDance models via api based on image and prompt

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - The text prompt used to generate the video.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - First frame to be used for the video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution
    - The resolution of the output video.
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
## Optional
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- camera_fixed
    - Specifies whether to fix the camera. The platform appends an instruction to fix the camera to your prompt, but does not guarantee the actual effect.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- watermark
    - Whether to add an "AI generated" watermark to the video.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- generate_audio
    - This parameter is ignored for any model except seedance-1-5-pro.
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
