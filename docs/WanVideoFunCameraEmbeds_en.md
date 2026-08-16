# Documentation
- Class name: WanVideoFunCameraEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- poses
    - The poses input is used by this node during execution.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: object
- width
    - Width of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - Strength of the camera motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percent of the steps to apply camera motion
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percent of the steps to apply camera motion
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
