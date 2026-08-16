# Documentation
- Class name: ReveImageRemixNode
- Category: partner/image/Reve
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Combine reference images with text prompts to create new images using Reve.

# Input types
## Required
- reference_images
    - The reference_images input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- prompt
    - Text description of the desired image. May include XML img tags to reference specific images by index, e.g. <img>0</img>, <img>1</img>, etc.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - Model version to use for remixing.
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
