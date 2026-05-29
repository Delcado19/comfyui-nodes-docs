# Documentation
- Class name: ResizeImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ResizeImage node is designed to resize images according to specified requirements. It skillfully adjusts images to the desired width and height while maintaining the integrity of visual content. The node also provides options to scale images by either dimension, scale to fit within given dimensions while preserving aspect ratio, or center the image after scaling. Additionally, it can generate an average color representation of the image and convert it to a hex code, offering a versatile toolkit for image preprocessing and manipulation.

# Input types
## Required
- width
    - The 'width' parameter is essential for defining the new width of the resized image. It plays a critical role in determining the final dimensions of the image, which can significantly impact the visual output and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter specifies the new height of the resized image. It is crucial for controlling the vertical dimension of the image and works in conjunction with the 'width' parameter to maintain the intended aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- scale_option
    - The 'scale_option' parameter indicates how the image should be resized. It allows scaling by width, height, overall size, or centering within new dimensions, providing flexibility in preserving or altering the image's aspect ratio.
    - Comfy dtype: COMBO['width', 'height', 'overall', 'center']
    - Python dtype: str
- image
    - The 'image' parameter is used to input the image that needs to be resized. It is the core of the node's operation, as this is the actual content that will be manipulated and transformed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- average_color
    - The 'average_color' parameter determines whether to calculate and return the average color of the image. This is useful for creating simplified representations or color-based design decisions.
    - Comfy dtype: COMBO['on', 'off']
    - Python dtype: str
- fill_color
    - The 'fill_color' parameter specifies the color used to fill any empty space after resizing the image to a size larger than its original dimensions. It ensures a consistent background appearance.
    - Comfy dtype: STRING
    - Python dtype: str
- mask
    - The 'mask' parameter is used to apply a mask to the image during the resizing process. This is important for maintaining specific areas of the image visible or hidden as needed.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image

# Output types
- image
    - The 'image' output provides the resized image. This is the primary result of the node's operation, reflecting the transformations applied based on the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- average_image
    - The 'average_image' output is an image of the average color calculated from the input image. It serves as a visual summary of the image's color composition.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- average_hex
    - The 'average_hex' output returns the hex representation of the image's average color, which can be used in various design and color-related applications.
    - Comfy dtype: STRING
    - Python dtype: str
- mask
    - The 'mask' output provides the resized mask image. This is particularly useful when the node is used to manipulate and refine the visibility of specific areas within the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
