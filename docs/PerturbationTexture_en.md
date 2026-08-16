# Documentation
- Class name: PerturbationTexture
- Category: ControlAltAI Nodes/Image
- Output node: False
- Repo Ref: https://github.com/gseth/ControlAltAI-Nodes

Quality of Life Nodes from ControlAltAI. Flux Resolution Calculator, Flux Sampler, Flux Union ControlNet Apply, Noise Plus Blend, Boolean Logic, and Flux Region Nodes.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- noise_scale
    - The noise_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- texture_strength
    - The texture_strength input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- texture_type
    - The texture_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- frequency
    - The frequency input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- perturbation_factor
    - The perturbation_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_mask
    - The use_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- textured_image_output
    - The textured_image_output output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- texture_layer
    - The texture_layer output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
