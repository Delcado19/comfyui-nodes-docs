# Documentation
- Class name: PixelSort
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

PixelSort node introduces a creative pixel sorting effect to images, reorganizing pixel data according to specified criteria such as hue, saturation, or brightness, enhancing visual impact.

# Input types
## Required
- image
    - Image parameter is required because it supplies the source data for the pixel sorting process, affecting the final output appearance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask parameter is essential for defining the image region affected by the pixel sorting effect, thereby controlling the transformation scope.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - Direction parameter determines the axis of pixel sorting, which can be horizontal or vertical, influencing the overall pattern of the effect.
    - Comfy dtype: COMBO['horizontal', 'vertical']
    - Python dtype: str
- sort_by
    - sort_by parameter decides the sorting criterion, such as hue, saturation, or brightness, shaping the final visual result.
    - Comfy dtype: COMBO['hue', 'saturation', 'value']
    - Python dtype: str
- order
    - Order parameter specifies the sorting direction, either ascending (forward) or descending (backward), altering pixel arrangement.
    - Comfy dtype: COMBO['forward', 'backward']
    - Python dtype: str
## Optional
- span_limit
    - Span limit parameter refines sorting by controlling the number of spans per direction, affecting the granularity of the effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image is the result of the pixel sorting process, reflecting the creative transformation applied to the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
