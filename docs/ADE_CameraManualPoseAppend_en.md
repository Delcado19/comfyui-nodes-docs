# Manual Append CameraCtrl Poses 🎭🅐🅓②
## Documentation
- Class name: ADE_CameraManualPoseAppend
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_CameraManualPoseAppend node is used to manually append camera control poses, allowing customization and extension of camera movement in animations. This node helps integrate user-defined camera poses, enhancing the dynamic visual storytelling capabilities of animation projects.

## Input types
### Required
- poses_first
    - Specify the initial camera control pose set to be appended. It plays a pivotal role in determining the starting point of the camera movement.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: list[list[float]]
- poses_last
    - Define the final camera control pose set to be appended. It determines the endpoint of the camera movement, allowing seamless transitions between camera states.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: list[list[float]]

## Output types
- cameractrl_poses
    - Comfy dtype: CAMERACTRL_POSES
    - Output the combined camera control pose set, representing the seamless integration of the initial and final poses to achieve dynamic camera movement in the animation.
    - Python dtype: list[list[float]]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
