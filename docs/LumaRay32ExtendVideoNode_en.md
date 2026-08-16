# Documentation
- Class name: LumaRay32ExtendVideoNode
- Category: partner/video/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extend a previous Ray 3.2 generation forward (continue after it) or backward (lead-in before it). Connect the generation_id output of a prior Luma Ray 3.2 node. Extensions are always 5 seconds.

# Input types
## Required
- source_generation_id
    - generation_id of the prior Ray 3.2 video to extend. Connect the generation_id output of another Luma Ray 3.2 node.
    - Comfy dtype: STRING
    - Python dtype: str
- direction
    - Forward continues after the prior clip; backward is prepended before it.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- prompt
    - Text prompt for the new content.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed to determine if node should re-run; results are nondeterministic regardless of seed.
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
- generation_id
    - The generation_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
