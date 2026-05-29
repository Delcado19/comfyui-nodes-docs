# Documentation
- Class name: ImageScale
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageScale node aims to increase the resolution of digital images using various upsampling methods. It provides users with a simple interface to scale images by specifying new dimensions or maintaining aspect ratio. The node supports a range of upsampling algorithms suitable for different use cases to achieve high‑quality image enlargement.

# Input types
## Required
- image
- The image parameter is the input digital image that the node will process. It is fundamental because all node operations revolve around improving this image's resolution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- upscale_method
- The upscale_method parameter determines the algorithm used to enlarge the image. It is crucial because it directly affects the quality and style of the upsampling.
    - Comfy dtype: STRING
    - Python dtype: str
- crop
- The crop parameter defines whether and how the image is cropped after upsampling. It is essential for controlling the final composition of the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- width
- The width parameter specifies the new width of the scaled image. It matters because it determines one of the dimensions to which the image will be resized.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height parameter specifies the new height of the scaled image. Its importance lies in controlling the vertical dimension of the output image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- upscaled_image
- The upscaled_image is the node's output, representing the image enlarged using the specified method. It is the result of the node's processing and the direct outcome of the upsampling operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
