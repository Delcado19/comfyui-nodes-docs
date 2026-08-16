# Documentation
- Class name: ControlNetInpaintingAliMamaApply
- Category: model/conditioning/controlnet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Apply ControlNet Inpainting (AliMama) is a ComfyUI node registered by `comfy_extras.nodes_controlnet`. The live metadata did not provide a longer description.

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- control_net
    - The control_net input is used by this node during execution.
    - Comfy dtype: CONTROL_NET
    - Python dtype: object
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
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

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
