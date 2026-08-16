# Documentation
- Class name: Krea2ImageNode
- Category: partner/image/Krea
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate images via Krea 2 — pick Medium (expressive illustrations) or Large (expressive photorealism). Supports an optional moodboard and up to 10 chained image style references.

# Input types
## Required
- prompt
    - Text prompt for the image.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - Krea 2 Medium is best for expressive illustrations; Krea 2 Large is best for expressive photorealism.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Random seed for reproducibility.
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
