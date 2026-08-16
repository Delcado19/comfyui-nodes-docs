# Documentation
- Class name: RenderNLFPoses
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SCAIL-Pose

ComfyUI nodes for SCAIL pose input processing

# Input types
## Required
- nlf_poses
    - Input poses for the model
    - Comfy dtype: NLFPRED
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- dw_poses
    - Optional DW pose model for 2D drawing
    - Comfy dtype: DWPOSES
    - Python dtype: object
- ref_dw_pose
    - Optional reference DW pose model for alignment
    - Comfy dtype: DWPOSES
    - Python dtype: object
- draw_face
    - Whether to draw face keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- draw_hands
    - Whether to draw hand keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- render_device
    - Taichi device to use for rendering
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale_hands
    - Whether to scale hand keypoints when aligning DW poses
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- render_backend
    - Rendering backend to use
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-SCAIL-Pose)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
