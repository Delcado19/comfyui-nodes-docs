# Load CameraCtrl Poses (File) 🎭🅐🅓②
## Documentation
- Class name: ADE_LoadCameraPoses
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The `ADE_LoadCameraPoses` node is designed to load camera control poses from a specified file, facilitating the manipulation and animation of camera positions within the Animate Diff framework. It serves as a foundational element for creating dynamic and complex camera movements for animation sequences.

## Input types
### Required
- pose_filename
    - Specifies the filename from which to load camera control poses. This filename should correspond to a file containing the desired camera poses, enabling the node to retrieve and utilize these poses for animation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
- cameractrl_poses
    - Comfy dtype: CAMERACTRL_POSES
    - Outputs a series of camera control poses, structured as a list of floating-point numbers representing the camera's position, orientation, and other relevant parameters in the animation context.
    - Python dtype: list[list[float]]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
