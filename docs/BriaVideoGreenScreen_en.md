# Documentation
- Class name: BriaVideoGreenScreen
- Category: partner/video/Bria
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Replace a video's background with a solid chroma-key screen using Bria.

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: VIDEO
    - Python dtype: object
- green_shade
    - Solid chroma-key shade applied behind the foreground: broadcast_green (#00B140), chroma_green (#00FF00), or blue_screen (#0000FF).
    - Comfy dtype: COMBO
    - Python dtype: object
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
