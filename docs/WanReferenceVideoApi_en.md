# Documentation
- Class name: WanReferenceVideoApi
- Category: partner/video/Wan
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Use the character and voice from input videos, combined with a prompt, to generate a new video that maintains character consistency.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt
    - Prompt describing the elements and visual features. Supports English and Chinese. Use identifiers such as `character1` and `character2` to refer to the reference characters.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Negative prompt describing what to avoid.
    - Comfy dtype: STRING
    - Python dtype: str
- reference_videos
    - The reference_videos input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- size
    - The size input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shot_type
    - Specifies the shot type for the generated video, that is, whether the video is a single continuous shot or multiple shots with cuts.
    - Comfy dtype: COMBO
    - Python dtype: object
- watermark
    - Whether to add an AI-generated watermark to the result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
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
