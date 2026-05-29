# Constrain Image 🐍
## Documentation
- Class name: ConstrainImage|pysssss
- Category: image
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

This node aims to resize an image to fit within specified maximum and minimum dimensions while maintaining the image's aspect ratio. If the image exceeds the maximum size, it can optionally crop the image.

## Input types
### Required
- images
    - The image to constrain. This parameter is critical as it directly affects the node's core functionality, i.e., resizing and potentially cropping the image to meet the specified dimension constraints.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- max_width
    - Specifies the maximum width the image can have after processing. It plays a key role in determining whether and how the image needs to be resized.
    - Comfy dtype: INT
    - Python dtype: int
- max_height
    - Defines the maximum height the image can have after processing, influencing the resize logic to ensure the image fits within the specified dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
    - Sets the minimum width the image should have, ensuring the image is not resized below this width.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
    - Determines the minimum height the image should have, preventing the image from being resized below this height.
    - Comfy dtype: INT
    - Python dtype: int
- crop_if_required
    - A flag indicating whether the image should be cropped if it exceeds the maximum dimensions, affecting the final output which may alter the image's composition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

## Output types
- image
    - Comfy dtype: IMAGE
    - The processed image, resized and cropped if necessary to fit within the specified constraints.
    - Python dtype: List[Image]

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
