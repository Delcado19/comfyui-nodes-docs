# Documentation
- Class name: RegionMaskProcessor
- Category: ControlAltAI Nodes/Flux Region
- Output node: False
- Repo Ref: https://github.com/gseth/ControlAltAI-Nodes

Quality of Life Nodes from ControlAltAI. Flux Resolution Calculator, Flux Sampler, Flux Union ControlNet Apply, Noise Plus Blend, Boolean Logic, and Flux Region Nodes.

# Input types
## Required
- mask1
    - The mask1 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bbox1
    - The bbox1 input is used by this node during execution.
    - Comfy dtype: BBOX
    - Python dtype: object
- blur_radius
    - The blur_radius input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feather_edges
    - The feather_edges input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- number_of_regions
    - The number_of_regions input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask2
    - The mask2 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bbox2
    - The bbox2 input is used by this node during execution.
    - Comfy dtype: BBOX
    - Python dtype: object
- mask3
    - The mask3 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bbox3
    - The bbox3 input is used by this node during execution.
    - Comfy dtype: BBOX
    - Python dtype: object

# Output types
- processed_mask1
    - The processed_mask1 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- processed_bbox1
    - The processed_bbox1 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- processed_mask2
    - The processed_mask2 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- processed_bbox2
    - The processed_bbox2 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- processed_mask3
    - The processed_mask3 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- processed_bbox3
    - The processed_bbox3 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- preview_image
    - The preview_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- region_count
    - The region_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
