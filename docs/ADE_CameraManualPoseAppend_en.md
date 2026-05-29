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
```python
class CameraCtrlManualAppendPose:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "poses_first": ("CAMERACTRL_POSES",),
                "poses_last": ("CAMERACTRL_POSES",),
            }
        }

    RETURN_TYPES = ("CAMERACTRL_POSES",)
    FUNCTION = "camera_manual_append"
    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses"

    def camera_manual_append(self, poses_first: list[list[float]], poses_last: list[list[float]]):
        return (combine_poses(poses0=poses_first, poses1=poses_last),)