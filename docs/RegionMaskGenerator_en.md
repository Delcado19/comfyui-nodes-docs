# Documentation
- Class name: RegionMaskGenerator
- Category: ControlAltAI Nodes/Flux Region
- Output node: False
- Repo Ref: https://github.com/gseth/ControlAltAI-Nodes

Quality of Life Nodes from ControlAltAI. Flux Resolution Calculator, Flux Sampler, Flux Union ControlNet Apply, Noise Plus Blend, Boolean Logic, and Flux Region Nodes.

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
- number_of_regions
    - The number_of_regions input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- region1_x1
    - The region1_x1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region1_y1
    - The region1_y1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region1_x2
    - The region1_x2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region1_y2
    - The region1_y2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region2_x1
    - The region2_x1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region2_y1
    - The region2_y1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region2_x2
    - The region2_x2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region2_y2
    - The region2_y2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region3_x1
    - The region3_x1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region3_y1
    - The region3_y1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region3_x2
    - The region3_x2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region3_y2
    - The region3_y2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- colored_regions_image
    - The colored_regions_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_preview
    - The bbox_preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask1
    - The mask1 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask2
    - The mask2 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask3
    - The mask3 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- number_of_regions
    - The number_of_regions output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- bbox1
    - The bbox1 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- bbox2
    - The bbox2 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- bbox3
    - The bbox3 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
