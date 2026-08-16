# Documentation
- Class name: OpenAIGPTImage1
- Category: partner/image/OpenAI
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates images synchronously via OpenAI's GPT Image endpoint.

# Input types
## Required
- prompt
    - Text prompt for GPT Image
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - not implemented yet in backend
    - Comfy dtype: INT
    - Python dtype: int
- quality
    - Image quality, affects cost and generation time.
    - Comfy dtype: COMBO
    - Python dtype: object
- background
    - Return image with or without background
    - Comfy dtype: COMBO
    - Python dtype: object
- size
    - Image size. Select 'Custom' to use the custom width and height (GPT Image 2 only).
    - Comfy dtype: COMBO
    - Python dtype: object
- n
    - How many images to generate
    - Comfy dtype: INT
    - Python dtype: int
- image
    - Optional reference image for image editing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Optional mask for inpainting (white areas will be replaced)
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- custom_width
    - Used only when `size` is 'Custom'. Must be a multiple of 16 (GPT Image 2 only).
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - Used only when `size` is 'Custom'. Must be a multiple of 16 (GPT Image 2 only).
    - Comfy dtype: INT
    - Python dtype: int
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
