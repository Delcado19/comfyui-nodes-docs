# Documentation
- Class name: VeoVideoGenerationNode
- Category: partner/video/Veo
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates videos from text prompts using Google's Veo 2 API

# Input types
## Required
- prompt
    - Text description of the video
    - Comfy dtype: STRING
    - Python dtype: str
- aspect_ratio
    - Aspect ratio of the output video
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- negative_prompt
    - Negative text prompt to guide what to avoid in the video
    - Comfy dtype: STRING
    - Python dtype: str
- duration_seconds
    - Duration of the output video in seconds
    - Comfy dtype: INT
    - Python dtype: int
- enhance_prompt
    - Whether to enhance the prompt with AI assistance
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- person_generation
    - Whether to allow generating people in the video
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed for video generation (0 for random)
    - Comfy dtype: INT
    - Python dtype: int
- image
    - Optional reference image to guide video generation
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - Veo 2 model to use for video generation
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
