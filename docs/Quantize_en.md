# Documentation
- Class name: Quantize
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Quantize node aims to reduce the number of colors in an image, a process called color quantization. It achieves this by mapping the image’s colors to a specified number of colors, which is useful for creating a more stylized or retro look. The node also offers an option to apply dithering, which helps smooth transitions between colors and reduce the appearance of color banding.

# Input types
## Required
- image
- The image parameter represents the input tensor of the image to be quantized. It plays a crucial role in the node’s operation, as the entire quantization process is applied to this image. The quality and characteristics of the quantized image largely depend on the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- colors
- The color parameter specifies the number of colors to reduce the image to. This is an important setting because it directly affects the level of detail and appearance of the quantized image. More colors preserve more detail but increase file size.
    - Comfy dtype: INT
    - Python dtype: int
- dither
- The dithering parameter determines whether a dithering algorithm is applied during quantization. Dithering can help create a more visually appealing result by reducing the visibility of color banding. Choosing between 'none' and 'floyd-steinberg' affects the final image quality.
    - Comfy dtype: COMBO[none, floyd-steinberg]
    - Python dtype: str

# Output types
- quantized_image
- The quantized image output is the result of the color quantization process. It is a tensor representing the image with reduced color count. This output is important because it is the direct result of the node’s operation and can be used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
