# Documentation
- Class name: SyncTalkingImageNode
- Category: partner/video/sync.so
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Animate a still portrait into a talking video driven by speech audio, using sync.so's sync-3 model. The output duration matches the audio. Cost scales with output duration.

# Input types
## Required
- image
    - A single image with a clearly visible face, up to 4K (4096x2160).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - Speech audio driving the talking video; the output duration matches it. Chain any TTS node here to drive the animation from text.
    - Comfy dtype: AUDIO
    - Python dtype: object
- prompt
    - Optional guidance for how the portrait comes to life, e.g. 'make the subject smile and look at the camera'. Leave empty for natural talking motion.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
- model
    - sync.so generation model. Image input is exclusive to sync-3.
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
