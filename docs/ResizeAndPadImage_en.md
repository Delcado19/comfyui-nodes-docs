# Documentation
- Class name: ResizeAndPadImage
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Resize And Pad Image is a ComfyUI node registered by `comfy_extras.nodes_images`. The live metadata did not provide a longer description.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_width
    - The target_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding_color
    - The padding_color input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- interpolation
    - The interpolation input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
