# Documentation
- Class name: Wan2ImageToVideoApi
- Category: partner/video/Wan
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a video from a first-frame image, with optional last-frame image and audio.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- first_frame
    - First frame image. The output aspect ratio is derived from this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- prompt_extend
    - Whether to enhance the prompt with AI assistance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- watermark
    - Whether to add an AI-generated watermark to the result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- last_frame
    - Last frame image. The model generates a video transitioning from first to last frame.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - Audio for driving video generation (e.g., lip sync, beat-matched motion). Duration: 2s-30s. If not provided, the model automatically generates matching background music or sound effects.
    - Comfy dtype: AUDIO
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
