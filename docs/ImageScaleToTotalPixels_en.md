# Documentation
- Class name: ImageScaleToTotalPixels
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageScaleToTotalPixels node is designed to resize an image to a specified total number of pixels. It offers multiple upscaling methods to ensure image quality is maintained during the scaling process. The main goal of this node is to provide a simple and efficient way to scale images for various applications without compromising visual fidelity.

# Input types
## Required
- image
    - The image parameter is crucial for the operation of the node, as it is the input that the node will process. It is the original data that will be upscaled to the desired total pixels, and its quality directly affects the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- upscale_method
    - The upscale_method parameter determines how the image will be resized. It is essential for controlling the quality of the upscaled image, allowing users to choose between different algorithms that may yield different results depending on the image content.
    - Comfy dtype: STRING
    - Python dtype: str
- megapixels
    - The megapixels parameter defines the target total number of pixels for the upscaled image. It is a key factor in the scaling process, determining the final dimensions of the image, i.e., its width and height.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
    - The upscaled_image output represents the result of the scaling process. It is the main output of the node, containing the image resized to the specified total number of pixels, following the chosen upscaling method to maintain quality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
