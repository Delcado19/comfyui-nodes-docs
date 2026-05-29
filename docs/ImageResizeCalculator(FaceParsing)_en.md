# Documentation
- Class name: ImageResizeCalculator
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ImageResizeCalculator node aims to intelligently resize images while maintaining the aspect ratio, meeting specific requirements such as target dimensions and alignment to multiples of 8, which is critical for certain image processing tasks.

# Input types
## Required
- image
    - The image parameter is required as it is the primary input for the node's operation. It determines the source material to be processed, affecting the node's output dimensions and calculations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_size
    - The target_size parameter specifies the desired dimensions of the resized image. It plays a crucial role in the resizing process, directly influencing the final dimensions and scaling calculations.
    - Comfy dtype: INT
    - Python dtype: int
- force_8x
    - The force_8x parameter determines whether the resized dimensions should be aligned to multiples of 8. This is especially important for certain image processing algorithms that benefit from such alignment.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- width
    - The width output provides the new width of the resized image, which is a direct result of the node's resizing calculations.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output corresponds to the new height of the resized image, another key result of the resizing process.
    - Comfy dtype: INT
    - Python dtype: int
- min
    - The minimum value output indicates the smaller of the two dimensions after resizing, providing insight into the aspect ratio of the resized image.
    - Comfy dtype: INT
    - Python dtype: int
- scale
    - The scale output represents the scaling factor from the original width to the new width, a key value for understanding the resizing transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale_r
    - The scale_r output represents the reciprocal of the scaling factor from the original height to the new height, providing a comprehensive understanding of the vertical resizing aspect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
