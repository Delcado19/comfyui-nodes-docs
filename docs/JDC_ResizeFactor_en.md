# Documentation
- Class name: ResizeFactor
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The ResizeFactor node is designed to resize images, scaling up or down by a specified factor. This process is crucial for adapting images to different display requirements or input specifications of subsequent image processing tasks.

# Input types
## Required
- IMAGE
    - The IMAGE parameter is required because it provides the source image to be resized by the node. It directly affects the output and determines the initial resolution and format of the image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- factor
    - The factor parameter is crucial for defining the scaling ratio of the image. It determines how much the image will be enlarged or reduced, thus changing the final dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- resampler
    - The resampler parameter is important for selecting the interpolation method used during resizing. It affects the quality and appearance of the resized image.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- IMAGE
    - The output IMAGE is the result of the resizing process, reflecting the new dimensions and potential quality changes based on the selected resampling method.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
