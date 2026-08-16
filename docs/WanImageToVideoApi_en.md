# Documentation
- Class name: WanImageToVideoApi
- Category: partner/video/Wan
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates a video from the first frame and a text prompt.

# Input types
## Required
- model
    - Model to use.
    - Comfy dtype: COMBO
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Prompt describing the elements and visual features. Supports English and Chinese.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- negative_prompt
    - Negative prompt describing what to avoid.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - Duration 15 available only for WAN2.6 model.
    - Comfy dtype: INT
    - Python dtype: int
- audio
    - Audio must contain a clear, loud voice, without extraneous noise or background music.
    - Comfy dtype: AUDIO
    - Python dtype: object
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
- generate_audio
    - If no audio input is provided, generate audio automatically.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prompt_extend
    - Whether to enhance the prompt with AI assistance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- watermark
    - Whether to add an AI-generated watermark to the result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- shot_type
    - Specifies the shot type for the generated video, that is, whether the video is a single continuous shot or multiple shots with cuts. This parameter takes effect only when prompt_extend is True.
    - Comfy dtype: COMBO
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
