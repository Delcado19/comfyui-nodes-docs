# Documentation
- Class name: Painter
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Painter is a ComfyUI node registered by `comfy_extras.nodes_painter`. The live metadata did not provide a longer description.

# Input types
## Required
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bg_color
    - The bg_color input is used by this node during execution.
    - Comfy dtype: COLOR
    - Python dtype: object
## Optional
- image
    - Optional base image to paint over
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
