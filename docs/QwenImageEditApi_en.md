# Documentation
- Class name: QwenImageEditApi
- Category: partner/image/Qwen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Edits or combines up to 3 reference images guided by a text prompt using the Qwen-Image 3.0 models.

# Input types
## Required
- model
    - Model to use.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- size
    - Output resolution. 'match input' reuses the first reference image's size, 'auto' lets the model pick a size with the same aspect ratio, 'custom' sets an explicit width and height.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- n
    - Number of images to generate, returned as a batch.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- prompt_extend
    - Whether to enhance the prompt with AI assistance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
