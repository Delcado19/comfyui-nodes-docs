# Create CameraCtrl Poses (Adv.) 🎭🅐🅓②
## Documentation
- Class name: ADE_CameraPoseAdvanced
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_CameraPoseAdvanced node is designed to create advanced camera control poses for animations. It allows combining multiple motion types and intensities to generate complex camera movements, enhancing dynamic visual storytelling in animation sequences.

## Input types
### Required
- motion_type1
    - Specifies the first type of camera motion to apply, influencing the overall camera movement and its visual impact on the animation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength1
    - Specifies the intensity multiplier for the first motion type, adjusting the strength of the camera movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- motion_type2
    - Defines the second type of camera motion, contributing to the complexity and depth of the camera path.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength2
    - Defines the intensity multiplier for the second motion type, modifying the impact of the camera path.
    - Comfy dtype: FLOAT
    - Python dtype: float
- motion_type3
    - Indicates the third type of camera motion, adding another layer of movement to the camera trajectory.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength3
    - Indicates the intensity multiplier for the third motion type, altering the strength of the camera movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- motion_type4
    - Specifies the fourth type of camera motion, further enriching the camera's movement and its effect on the scene.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength4
    - Specifies the intensity multiplier for the fourth motion type, influencing the depth of the camera trajectory.
    - Comfy dtype: FLOAT
    - Python dtype: float
- motion_type5
    - Defines the fifth type of camera motion, enhancing the animation with additional motion nuances.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength5
    - Defines the intensity multiplier for the fifth motion type, affecting the nuances of the camera movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- motion_type6
    - Indicates the sixth type of camera motion, completing the motion set for complex camera control.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength6
    - Indicates the intensity multiplier for the sixth motion type, fine-tuning the complexity of the camera movement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- speed
    - Controls the speed of the camera movement, affecting how quickly the camera transitions between poses.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_length
    - Determines the number of frames over which the camera motion is applied, defining the duration of the movement.
    - Comfy dtype: INT
    - Python dtype: int

### Optional
- prev_poses
    - Optional. A previous camera pose that can be combined with the new motion for seamless transitions in the animation.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: list[list[float]]

## Output types
- cameractrl_poses
    - Comfy dtype: CAMERACTRL_POSES
    - The resulting camera control pose, representing the combined effect of the specified motions and parameters on the camera's path in the animation.
    - Python dtype: list[list[float]]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
