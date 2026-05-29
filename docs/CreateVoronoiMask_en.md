# Documentation
- Class name: CreateVoronoiMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The method 'createvoronoi' generates a Voronoi mask, a geometric pattern useful for various image processing tasks. It leverages the randomness of Voronoi diagrams to create unique and complex patterns, adjustable by point count, line width, and transition speed between start and end points.

# Input types
## Required
- frames
    - Parameter 'frames' determines the number of frames generated in the Voronoi mask sequence. It is essential for defining the length of the output animation or pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_points
    - Parameter 'num_points' specifies the number of points used to create the Voronoi diagram. It directly affects the complexity and detail of the generated mask.
    - Comfy dtype: INT
    - Python dtype: int
- line_width
    - Parameter 'line_width' controls the thickness of lines in the Voronoi mask. It is a key factor in the visibility and prominence of pattern features.
    - Comfy dtype: INT
    - Python dtype: int
- speed
    - Parameter 'speed' determines the rate at which points transition from the start position to the end position. It influences dynamic motion in the mask sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_width
    - Parameter 'frame_width' sets the width of each frame in the mask sequence. It is crucial for defining the output aspect ratio and overall size.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - Parameter 'frame_height' determines the height of each frame in the mask sequence. It works with 'frame_width' to define the overall shape of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - Output parameter 'mask' represents the generated Voronoi mask as a tensor. It is a binary image with the mask pattern encoded, ready for further processing or application.
    - Comfy dtype: TORCH.TENSOR
    - Python dtype: torch.Tensor
- mask_inverted
    - Output parameter 'mask_inverted' provides an inverted version of the generated Voronoi mask. This is useful for creating complementary patterns or effects in image processing.
    - Comfy dtype: TORCH.TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
