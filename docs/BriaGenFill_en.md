# Documentation
- Class name: BriaGenFill
- Category: partner/image/Bria
- Output node: False
- Repo Ref: https://github.com/Bria-AI/ComfyUI-BRIA-API

Generate objects or scenery inside a masked region of an image using Bria.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - White areas are filled with generated content, black areas are preserved. The mask is binarized before sending, so partially painted areas count as white. Must have the same aspect ratio as the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- prompt
    - Description of what to generate inside the masked region.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- refine_prompt
    - Automatically adjust the prompt for better results; disable to use the prompt exactly as written.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- moderation
    - Moderation settings
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
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
[View source repository](https://github.com/Bria-AI/ComfyUI-BRIA-API)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
