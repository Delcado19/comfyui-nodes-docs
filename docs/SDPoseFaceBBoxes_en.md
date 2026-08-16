# Documentation
- Class name: SDPoseFaceBBoxes
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SDPose Face Bounding Boxes is a ComfyUI node registered by `comfy_extras.nodes_sdpose`. The live metadata did not provide a longer description.

# Input types
## Required
- keypoints
    - The keypoints input is used by this node during execution.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: object
- scale
    - Multiplier for the bounding box area around each detected face.
    - Comfy dtype: FLOAT
    - Python dtype: float
- force_square
    - Expand the shorter bbox axis so the crop region is always square.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- bboxes
    - Face bounding boxes per frame, compatible with SDPoseKeypointExtractor bboxes input.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
