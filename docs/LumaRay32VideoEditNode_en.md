# Documentation
- Class name: LumaRay32VideoEditNode
- Category: partner/video/Luma
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Re-render an existing video under a new prompt using Luma Ray 3.2 (restyle, relight, add or remove elements) while keeping the original motion. Source video up to 18 seconds; the edited video keeps the source's length.

# Input types
## Required
- video
    - Source video to edit. Up to 18 seconds.
    - Comfy dtype: VIDEO
    - Python dtype: object
- prompt
    - Describes the desired edit.
    - Comfy dtype: STRING
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- strength
    - How strongly to preserve vs. reimagine the source. 'auto' lets Ray 3.2 choose; adhere_* preserves the most, flex_* is balanced, reimagine_* changes the most.
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
