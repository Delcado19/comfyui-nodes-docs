# Documentation
- Class name: LandmarksToImage
- Category: LivePortrait
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Landmarks to Image is a ComfyUI node registered by `custom_nodes.ComfyUI-WanVideoWrapper`. The live metadata did not provide a longer description.

# Input types
## Required
- landmarks
    - The landmarks input is used by this node during execution.
    - Comfy dtype: LANDMARKS
    - Python dtype: object
- width
    - Width of the output image
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the output image
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- keypoints_image
    - The keypoints_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
