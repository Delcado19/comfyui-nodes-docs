# Documentation
- Class name: ByteDanceSeedreamNodeV2
- Category: partner/image/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Unified text-to-image generation and precise single-sentence editing at up to 4K resolution.

# Input types
## Required
- prompt
    - Text prompt for creating or editing an image.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- watermark
    - Whether to add an "AI generated" watermark to the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- thinking
    - Enable the model's prompt-optimization reasoning ('thinking') for better adherence. Can substantially increase generation time — notably on Seedream 5.0 Pro. Can only be disabled for text-to-image (not when reference images are provided).
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
