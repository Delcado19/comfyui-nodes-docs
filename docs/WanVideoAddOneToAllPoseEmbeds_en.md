# Documentation
- Class name: WanVideoAddOneToAllPoseEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- pose_images
    - Pose images for the entire video
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Strength of the pose control
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percentage of the pose control application
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percentage of the pose control application
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- pose_prefix_image
    - The pose_prefix_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_cfg_scale
    - CFG scale for the pose control, has no effect if main cfg scale is 1.0
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
