# Documentation
- Class name: MagnificImageRelightNode
- Category: partner/image/Magnific
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Relight an image with lighting adjustments and optional reference-based light transfer.

# Input types
## Required
- image
    - The image to relight.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Descriptive guidance for lighting. Supports emphasis notation (1-1.4).
    - Comfy dtype: STRING
    - Python dtype: str
- light_transfer_strength
    - Intensity of light transfer application.
    - Comfy dtype: INT
    - Python dtype: int
- style
    - Stylistic output preference.
    - Comfy dtype: COMBO
    - Python dtype: object
- interpolate_from_original
    - Restricts generation freedom to match original more closely.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- change_background
    - Modifies background based on prompt/reference.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- preserve_details
    - Maintains texture and fine details from original.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- advanced_settings
    - Fine-tuning options for advanced lighting control.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- reference_image
    - Optional reference image to transfer lighting from.
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
