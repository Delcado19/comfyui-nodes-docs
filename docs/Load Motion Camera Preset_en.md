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
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
