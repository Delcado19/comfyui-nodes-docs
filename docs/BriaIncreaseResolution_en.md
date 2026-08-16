# Documentation
- Class name: BriaIncreaseResolution
- Category: partner/image/Bria
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Upscale an image by 2x or 4x using Bria, preserving the original content.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- desired_increase
    - Resolution multiplier. The output must fit within 8192 pixels on each side.
    - Comfy dtype: COMBO
    - Python dtype: object
- auto_downscale
    - Automatically lower the multiplier, and downscale the input image if that is still not enough, when the output would exceed the limit.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- moderation
    - Moderation settings
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
