# Documentation
- Class name: RunwayTextToImageNode
- Category: partner/image/Runway
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate an image from a text prompt using Runway's Gen 4 model. You can also include reference image to guide the generation.

# Input types
## Required
- prompt
    - Text prompt for the generation
    - Comfy dtype: STRING
    - Python dtype: str
- ratio
    - The ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- reference_image
    - Optional reference image to guide the generation
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
