# Documentation
- Class name: MinimaxImageToVideoNode
- Category: partner/video/MiniMax
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates videos synchronously based on an image and prompt, and optional parameters.

# Input types
## Required
- image
    - Image to use as first frame of video generation
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt_text
    - Text prompt to guide the video generation
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - Model to use for video generation
    - Comfy dtype: COMBO
    - Python dtype: object
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
- VIDEO
    - The VIDEO output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
