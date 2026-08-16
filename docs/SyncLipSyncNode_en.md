# Documentation
- Class name: SyncLipSyncNode
- Category: partner/video/sync.so
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Re-sync mouth movement in a video to new speech audio using sync.so. Handles close-ups, profiles and obstructions automatically while preserving the speaker's expression. Cost scales with output duration.

# Input types
## Required
- video
    - Footage of the speaker to re-sync. Up to 4K (4096x2160); a constant frame rate of 24/25/30 fps works best.
    - Comfy dtype: VIDEO
    - Python dtype: object
- audio
    - Speech audio to sync the mouth to.
    - Comfy dtype: AUDIO
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
- model
    - sync.so generation model.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
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
