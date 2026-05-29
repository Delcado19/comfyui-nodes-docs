# Constrain Image for Video 🐍
## Documentation
- Class name: ConstrainImageforVideo|pysssss
- Category: image
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

This node resizes images to fit specified maximum and minimum dimensions while maintaining aspect ratio. It provides the option to crop images if necessary to meet size constraints.

## Input types
### Required
- images
    - Images to be processed. They will be resized to fit the specified size constraints while maintaining their aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- max_width
    - The maximum allowed width for images. Images with width exceeding this value will be resized to this width.
    - Comfy dtype: INT
    - Python dtype: int
- max_height
    - The maximum allowed height for images. Images with height exceeding this value will be resized to this height.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
    - The minimum allowed width for images. Images with width less than this value will be resized to this width.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
    - The minimum allowed height for images. Images with height less than this value will be resized to this height.
    - Comfy dtype: INT
    - Python dtype: int
- crop_if_required
    - Determines whether to crop images when resizing is insufficient to meet size constraints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

## Output types
- IMAGE
    - Comfy dtype: IMAGE
    - Processed images, resized and cropped if necessary to fit the specified size constraints.
    - Python dtype: List[torch.Tensor]

## Usage tips
- Infra type: GPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
