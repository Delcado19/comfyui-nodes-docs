# Documentation
- Class name: ViduStartEndToVideoNode
- Category: partner/video/Vidu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a video from start and end frames and a prompt

# Input types
## Required
- model
    - Model name
    - Comfy dtype: COMBO
    - Python dtype: object
- first_frame
    - Start frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_frame
    - End frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- prompt
    - A textual description for video generation
    - Comfy dtype: STRING
    - Python dtype: str
- duration
    - Duration of the output video in seconds
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed for video generation (0 for random)
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Supported values may vary by model & duration
    - Comfy dtype: COMBO
    - Python dtype: object
- movement_amplitude
    - The movement amplitude of objects in the frame
    - Comfy dtype: COMBO
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
