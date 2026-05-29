# Documentation
- Class name: LoadMotionCtrlSVDCameraPreset
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl-SVD.git

This node is designed to load predefined camera presets for motion control in a 3D environment. It allows users to select and apply different camera views to enhance visual storytelling or simulation scenes.

# Input types
## Required
- motion_camera
    - The ‘motion_camera’ parameter is crucial for the operation of the node, as it determines the specific camera preset to load. This selection can significantly affect the outcome of the motion control process, influencing the final visualization or simulation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- POINTS
    - The output ‘POINTS’ represents the loaded camera preset data, which contains parameters for camera positioning and orientation. This data is essential for achieving the desired motion control effect in 3D applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class LoadMotionCtrlSVDCameraPreset:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'motion_camera': (MOTION_CAMERA_OPTIONS,)}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('POINTS',)
    FUNCTION = 'load_motion_camera_preset'
    CATEGORY = 'motionctrl'

    def load_motion_camera_preset(self, motion_camera):
        data = '[]'
        comfy_path = os.path.dirname(folder_paths.__file__)
        with open(f'{comfy_path}/custom_nodes/ComfyUI-MotionCtrl-SVD/examples/camera_poses/test_camera_{motion_camera}.json') as f:
            data = f.read()
        return (data,)
```