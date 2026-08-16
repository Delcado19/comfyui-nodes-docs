# Documentation
- Class name: AddNoiseToTrackPath
- Category: conditioning/video_models
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- tracks
    - The tracks input is used by this node during execution.
    - Comfy dtype: TRACKS
    - Python dtype: object
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- noise_x_ratio
    - Multiplier for horizontal noise component
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_y_ratio
    - Multiplier for vertical noise component
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_temporal_ratio
    - Multiplier for temporal (frame-to-frame) noise
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- TRACKS
    - The TRACKS output is produced by this node.
    - Comfy dtype: TRACKS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
