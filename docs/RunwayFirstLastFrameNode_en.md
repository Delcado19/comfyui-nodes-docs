# Documentation
- Class name: RunwayFirstLastFrameNode
- Category: partner/video/Runway
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Upload first and last keyframes, draft a prompt, and generate a video. More complex transitions, such as cases where the Last frame is completely different from the First frame, may benefit from the longer 10s duration. This would give the generation more time to smoothly transition between the two inputs. Before diving in, review these best practices to ensure that your input selections will set your generation up for success: https://help.runwayml.com/hc/en-us/articles/34170748696595-Creating-with-Keyframes-on-Gen-3.

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
- end_frame
    - End frame to be used for the video. Supported for gen3a_turbo only.
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
