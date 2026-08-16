# Documentation
- Class name: PixverseTransitionVideoNode
- Category: partner/video/PixVerse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates videos based on prompt and output_size.

# Input types
## Required
- first_frame
    - The first_frame input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- last_frame
    - The last_frame input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Prompt for the video generation
    - Comfy dtype: STRING
    - Python dtype: str
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration_seconds
    - The duration_seconds input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- motion_mode
    - The motion_mode input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed for video generation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- negative_prompt
    - An optional text description of undesired elements on an image.
    - Comfy dtype: STRING
    - Python dtype: str
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
