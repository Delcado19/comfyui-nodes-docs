# Documentation
- Class name: ImageResize
- Category: image
- Output node: False
- Repo Ref: https://github.com/palant/image-resize-comfyui

The ImageResize node is designed to resize images according to specified standards, ensuring that output images meet the required size and aspect ratio requirements. It offers multiple resizing operations such as cropping, padding, and scaling, and adapts image resolution to suit different use cases.

# Input types
## Required
- pixels
    - The input image data, which will be resized or processed by the node. It is key to the node's operation as it serves as the foundation for all transformation operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- action
    - Determines the type of resizing operation to be performed on the input image. This parameter is critical as it specifies how the image is modified to meet the desired output specifications.
    - Comfy dtype: COMBO[ACTION_TYPE_RESIZE, ACTION_TYPE_CROP, ACTION_TYPE_PAD]
    - Python dtype: str
## Optional
- smaller_side
    - Specifies the length of the shorter side of the resized image. It plays an important role in controlling the dimensions of the output image, especially when downscaling or upscaling the input image.
    - Comfy dtype: INT
    - Python dtype: int
- larger_side
    - Defines the length of the longer side of the resized image. When used, it works together with 'smaller_side' to determine the final dimensions of the resized image.
    - Comfy dtype: INT
    - Python dtype: int
- scale_factor
    - Applies a uniform scaling factor to the input image, which is important for uniformly increasing or decreasing image size without changing its aspect ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resize_mode
    - Controls the direction of the resizing operation: downscale, upscale, or non-uniform resizing based on 'scale_factor'. This parameter is critical in managing the node's scaling behavior.
    - Comfy dtype: COMBO[RESIZE_MODE_DOWNSCALE, RESIZE_MODE_UPSCALE, RESIZE_MODE_ANY]
    - Python dtype: str
- side_ratio
    - Sets the desired aspect ratio of the output image. This parameter is very important as it ensures the image maintains a specific shape, which is critical for compatibility with various display or processing requirements.
    - Comfy dtype: STRING
    - Python dtype: str
- crop_pad_position
    - Affects the position of cropping or padding in the image, which is critical for fine-tuning visual output to meet specific aesthetic or functional needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pad_feathering
    - Adjusts the feathering effect applied to padding, which is important for creating smooth transitions between the original image area and the padded area, improving overall visual quality.
    - Comfy dtype: INT
    - Python dtype: int
- mask_optional
    - An optional mask that can be applied to the image to control which parts of the image are processed. This is important for scenarios requiring selective image operations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- pixels
    - The image processed through the resizing operation. This is the primary output of the node, representing the final result of the image processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - An optional output mask corresponding to the processed image, which can be used to apply further operations or effects based on the masked regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/palant/image-resize-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
