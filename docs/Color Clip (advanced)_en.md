
# Documentation
- Class name: Color Clip (advanced)
- Category: Bmad/image
- Output node: False

This node is dedicated to adjusting colors in an image based on a set of advanced criteria, including the ability to convert specific colors or apply complementary color adjustments. It extends basic color clipping functionality by allowing finer control over color operations, enabling highly customized visual effects.

# Input types
## Required
- image
    - Image to be processed for color clipping. It serves as the primary input for applying color conversion, determining the visual outcome of the operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- target
    - Desired color conversion for the target area of the image. It defines how the reference color region should be altered.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- complement
    - Color conversion for areas in the image that do not match the reference color. It allows differentiated handling of image regions based on color matching.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- color
    - Reference color guiding the clipping operation. It identifies the parts of the image that should undergo color conversion.
    - Comfy dtype: COLOR
    - Python dtype: List[int]
## Optional
- color_a
    - Optional color parameter, providing additional color options for the conversion. It offers further customization for the clipping operation.
    - Comfy dtype: COLOR
    - Python dtype: List[int]
- color_b
    - Another optional color parameter, offering an alternative color option for the conversion, enhancing the flexibility of the color clipping process.
    - Comfy dtype: COLOR
    - Python dtype: List[int]

# Output types
- image
    - Resulting image after the color clipping operation. It reflects the applied color conversion, showcasing the visual effect achieved through the process.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ColorClipAdvanced(ColorClip):
    @classmethod
    def INPUT_TYPES(s):
        return super().get_types(advanced=True)

    def color_clip(self, image, color, target, complement, color_a=None, color_b=None):
        image = self.clip(image, color, target, complement, color_a, color_b)
        return (image,)

```
