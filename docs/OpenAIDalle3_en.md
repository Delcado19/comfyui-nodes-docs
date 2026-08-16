# Documentation
- Class name: OpenAIDalle3
- Category: partner/image/OpenAI
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates images synchronously via OpenAI's DALL·E 3 endpoint.

# Input types
## Required
- prompt
    - Text prompt for DALL·E
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - not implemented yet in backend
    - Comfy dtype: INT
    - Python dtype: int
- quality
    - Image quality
    - Comfy dtype: COMBO
    - Python dtype: object
- style
    - Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images.
    - Comfy dtype: COMBO
    - Python dtype: object
- size
    - Image size
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
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
