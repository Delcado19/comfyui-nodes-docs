# Replace Camera Parameters 🎭🅐🅓②
## Documentation
- Class name: ADE_ReplaceCameraParameters
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to modify camera control parameters in an animation or image processing pipeline, allowing adjustments to camera poses based on predefined or dynamically generated criteria. This functionality is essential for achieving specific visual effects, perspectives, or animations that require particular camera orientations or movements.

## Input types
### Required
- poses
    - A parameter representing the camera pose to be modified. It plays a critical role in determining the final output by specifying the initial camera position and orientation for adjustments.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: list[list[float]]
- fx
    - The focal length of the camera along the x-axis. Adjusting this parameter affects the camera's field of view along the x-axis, influencing the perspective and proportions of the rendered scene.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fy
    - The focal length of the camera along the y-axis. Similar to "fx," this parameter modifies the field of view along the y-axis, affecting the perception of depth and height in the scene.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cx
    - The x-coordinate of the camera's optical center. Changing this value shifts the center point of the scene horizontally, which can be used for correction or achieving certain visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cy
    - The y-coordinate of the camera's optical center. This parameter shifts the center point of the scene vertically, allowing adjustments to vertical alignment or simulating camera tilt effects.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- cameractrl_poses
    - Comfy dtype: CAMERACTRL_POSES
    - The modified camera pose after applying the new camera parameters. This output is critical for downstream processes that rely on the updated camera orientation for rendering or further processing.
    - Python dtype: list[list[float]]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class CameraCtrlReplaceCameraParameters:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "poses":("CAMERACTRL_POSES",),
                "fx": ("FLOAT", {"default": CAM.DEFAULT_FX, "min": 0, "max": 1, "step": 0.000000001}),
                "fy": ("FLOAT", {"default": CAM.DEFAULT_FY, "min": 0, "max": 1, "step": 0.000000001}),
                "cx": ("FLOAT", {"default": CAM.DEFAULT_CX, "min": 0, "max": 1, "step": 0.01}),
                "cy": ("FLOAT", {"default": CAM.DEFAULT_CY, "min": 0, "max": 1, "step": 0.01}),
            },
        }
    
    RETURN_TYPES = ("CAMERACTRL_POSES",)
    FUNCTION = "set_camera_parameters"
    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses"

    def set_camera_parameters(self, poses: list[list[float]], fx: float, fy: float, cx: float, cy: float):
        new_poses = copy.deepcopy(poses)
        for pose in new_poses:
            # fx,fy,cx,fy are in indexes 1-4 of the 19-long pose list
            pose[1] = fx
            pose[2] = fy
            pose[3] = cx
            pose[4] = cy
        return (new_poses,)