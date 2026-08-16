# Documentation
- Class name: NoisePlusBlend
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
- blend_opacity
    - The blend_opacity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- blended_image_output
    - The blended_image_output output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- noise_output
    - The noise_output output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
