# Documentation
- Class name: ByteDanceCreateImageAsset
- Category: partner/image/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create a Seedance 2.0 personal image asset. Uploads the input image and registers it in the given asset group. If group_id is empty, runs a real-person H5 authentication flow to create a new group before adding the asset.

# Input types
## Required
- image
    - Image to register as a personal asset.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- group_id
    - Reuse an existing Seedance asset group ID to skip repeated human verification for the same person. Leave empty to run real-person authentication in the browser and create a new group.
    - Comfy dtype: STRING
    - Python dtype: str
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
- asset_id
    - The asset_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- group_id
    - The group_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
