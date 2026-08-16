# Documentation
- Class name: GenerateTracks
- Category: model/conditioning/wan/move
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate Video Tracks is a ComfyUI node registered by `comfy_extras.nodes_wanmove`. The live metadata did not provide a longer description.

# Input types
## Required
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
    - Normalized X coordinate (0-1) for start position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - Normalized Y coordinate (0-1) for start position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - Normalized X coordinate (0-1) for end position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - Normalized Y coordinate (0-1) for end position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_frames
    - The num_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- num_tracks
    - The num_tracks input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- track_spread
    - Normalized distance between tracks. Tracks are spread perpendicular to the motion direction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bezier
    - Enable Bezier curve path using the mid point as control point.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mid_x
    - Normalized X control point for Bezier curve. Only used when 'bezier' is enabled.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mid_y
    - Normalized Y control point for Bezier curve. Only used when 'bezier' is enabled.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation
    - Controls the timing/speed of movement along the path.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- track_mask
    - Optional mask to indicate visible frames.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- TRACKS
    - The TRACKS output is produced by this node.
    - Comfy dtype: TRACKS
    - Python dtype: object
- track_length
    - The track_length output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
