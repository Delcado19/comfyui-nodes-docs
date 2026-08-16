# Documentation
- Class name: RunwayImageToVideoNodeGen4
- Category: partner/video/Runway
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a video from a single starting frame using Gen4 Turbo model. Before diving in, review these best practices to ensure that your input selections will set your generation up for success: https://help.runwayml.com/hc/en-us/articles/37327109429011-Creating-with-Gen-4-Video.

# Input types
## Required
- prompt
    - Text prompt for the generation
    - Comfy dtype: STRING
    - Python dtype: str
- start_frame
    - Start frame to be used for the video
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- duration
    - The duration input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- ratio
    - The ratio input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Random seed for generation
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
