# Documentation
- Class name: FaceMaskFromPoseKeypoints
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- pose_kps
    - The pose_kps input is used by this node during execution.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object
- person_index
    - Index of the person to start with
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
