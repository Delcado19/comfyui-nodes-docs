# Documentation
- Class name: Blur
- Category: postprocessing/Filters
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Blur node applies Gaussian blur to images, effectively reducing noise and smoothing edges, which is highly useful in post-processing steps for image analysis and enhancement.

# Input types
## Required
- image
    - The image parameter is required as it is the primary input for the blur operation. It determines the source data to be processed by the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blur_radius
    - The blur radius determines the degree of the blur effect. A larger radius results in more pronounced blurring, which may be important for the overall visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter affects the standard deviation of the Gaussian kernel, directly influencing the smoothness of the blur. This is a key factor in achieving the desired aesthetic effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- blurred_image
    - The output is the blurred image, which is the processed result of the input image after applying Gaussian blur.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
