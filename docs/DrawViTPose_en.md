# Documentation
- Class name: DrawViTPose
- Category: WanAnimatePreprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanAnimatePreprocess

Draws pose images from pose data.

# Input types
## Required
- pose_data
    - The pose_data input is used by this node during execution.
    - Comfy dtype: POSEDATA
    - Python dtype: object
- width
    - Width of the generation
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the generation
    - Comfy dtype: INT
    - Python dtype: int
- retarget_padding
    - When > 0, the retargeted pose image is padded and resized to the target size
    - Comfy dtype: INT
    - Python dtype: int
- body_stick_width
    - Width of the body sticks. Set to 0 to disable body drawing, -1 for auto
    - Comfy dtype: INT
    - Python dtype: int
- hand_stick_width
    - Width of the hand sticks. Set to 0 to disable hand drawing, -1 for auto
    - Comfy dtype: INT
    - Python dtype: int
- draw_head
    - Whether to draw head keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- pose_images
    - The pose_images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanAnimatePreprocess)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
