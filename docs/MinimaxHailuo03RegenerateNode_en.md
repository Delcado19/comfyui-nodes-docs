# Documentation
- Class name: MinimaxHailuo03RegenerateNode
- Category: partner/video/MiniMax
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Re-render a MiniMax H3 768P output at 2K resolution. Connect the unmodified 768P video and the exact prompt used to generate it; if the original generation used first/last frames or reference media, attach the same inputs.

# Input types
## Required
- model
    - Model to use for video regeneration.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- video
    - The MiniMax H3 768P output video to re-render. Connect the unmodified output of a MiniMax H3 video node (24 FPS, 4-15 seconds). 2K outputs cannot be used.
    - Comfy dtype: VIDEO
    - Python dtype: object
- watermark
    - Whether to add an AIGC watermark to the video.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- first_frame
    - First frame image from the original generation, if one was used.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- last_frame
    - Last frame image from the original generation, if one was used.
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
