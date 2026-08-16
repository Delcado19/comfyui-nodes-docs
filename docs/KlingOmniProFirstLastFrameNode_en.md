# Documentation
- Class name: KlingOmniProFirstLastFrameNode
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Use a start frame, an optional end frame, or reference images with the latest Kling model.

# Input types
## Required
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - A text prompt describing the video content. This can include both positive and negative descriptions. Ignored when storyboards are enabled.
    - Comfy dtype: STRING
    - Python dtype: str
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- first_frame
    - The first_frame input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- end_frame
    - An optional end frame for the video. This cannot be used simultaneously with 'reference_images'. Does not work with storyboards.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_images
    - Up to 6 additional reference images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- storyboards
    - Generate a series of video segments with individual prompts and durations. Only supported for kling-v3-omni.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- generate_audio
    - Generate audio for the video. Only supported for kling-v3-omni.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
