# Documentation
- Class name: HeyGenTalkingPhotoNode
- Category: partner/video/HeyGen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Animate any image of a person into a lip-synced talking video (HeyGen Avatar IV). Drive it with a text script or your own audio.

# Input types
## Required
- image
    - Image of a person to animate. Downscaled automatically if larger than 2K.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- speech
    - Drive the avatar with a text script (HeyGen text-to-speech) or your own audio.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- resolution
    - Output video resolution.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - Output aspect ratio. 'auto' follows the input image.
    - Comfy dtype: COMBO
    - Python dtype: object
- expressiveness
    - How expressive the animated face and gestures are.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Not sent to HeyGen; change it to force a re-run.
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
