# Documentation
- Class name: easy imageCropFromMask
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- image_crop_multi
    - The image_crop_multi input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_crop_multi
    - The mask_crop_multi input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_smooth_alpha
    - The bbox_smooth_alpha input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- crop_image
    - The crop_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop_mask
    - The crop_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bbox
    - The bbox output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
