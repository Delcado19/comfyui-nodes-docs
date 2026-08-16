# Documentation
- Class name: HeyGenAvatarVideoNode
- Category: partner/video/HeyGen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate a talking-presenter video from a HeyGen avatar. Includes HeyGen's most popular public avatars; any look ID can be supplied as an override.

# Input types
## Required
- engine
    - Rendering engine; each choice lists only the avatars that support it. 'auto' offers every avatar and picks its best engine (Avatar IV preferred). Avatar V is highest fidelity, Avatar III is the most affordable.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- speech
    - Drive the avatar with a text script (HeyGen text-to-speech) or your own audio.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- custom_avatar_id
    - Optional HeyGen avatar look ID. When set, overrides the avatar selected above. Any of HeyGen's 3000+ public looks (or your private avatars) can be used.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - Output video resolution.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - Output aspect ratio. 'auto' follows the avatar's source footage.
    - Comfy dtype: COMBO
    - Python dtype: object
- background_color
    - Optional solid background color as a hex code (e.g. '#00ff00'). Leave empty for the avatar's own background.
    - Comfy dtype: STRING
    - Python dtype: str
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
