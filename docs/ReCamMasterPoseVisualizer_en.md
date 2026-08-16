# Documentation
- Class name: ReCamMasterPoseVisualizer
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Visualizes the camera poses, from Animatediff-Evolved CameraCtrl Pose  
or a .txt file with RealEstate camera intrinsics and coordinates, in a 3D plot.

# Input types
## Required
- camera_poses
    - The camera_poses input is used by this node during execution.
    - Comfy dtype: CAMERAPOSES
    - Python dtype: object
- base_xval
    - The base_xval input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zval
    - The zval input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- arrow_length
    - The arrow_length input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
