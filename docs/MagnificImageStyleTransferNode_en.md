# Documentation
- Class name: MagnificImageStyleTransferNode
- Category: partner/image/Magnific
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Transfer the style from a reference image to your input image.

# Input types
## Required
- image
    - The image to apply style transfer to.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_image
    - The reference image to extract style from.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- style_strength
    - Percentage of style strength.
    - Comfy dtype: INT
    - Python dtype: int
- structure_strength
    - Maintains the structure of the original image.
    - Comfy dtype: INT
    - Python dtype: int
- flavor
    - Style transfer flavor.
    - Comfy dtype: COMBO
    - Python dtype: object
- engine
    - Processing engine selection.
    - Comfy dtype: COMBO
    - Python dtype: object
- portrait_mode
    - Enable portrait mode for facial enhancements.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- fixed_generation
    - When disabled, expect each generation to introduce a degree of randomness, leading to more diverse outcomes.
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
