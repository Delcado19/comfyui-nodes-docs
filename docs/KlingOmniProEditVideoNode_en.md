# Documentation
- Class name: KlingOmniProEditVideoNode
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Edit an existing video with the latest model from Kling.

# Input types
## Required
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - A text prompt describing the video content. This can include both positive and negative descriptions.
    - Comfy dtype: STRING
    - Python dtype: str
- video
    - Video for editing. The output video length will be the same.
    - Comfy dtype: VIDEO
    - Python dtype: object
- keep_original_sound
    - The keep_original_sound input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- reference_images
    - Up to 4 additional reference images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
