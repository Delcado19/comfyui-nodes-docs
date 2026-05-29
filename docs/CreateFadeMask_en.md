# Documentation
- Class name: CreateFadeMask
- Category: KJNodes/deprecated
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CreateFadeMask node is designed to generate a sequence of fade masks that smoothly transition from one opacity level to another. It utilizes interpolation techniques to create visually appealing gradient effects, making it particularly suitable for visual effects and image processing applications.

# Input types
## Required
- invert
    - The 'invert' parameter determines whether the fade mask needs to be inverted, which is crucial for certain visual effects that require reversed opacity transitions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frames
    - The 'frames' parameter specifies the number of frames in the fade mask sequence, which directly affects the duration and spacing of the gradient effect.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' parameter sets the width of each frame in the fade mask, affecting the overall dimensions of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter defines the height of each frame in the fade mask, which is essential for maintaining the aspect ratio and visual consistency of the output.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - The 'interpolation' parameter selects the type of interpolation used for the gradient effect, which can significantly alter the appearance of transitions between opacity levels.
    - Comfy dtype: COMBO['linear', 'ease_in', 'ease_out', 'ease_in_out']
    - Python dtype: str
- start_level
    - The 'start_level' parameter sets the initial opacity level of the fade mask, which is a key factor in determining the starting point of the gradient effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midpoint_level
    - The 'midpoint_level' parameter indicates the opacity level at the midpoint of the fade mask sequence, helping to control the speed of the gradient at the center of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_level
    - The 'end_level' parameter determines the final opacity level of the fade mask, which dictates how the gradient effect concludes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- midpoint_frame
    - The 'midpoint_frame' parameter specifies the frame at which the midpoint of the fade effect occurs, allowing precise control over the timing of the transition.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The output 'mask' is a sequence of fade masks that represent the opacity transition from the start level to the end level, created according to the specified parameters.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
