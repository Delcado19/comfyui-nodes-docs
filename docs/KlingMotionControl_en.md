# Documentation
- Class name: KlingMotionControl
- Category: partner/video/Kling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Kling Motion Control is a ComfyUI node registered by `comfy_api_nodes.nodes_kling`. The live metadata did not provide a longer description.

# Input types
## Required
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- reference_image
    - The reference_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_video
    - Motion reference video used to drive movement/expression.
Duration limits depend on character_orientation:
 - image: 3–10s (max 10s)
 - video: 3–30s (max 30s)
    - Comfy dtype: VIDEO
    - Python dtype: object
- keep_original_sound
    - The keep_original_sound input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- character_orientation
    - Controls where the character's facing/orientation comes from.
video: movements, expressions, camera moves, and orientation follow the motion reference video (other details via prompt).
image: movements and expressions still follow the motion reference video, but the character orientation matches the reference image (camera/other details via prompt).
    - Comfy dtype: COMBO
    - Python dtype: object
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO
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
