# Documentation
- Class name: SAM3_TrackToMask
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SAM3 Track to Mask is a ComfyUI node registered by `comfy_extras.nodes_sam3`. The live metadata did not provide a longer description.

# Input types
## Required
- track_data
    - The track_data input is used by this node during execution.
    - Comfy dtype: SAM3_TRACK_DATA
    - Python dtype: object
- object_indices
    - Comma-separated object indices to include (e.g. '0,2,3'). Empty = all objects.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
