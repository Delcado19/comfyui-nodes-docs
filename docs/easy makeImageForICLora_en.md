# Documentation
- Class name: easy makeImageForICLora
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

make Image for ICLora to Re-paint

# Input types
## Required
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - The direction input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pixels
    - The pixel of the output image is not set when it is 0
    - Comfy dtype: INT
    - Python dtype: int
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_1
    - The mask_1 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_2
    - The mask_2 input is used by this node during execution.
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
- context_mask
    - The context_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- x
    - The x output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
