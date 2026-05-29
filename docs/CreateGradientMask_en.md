# Documentation
- Class name: CreateGradientMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CreateGradientMask node is designed to generate gradient masks for various image processing tasks. It creates a mask by computing a linear gradient across the image width, then adjusts the gradient based on the current frame in the frame sequence. This enables dynamic masking effects that can change over time or vary across different parts of the image.

# Input types
## Required
- invert
    - The 'invert' parameter determines whether the gradient mask should be inverted. This is useful for creating complementary masks or applying different effects based on the mask's direction.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frames
    - The 'frames' parameter specifies the number of frames for which masks are generated. It directly affects the batch size of the output and is essential for creating animations or time-varying effects.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' parameter sets the width of the gradient mask in pixels. It is critical for defining the spatial resolution of the mask and influencing the granularity of the gradient.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter sets the height of the gradient mask in pixels. It works together with the 'width' parameter to determine the overall size of the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The output MASK is a tensor representing the gradient mask. It is a key component for subsequent image operations and effect applications.
    - Comfy dtype: TORCH.TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
