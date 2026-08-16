# Documentation
- Class name: ConvertOpenPoseKeypointsToDWPose
- Category: WanAnimatePreprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SCAIL-Pose

Convert OpenPose format keypoints to DWPose format.

# Input types
## Required
- keypoints
    - The keypoints input is used by this node during execution.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object
- max_people
    - Maximum number of people to process per frame
    - Comfy dtype: INT
    - Python dtype: int

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
