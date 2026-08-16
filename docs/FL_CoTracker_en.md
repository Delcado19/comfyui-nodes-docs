# Documentation
- Class name: FL_CoTracker
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

https://github.com/facebookresearch/co-tracker 
If you get an OOM error, try lowering the `grid_size`.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tracking_points
    - The tracking_points input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- grid_size
    - Number of divisions along both width and height to create a grid of tracking points.
    - Comfy dtype: INT
    - Python dtype: int
- max_num_of_points
    - The max_num_of_points input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- tracking_mask
    - Mask for grid coordinates
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- confidence_threshold
    - The confidence_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_distance
    - Minimum distance between tracking points
    - Comfy dtype: INT
    - Python dtype: int
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- enable_backward
    - The enable_backward input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- tracking_results
    - The tracking_results output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- image_with_results
    - The image_with_results output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
