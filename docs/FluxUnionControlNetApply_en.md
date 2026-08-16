# Documentation
- Class name: FluxUnionControlNetApply
- Category: ControlAltAI Nodes/Flux
- Output node: False
- Repo Ref: https://github.com/gseth/ControlAltAI-Nodes

Quality of Life Nodes from ControlAltAI. Flux Resolution Calculator, Flux Sampler, Flux Union ControlNet Apply, Noise Plus Blend, Boolean Logic, and Flux Region Nodes.

# Input types
## Required
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- control_net
    - The control_net input is used by this node during execution.
    - Comfy dtype: CONTROL_NET
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- union_controlnet_type
    - The union_controlnet_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
