# Documentation
- Class name: WanVideoUniAnimatePoseInput
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- pose_images
    - Pose images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Strength of the pose control
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Start percentage for the pose control
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - End percentage for the pose control
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- reference_pose_image
    - Reference pose image
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- unianimate_poses
    - The unianimate_poses output is produced by this node.
    - Comfy dtype: UNIANIMATE_POSE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
