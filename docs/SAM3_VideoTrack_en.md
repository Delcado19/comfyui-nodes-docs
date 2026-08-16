# Documentation
- Class name: SAM3_VideoTrack
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Run SAM3 Video Track is a ComfyUI node registered by `comfy_extras.nodes_sam3`. The live metadata did not provide a longer description.

# Input types
## Required
- images
    - Video frames as batched images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- detection_threshold
    - Score threshold for text-prompted detection.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_objects
    - Max tracked objects. Initial masks count toward this limit. 0 uses the internal cap of 64.
    - Comfy dtype: INT
    - Python dtype: int
- detect_interval
    - Run detection every N frames (1=every frame). Higher values save compute.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- initial_mask
    - Mask(s) for the first frame to track (one per object)
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- conditioning
    - Text conditioning for detecting new objects during tracking
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Output types
- track_data
    - The track_data output is produced by this node.
    - Comfy dtype: SAM3_TRACK_DATA
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
