# Documentation
- Class name: Quantize
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Quantize node aims to reduce the number of colors used in an image, a process known as color quantization. It achieves this by mapping the continuous color range in a given image to a specified palette of a finite number of colors. The node supports multiple dithering techniques to improve the visual quality of the quantized image, such as Floyd-Steinberg dithering and Bayer dithering of various orders. The node's functionality is essential for applications that wish to reduce color depth, such as when creating smaller image files or achieving compatibility with certain display technologies.

# Input types
## Required
- image
    - The image parameter is the input tensor representing the image to be quantized. It is a critical part of the entire process, as the whole workflow revolves around reducing the color palette of this image. The image tensor should be in RGB format and is expected to be a floating-point representation normalized between 0 and 1.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- colors
    - The colors parameter specifies the number of colors to reduce the image palette to. It plays an important role in determining the final quality and file size of the quantized image. A smaller number of colors will result in a noticeable reduction in file size but may also lead to a loss of image detail.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- dither
    - The dither parameter determines the dithering technique to apply during the quantization process. Dithering can help create more visually pleasing results by diffusing quantization errors. Available options include 'none', 'floyd-steinberg', and 'bayer' dithering of various orders.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- quantized_image
    - The quantized image output is the result of the color quantization process. It is a tensor representing the image with a reduced color palette. This output tensor is essential for further processing or saving the image in formats that support reduced color depth.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
