# Documentation
- Class name: HeyGenCreateAvatarNode
- Category: partner/video/HeyGen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create your own reusable HeyGen avatar from a photo of a person or from a text prompt (a generated character). Feed the resulting avatar_id into HeyGen Avatar Video's custom_avatar_id — and save the ID somewhere to reuse the avatar in future workflows.

# Input types
## Required
- source
    - Generate a new character from a text prompt, or create the avatar from a connected photo of a person.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
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
- avatar_id
    - Avatar look ID. Pass it to HeyGen Avatar Video's custom_avatar_id; save it to reuse the avatar later.
    - Comfy dtype: STRING
    - Python dtype: str
- preview
    - The preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
