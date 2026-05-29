# Documentation
- Class name: MakeInterpolationStateList
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

This node is designed to manage and create interpolation state lists, which are crucial for the frame interpolation process. It determines which frames are included or skipped during interpolation, thereby optimizing the computational workload and ensuring smooth and coherent frame transitions.

# Input types
## Required
- frame_indices
    - This parameter specifies a comma-separated list of frame indices that the node will use to determine which frames are included or skipped during the interpolation process. This is crucial for the node to operate correctly and directly affects the results of frame interpolation.
    - Comfy dtype: STRING
    - Python dtype: List[int]
## Optional
- is_skip_list
    - This parameter controls whether the specified frame indices should be skipped or included during the interpolation process. It plays an important role in the overall operation of the node because it determines the behavior of the node during frame selection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- INTERPOLATION_STATES
    - The output of this node is an InterpolationStateList object that encapsulates the decisions about which frames to include or skip. This object is crucial for subsequent operations that rely on these decisions to perform the actual frame interpolation.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: InterpolationStateList

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
