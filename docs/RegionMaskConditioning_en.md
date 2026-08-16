# Documentation
- Class name: RegionMaskConditioning
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
- conditioning1
    - The conditioning1 input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- number_of_regions
    - The number_of_regions input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- strength1
    - The strength1 input is used by this node during execution.
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
- conditioning2
    - The conditioning2 input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- strength2
    - The strength2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask3
    - The mask3 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bbox3
    - The bbox3 input is used by this node during execution.
    - Comfy dtype: BBOX
    - Python dtype: object
- conditioning3
    - The conditioning3 input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- strength3
    - The strength3 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- region1
    - The region1 output is produced by this node.
    - Comfy dtype: REGION
    - Python dtype: object
- region2
    - The region2 output is produced by this node.
    - Comfy dtype: REGION
    - Python dtype: object
- region3
    - The region3 output is produced by this node.
    - Comfy dtype: REGION
    - Python dtype: object
- region_count
    - The region_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- preview_image
    - The preview_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
