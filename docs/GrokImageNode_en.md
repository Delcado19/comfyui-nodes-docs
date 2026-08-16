# Documentation
- Class name: GrokImageNode
- Category: partner/image/Grok
- Output node: False
- Repo Ref: https://github.com/cdanielp/COMFYUI_PROMPTMODELS

Generate images using Grok based on a text prompt

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - The text prompt used to generate the image
    - Comfy dtype: STRING
    - Python dtype: str
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- number_of_images
    - Number of images to generate
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed to determine if node should re-run; actual results are nondeterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- quality
    - Quality level, supported only by the grok-imagine-image-2.0 model.
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
[View source repository](https://github.com/cdanielp/COMFYUI_PROMPTMODELS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
