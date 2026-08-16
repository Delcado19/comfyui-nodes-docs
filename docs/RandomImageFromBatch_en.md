# Documentation
- Class name: RandomImageFromBatch
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Picks a sequence of frames from an image or mask batch within a selected index range. At randomness=0 the picks are evenly spaced across the range; at randomness=1 they are uniformly random without replacement; values in between blend linearly. Output is always sorted by batch index. Negative indices count from the end (-1 = last).

# Input types
## Required
- input
    - Image or mask batch to sample from.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object
- start_index
    - Inclusive start of the sampling range. Negative values count from the end.
    - Comfy dtype: INT
    - Python dtype: int
- end_index
    - Inclusive end of the sampling range. -1 means the last frame.
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - How many frames to pick from the range.
    - Comfy dtype: INT
    - Python dtype: int
- randomness
    - 0 = evenly spaced across the range, 1 = uniformly random without replacement, in-between = linear blend (jittered even spacing).
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_distance
    - Minimum gap (in frames) between consecutive picks. 0 = no minimum. Picks are pushed forward to satisfy this; later picks may clamp to the range end.
    - Comfy dtype: INT
    - Python dtype: int
- max_distance
    - Maximum gap (in frames) between consecutive picks. 0 = no maximum. Picks are pulled in to satisfy this, which may compress the sequence toward the start.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Random seed for reproducible sampling. Ignored when randomness is 0.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
