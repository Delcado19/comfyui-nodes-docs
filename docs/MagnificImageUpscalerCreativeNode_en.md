# Documentation
- Class name: MagnificImageUpscalerCreativeNode
- Category: partner/image/Magnific
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Prompt‑guided enhancement, stylization, and 2x/4x/8x/16x upscaling. Maximum output: 25.3 megapixels.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- scale_factor
    - The scale_factor input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- optimized_for
    - The optimized_for input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- creativity
    - The creativity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- hdr
    - The level of definition and detail.
    - Comfy dtype: INT
    - Python dtype: int
- resemblance
    - The level of resemblance to the original image.
    - Comfy dtype: INT
    - Python dtype: int
- fractality
    - The strength of the prompt and intricacy per square pixel.
    - Comfy dtype: INT
    - Python dtype: int
- engine
    - The engine input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- auto_downscale
    - Automatically downscale input image if output would exceed maximum pixel limit.
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
