# Documentation
- Class name: RTDETR_detect
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Run Real-Time Detection (RT-DETR) is a ComfyUI node registered by `comfy_extras.nodes_rtdetr`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
    - The threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- class_name
    - Filter detections by class. Set to 'all' to disable filtering.
    - Comfy dtype: COMBO
    - Python dtype: object
- max_detections
    - Maximum number of detections to return per image. In order of descending confidence score.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
