# Documentation
- Class name: PoseDetectionVitPoseToDWPose
- Category: WanAnimatePreprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SCAIL-Pose

ViTPose to DWPose format pose detection node.

# Input types
## Required
- vitpose_model
    - The vitpose_model input is used by this node during execution.
    - Comfy dtype: POSEMODEL
    - Python dtype: object
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- dw_poses
    - The dw_poses output is produced by this node.
    - Comfy dtype: DWPOSES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-SCAIL-Pose)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
