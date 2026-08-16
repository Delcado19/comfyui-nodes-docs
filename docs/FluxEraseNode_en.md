# Documentation
- Class name: FluxEraseNode
- Category: partner/image/BFL
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Removes the masked object from an image and reconstructs the background. Paint the mask over what you want to erase.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - White areas are removed; black areas are preserved.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- dilate_pixels
    - Expands the mask boundaries to ensure clean coverage of the object's edges.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- seed
    - The random seed used for creating the noise.
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
