# Documentation
- Class name: ImageCrop
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageCrop node is designed to manipulate images by cropping them to a specified region. It allows selection of a rectangular portion of the image defined by the given width, height, and coordinates (x, y). The node's functionality is essential for focusing on regions of interest within an image, which is critical for tasks such as object detection or image analysis.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It is the foundation of the node's operation, as it is the subject of the cropping action. The content and format of the image significantly affect the node's execution and the resulting cropped image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or numpy.ndarray
- width
    - The width parameter specifies the width of the cropping area in pixels. It is a critical aspect of the node's functionality, as it determines the horizontal extent of the cropped region. The width value directly affects the dimensions of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the vertical extent of the cropping area in pixels. It plays a key role in the node's operation, as it determines the vertical size of the output image. The choice of height value is crucial to the final appearance of the cropped image.
    - Comfy dtype: INT
    - Python dtype: int
- x
    - The x parameter represents the horizontal starting point of the cropping operation within the image. It is critical, as it sets the left edge of the cropping region. The x value directly affects the portion of the image selected for cropping.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y parameter determines the vertical starting point of the cropping operation. It is important, as it sets the top edge of the region to be cropped. The y value determines the exact portion of the image that will be included in the final output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_image
    - The cropped image output parameter represents the result of the cropping operation. It is a significant output, as it contains the final image cropped to the specified dimensions. The quality and content of the cropped image are directly related to the input parameters provided to the node.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
