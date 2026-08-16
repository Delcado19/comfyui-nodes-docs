# Documentation
- Class name: QuiverImageToSVGNode
- Category: partner/image/Quiver
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Vectorize a raster image into SVG using Quiver AI.

# Input types
## Required
- image
    - Input image to vectorize.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- auto_crop
    - Automatically crop to the dominant subject.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model
    - Model to use for SVG vectorization.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- seed
    - Seed to determine if node should re-run; actual results are nondeterministic regardless of seed.
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
- SVG
    - The SVG output is produced by this node.
    - Comfy dtype: SVG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
