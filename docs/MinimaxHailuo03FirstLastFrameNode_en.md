# Documentation
- Class name: MinimaxHailuo03FirstLastFrameNode
- Category: partner/video/MiniMax
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate video from a first frame image and an optional last frame image using the MiniMax H3 model. The aspect ratio of the video follows the supplied images.

# Input types
## Required
- model
    - Model to use for video generation.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- first_frame
    - First frame image for the video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - Random seed. The same request with the same seed gives similar, but not guaranteed identical, results.
    - Comfy dtype: INT
    - Python dtype: int
- watermark
    - Whether to add an AIGC watermark to the video.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- last_frame
    - Optional last frame image for the video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
