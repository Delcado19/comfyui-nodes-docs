# Documentation
- Class name: SDPoseDrawKeypoints
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SDPose Draw Keypoints is a ComfyUI node registered by `comfy_extras.nodes_sdpose`. The live metadata did not provide a longer description.

# Input types
## Required
- keypoints
    - The keypoints input is used by this node during execution.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object
- draw_body
    - The draw_body input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- draw_hands
    - The draw_hands input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- draw_face
    - The draw_face input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- draw_feet
    - The draw_feet input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- stick_width
    - The stick_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- face_point_size
    - The face_point_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- score_threshold
    - The score_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- draw_head
    - The draw_head input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
