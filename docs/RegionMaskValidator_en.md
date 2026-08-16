# Documentation
- Class name: RegionMaskValidator
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
- number_of_regions
    - The number_of_regions input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- min_region_size
    - The min_region_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_overlap
    - The max_overlap input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
- valid_mask1
    - The valid_mask1 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- valid_bbox1
    - The valid_bbox1 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- valid_mask2
    - The valid_mask2 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- valid_bbox2
    - The valid_bbox2 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- valid_mask3
    - The valid_mask3 output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- valid_bbox3
    - The valid_bbox3 output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- valid_region_count
    - The valid_region_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- is_valid
    - The is_valid output is produced by this node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- validation_message
    - The validation_message output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- validation_preview
    - The validation_preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
