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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
