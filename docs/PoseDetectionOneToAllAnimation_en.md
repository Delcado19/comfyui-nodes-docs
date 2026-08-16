# Documentation
- Class name: PoseDetectionOneToAllAnimation
- Category: WanAnimatePreprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanAnimatePreprocess

Specialized pose detection and alignment for OneToAllAnimation model https://github.com/ssj9596/One-to-All-Animation. Detects poses from input images and aligns them based on a reference image if provided.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: POSEMODEL
    - Python dtype: object
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - Width of the generation
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the generation
    - Comfy dtype: INT
    - Python dtype: int
- align_to
    - Alignment mode for poses
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- draw_face_points
    - Whether to draw face keypoints on the pose images
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- draw_head
    - Whether to draw head keypoints on the pose images
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- ref_image
    - Optional reference image for pose retargeting
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- pose_images
    - The pose_images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ref_pose_image
    - The ref_pose_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ref_image
    - The ref_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ref_mask
    - The ref_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanAnimatePreprocess)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
