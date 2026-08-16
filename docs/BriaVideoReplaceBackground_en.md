# Documentation
- Class name: BriaVideoReplaceBackground
- Category: partner/video/Bria
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Replace a video's background with a supplied image or video using Bria. The output keeps the foreground's resolution and frame rate; a background with a different aspect ratio is stretched to fit, so match it for undistorted results.

# Input types
## Required
- video
    - Foreground video whose background is replaced.
    - Comfy dtype: VIDEO
    - Python dtype: object
- seed
    - Seed controls whether the node should re-run; results are non-deterministic regardless of seed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- background_image
    - Background image to composite behind the foreground. Provide either a background image or a background video, not both.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- background_video
    - Background video to composite behind the foreground. Provide either a background image or a background video, not both.
    - Comfy dtype: VIDEO
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
