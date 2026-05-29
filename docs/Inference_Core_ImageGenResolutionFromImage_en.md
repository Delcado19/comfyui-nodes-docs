
# Documentation
- Class name: Inference_Core_ImageGenResolutionFromImage
- Category: ControlNet Preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to compute the generation resolution directly from the input image. It extracts the width and height of the input image and returns these dimensions as the expected image generation resolution, facilitating the resizing of the output image based on the input image's dimensions.

# Input types
## Required
- image
    - The input image for which the generation resolution needs to be computed. The dimensions of this image are used to determine the output resolution, directly affecting the size of the generated image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

# Output types
- IMAGE_GEN_WIDTH (INT)
    - The width value extracted from the input image, used to set the width of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- IMAGE_GEN_HEIGHT (INT)
    - The height value extracted from the input image, used to set the height of the generated image.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
