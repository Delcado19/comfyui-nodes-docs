# Documentation
- Class name: Mask Bounding Box Aspect Ratio
- Category: essentials/mask
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Mask Bounding Box Aspect Ratio is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- padding
    - The padding input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blur
    - The blur input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- transpose
    - The transpose input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_blurred
    - The mask_blurred output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- x
    - The x output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
