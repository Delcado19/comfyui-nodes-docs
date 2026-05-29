
# Documentation
- Class name: Color Clip
- Category: Bmad/image
- Output node: False

The Color Clip node aims to modify colors in an image based on specified target and supplementary operations, potentially using additional color parameters for advanced adjustments. It abstracts the complexity of color operations, providing a simple and direct way to achieve the desired visual effects.

# Input types
## Required
- image
    - The image to be processed is the primary input for color operations, determining the visual output of the node. Changes in image colors are directly influenced by the specified operations and color parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target
    - Specifies the target of the color operation, such as converting to black or white, or making no changes. It defines the primary operation performed on image colors, directly affecting the visual effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- complement
    - Defines complementary operations to the target, providing an additional layer of color adjustment. This parameter works in conjunction with the target to refine the achieved color effect, influencing the final appearance of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- color
    - The base color used for image operations. It plays a crucial role in determining the result of the color clipping operation, as it sets the reference standard for color adjustments.
    - Comfy dtype: COLOR
    - Python dtype: List[int]

# Output types
- image
    - The resulting image after color operations. It reflects the changes made based on the specified target, supplementary, and color parameters, demonstrating the effects of the applied operations and adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ColorClipSimple(ColorClip):
    @classmethod
    def INPUT_TYPES(s):
        return super().get_types(advanced=False)

    def color_clip(self, image, color, target, complement):
        image = self.clip(image, color, target, complement)
        return (image,)

```
