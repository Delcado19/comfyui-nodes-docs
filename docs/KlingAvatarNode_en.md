# Documentation
- Class name: KlingAvatarNode
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate broadcast-style digital human videos from a single photo and an audio file.

# Input types
## Required
- image
    - Avatar reference image. Width and height must be at least 300px. Aspect ratio must be between 1:2.5 and 2.5:1.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sound_file
    - Audio input. Must be between 2 and 300 seconds in duration.
    - Comfy dtype: AUDIO
    - Python dtype: object
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prompt
    - Optional prompt to define avatar actions, emotions, and camera movements.
    - Comfy dtype: STRING
    - Python dtype: str
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
