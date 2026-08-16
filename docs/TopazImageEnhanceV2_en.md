# Documentation
- Class name: TopazImageEnhanceV2
- Category: partner/image/Topaz
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Industry-standard upscaling and image enhancement.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- output_width
    - Zero value means to calculate automatically (usually it will be original size or scaled proportionally to output_height if specified). Wonder 3.5 supports upscale factors from 1x to 6x only. Bloom 2 and Wonder 3.5 preserve the input aspect ratio and treat the requested size as a target.
    - Comfy dtype: INT
    - Python dtype: int
- output_height
    - Zero value means to output in the same height as original or scaled proportionally to output_width if specified. Wonder 3.5 supports upscale factors from 1x to 6x only. Bloom 2 and Wonder 3.5 preserve the input aspect ratio and treat the requested size as a target.
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
