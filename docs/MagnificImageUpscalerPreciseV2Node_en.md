# Documentation
- Class name: MagnificImageUpscalerPreciseV2Node
- Category: partner/image/Magnific
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

High-fidelity upscaling with fine control over sharpness, grain, and detail. Maximum output: 10060×10060 pixels.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- scale_factor
    - The scale_factor input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- flavor
    - Processing style: sublime for general use, photo for photographs, photo_denoiser for noisy photos.
    - Comfy dtype: COMBO
    - Python dtype: object
- sharpen
    - Image sharpness intensity. Higher values increase edge definition and clarity.
    - Comfy dtype: INT
    - Python dtype: int
- smart_grain
    - Intelligent grain/texture enhancement to prevent the image from looking too smooth or artificial.
    - Comfy dtype: INT
    - Python dtype: int
- ultra_detail
    - Controls fine detail, textures, and micro-details added during upscaling.
    - Comfy dtype: INT
    - Python dtype: int
- auto_downscale
    - Automatically downscale input image if output would exceed maximum resolution.
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
