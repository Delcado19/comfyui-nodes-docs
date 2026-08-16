# Documentation
- Class name: Krea2StyleReferenceNode
- Category: partner/image/Krea
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Add an image style reference to a Krea 2 generation. Chain multiple Krea 2 Style Reference nodes (max 10) and feed the final `style_reference` output into Krea 2 Image. Each image is uploaded to ComfyAPI storage and passed as URL.

# Input types
## Required
- image
    - Reference image whose style influences the generation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Reference strength; negative values invert the style influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- style_reference
    - Optional incoming chain of style references; this node appends one more.
    - Comfy dtype: KREA_STYLE_REF
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

# Output types
- style_reference
    - The style_reference output is produced by this node.
    - Comfy dtype: KREA_STYLE_REF
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
