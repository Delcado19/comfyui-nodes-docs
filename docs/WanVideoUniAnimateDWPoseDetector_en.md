# Documentation
- Class name: WanVideoUniAnimateDWPoseDetector
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- pose_images
    - Pose images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- score_threshold
    - Score threshold for pose detection
    - Comfy dtype: FLOAT
    - Python dtype: float
- stick_width
    - Stick width for drawing keypoints
    - Comfy dtype: INT
    - Python dtype: int
- draw_body
    - Draw body keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- body_keypoint_size
    - Body keypoint size
    - Comfy dtype: INT
    - Python dtype: int
- draw_feet
    - Draw feet keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- draw_hands
    - Draw hand keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- hand_keypoint_size
    - Hand keypoint size
    - Comfy dtype: INT
    - Python dtype: int
- colorspace
    - Color space for the output image
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- handle_not_detected
    - How to handle undetected poses, empty inserts black and repeat inserts previous detection
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- draw_head
    - Draw head keypoints
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- reference_pose_image
    - Reference pose image
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- poses
    - The poses output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_pose
    - The reference_pose output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
