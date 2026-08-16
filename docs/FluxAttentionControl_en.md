# Documentation
- Class name: FluxAttentionControl
- Category: ControlAltAI Nodes/Flux Region
- Output node: False
- Repo Ref: https://github.com/gseth/ControlAltAI-Nodes

Quality of Life Nodes from ControlAltAI. Flux Resolution Calculator, Flux Sampler, Flux Union ControlNet Apply, Noise Plus Blend, Boolean Logic, and Flux Region Nodes.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- condition
    - The condition input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent_dimensions
    - The latent_dimensions input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- region1
    - The region1 input is used by this node during execution.
    - Comfy dtype: REGION
    - Python dtype: object
- number_of_regions
    - The number_of_regions input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- enabled
    - The enabled input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- feather_radius1
    - The feather_radius1 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- region2
    - The region2 input is used by this node during execution.
    - Comfy dtype: REGION
    - Python dtype: object
- feather_radius2
    - The feather_radius2 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region3
    - The region3 input is used by this node during execution.
    - Comfy dtype: REGION
    - Python dtype: object
- feather_radius3
    - The feather_radius3 input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
