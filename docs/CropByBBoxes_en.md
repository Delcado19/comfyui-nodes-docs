# Documentation
- Class name: CropByBBoxes
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Crop and resize regions from the input image batch based on provided bounding boxes.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes input is used by this node during execution.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object
- output_width
    - Width each crop is resized to.
    - Comfy dtype: INT
    - Python dtype: int
- output_height
    - Height each crop is resized to.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - Extra padding in pixels added on each side of the bbox before cropping.
    - Comfy dtype: INT
    - Python dtype: int
- keep_aspect
    - Whether to stretch the crop to fit the output size, or pad with black pixels to preserve aspect ratio.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- IMAGE
    - All crops stacked into a single image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
