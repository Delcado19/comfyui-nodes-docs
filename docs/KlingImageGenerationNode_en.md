# Documentation
- Class name: KlingImageGenerationNode
- Category: partner/image/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Kling Image Generation Node. Generate an image from a text prompt with an optional reference image.

# Input types
## Required
- prompt
    - Positive text prompt
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Negative text prompt
    - Comfy dtype: STRING
    - Python dtype: str
- image_type
    - The image_type input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- image_fidelity
    - Reference intensity for user-uploaded images
    - Comfy dtype: FLOAT
    - Python dtype: float
- human_fidelity
    - Subject reference similarity
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- n
    - Number of generated images
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
