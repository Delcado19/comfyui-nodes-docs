# Documentation
- Class name: WanImageToImageApi
- Category: partner/image/Wan
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates an image from one or two input images and a text prompt. The output image is currently fixed at 1.6 MP, and its aspect ratio matches the input image(s).

# Input types
## Required
- model
    - Model to use.
    - Comfy dtype: COMBO
    - Python dtype: object
- image
    - Single-image editing or multi-image fusion. Maximum 2 images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Prompt describing the elements and visual features. Supports English and Chinese.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- negative_prompt
    - Negative prompt describing what to avoid.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- watermark
    - Whether to add an AI-generated watermark to the result.
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
