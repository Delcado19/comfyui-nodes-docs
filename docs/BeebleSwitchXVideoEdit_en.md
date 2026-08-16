# Documentation
- Class name: BeebleSwitchXVideoEdit
- Category: partner/video/Beeble
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Edit a video with Beeble SwitchX. Switches anything in the scene (background, lighting, costume) while preserving the original subject's pixels and motion. Provide a reference image and/or text prompt to describe the new look. Max 240 frames, max ~2.77MP per frame.

# Input types
## Required
- video
    - The video input is used by this node during execution.
    - Comfy dtype: VIDEO
    - Python dtype: object
- prompt
    - Text description of the desired output (max 2000 chars). At least one of 'prompt' or 'reference_image' is required.
    - Comfy dtype: STRING
    - Python dtype: str
- alpha_mode
    - Controls how SwitchX decides what to keep vs. regenerate. 'auto' isolates the main subject automatically. 'fill' regenerates the entire frame while preserving geometry. 'select' propagates a first-frame keyframe across the clip. 'custom' uses a per-frame alpha matte you provide.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- max_resolution
    - Maximum output resolution.
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- reference_image
    - Reference image whose look (background, lighting, costume) the result should adopt. At least one of 'reference_image' or 'prompt' is required.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
- video
    - The video output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object
- alpha
    - The alpha matte Beeble used. Empty for 'fill' mode, which has no separate matte.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
