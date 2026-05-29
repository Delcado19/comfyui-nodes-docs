# Create CameraCtrl Poses 🎭🅐🅓②
## Documentation
- Class name: ADE_CameraPoseBasic
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to create basic camera control poses based on the specified motion type, speed, and frame length. It allows generating poses that can be used to control the movement and orientation of the camera in a 3D environment, enabling dynamic and customizable animations.

## Input types
### Required
- motion_type
    - Specify the type of motion to apply to the camera, affecting the direction and nature of the camera movement.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- speed
    - Determine the speed of the camera movement, allowing control over the pace of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_length
    - Define the number of frames over which the camera motion is applied, setting the duration of the camera movement.
    - Comfy dtype: INT
    - Python dtype: int

### Optional
- prev_poses
    - Optional. Provide a previous camera pose to combine with the newly generated pose for seamless transitions between animations.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: list[list[float]]

## Output types
- cameractrl_poses
    - Comfy dtype: CAMERACTRL_POSES
    - Output the generated camera control pose, ready for use in animation.
    - Python dtype: list[list[float]]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class CameraCtrlPoseBasic:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "motion_type": (CAM._LIST,),
                "speed": ("FLOAT", {"default": 1.0, "min": -100.0, "max": 100.0, "step": 0.01}),
                "frame_length": ("INT", {"default": 16}),
            },
            "optional": {
                "prev_poses": ("CAMERACTRL_POSES",),
            }
        }

    RETURN_TYPES = ("CAMERACTRL_POSES",)
    FUNCTION = "camera_pose_basic"
    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses"

    def camera_pose_basic(self, motion_type: str, speed: float, frame_length: int, prev_poses: list[list[float]]=None):
        motion = CAM.get(motion_type)
        RT = get_camera_motion(motion.rotate, motion.translate, speed, frame_length)
        new_motion = ndarray_to_poses(RT=RT)
        if prev_poses is not None:
            new_motion = combine_poses(prev_poses, new_motion)
        return (new_motion,)