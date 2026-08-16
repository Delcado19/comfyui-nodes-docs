# Documentation
- Class name: CreateCameraInfo
- Category: 3d
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Build a camera_infoMode 'orbit' aims with yaw/pitch/distance around the target; 'look_at' places the camera at world position. Coordinates are the viewer's world space (right-handed,Y-up).

# Input types
## Required
- mode
    - How to define the camera: orbit angles, an explicit position, or a position + quaternion.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- target_x
    - Look-at point (orbit pivot / aim). In orbit mode, move it to pan/translate the whole camera. Ignored in quaternion mode. Defaults to the origin.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_y
    - The target_y input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_z
    - The target_z input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- roll
    - Camera roll about the view axis, degrees.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fov
    - Vertical field of view in degrees.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoom
    - Digital zoom (focal-length multiplier). >1 zooms in without moving the camera.
    - Comfy dtype: FLOAT
    - Python dtype: float
- camera_type
    - Projection used by Render Splat: perspective (foreshortening) or orthographic (parallel).
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- camera_info
    - The camera_info output is produced by this node.
    - Comfy dtype: LOAD3D_CAMERA
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
