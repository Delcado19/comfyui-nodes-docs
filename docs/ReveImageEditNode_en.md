# Documentation
- Class name: ReveImageEditNode
- Category: partner/image/Reve
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Edit images using natural language instructions with Reve.

# Input types
## Required
- image
    - The image to edit.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- edit_instruction
    - Text description of how to edit the image. Maximum 2560 characters.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - Model version to use for editing.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- upscale
    - Upscale the generated image. May add additional cost.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- remove_background
    - Remove the background from the generated image. May add additional cost.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
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
