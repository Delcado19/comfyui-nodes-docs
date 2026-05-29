# Documentation
- Class name: LoadMotionCameraPreset
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

This node aims to retrieve and load predefined camera motion presets to enable dynamic camera control in motion capture scenes.

# Input types
## Required
- motion_camera
    - motion_camera parameter specifies the preset to load, which is critical for determining the camera's position and orientation in the motion sequence.
    - Comfy dtype: COMBO[MOTION_CAMERA_OPTIONS]
    - Python dtype: str

# Output types
- POINTS
    - The output provides loaded camera preset data, which is critical for applying the specified camera motion in the system.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class LoadMotionCameraPreset:

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
        with open(f'{comfy_path}/custom_nodes/ComfyUI-MotionCtrl/examples/camera_poses/test_camera_{motion_camera}.json') as f:
            data = f.read()
        return (data,)
```