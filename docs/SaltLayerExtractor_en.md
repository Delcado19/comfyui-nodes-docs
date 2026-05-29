
# Documentation
- Class name: SaltLayerExtractor
- Category: SALT/Scheduling/Parallax Motion
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltLayerExtractor node is specifically designed to extract data from a specific layer within a set of animation layers, with a focus on parallax motion scheduling. It processes the input animation layers and generates schedules for scale, x, and y values, facilitating the creation of dynamic, multi-dimensional animations.

# Input types
## Required
- float_layers
    - This is a list of animation layers, each containing frame data for scale, x, and y values. This input is critical for determining which specific layer data to extract and schedule.
    - Comfy dtype: LIST
    - Python dtype: List[List[float]]
- layer_index
    - Specifies the index of which layer to extract data from the provided animation layer list. This allows targeted extraction of animation data, enabling precise control over parallax motion scheduling.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- zoom_schedule_lsit
    - A list of scale values extracted from the specified animation layer, used for scheduling scaling effects in parallax motion.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- x_schedule_list
    - A list of x-coordinate values extracted from the specified animation layer, used for scheduling horizontal movement in parallax motion.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- y_schedule_list
    - A list of y-coordinate values extracted from the specified animation layer, used for scheduling vertical movement in parallax motion.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
