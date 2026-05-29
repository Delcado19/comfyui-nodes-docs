
# Documentation
- Class name: `Color Clip ADE20k`
- Category: `Bmad/image`
- Output node: `False`

The Color Clip ADE20k node is specifically designed for adjusting image colors based on the ADE20K dataset, allowing class-specific color clipping. It modifies image colors to match predefined colors associated with ADE20K class names, enhancing the aesthetics of images or the practicality of visual analysis.

# Input types
## Required
- image
    - The image that requires color clipping. It serves as the basis for color modification, and the clipping operation will be applied to this image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- target
    - Defines the target operation for color clipping, such as converting to black, white, or keeping the original color.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- complement
    - Specifies the complementary operation to the target operation, providing additional control for the color clipping process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- class_name
    - Specifies the ADE20K class name whose associated color will be used for clipping. This determines the target color for the clipping operation, aligning the image's aesthetics with the typical color of that class.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting image after the color clipping operation, demonstrating the applied color adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ColorClipADE20K(ColorClip):
    @classmethod
    def INPUT_TYPES(s):
        types = super().get_types(advanced=False)
        types["required"].pop("color")
        types["required"]["class_name"] = (ade20k_class_names, {"default": 'animal, animate being, beast, brute, creature, fauna'})
        return types

    def color_clip(self, image, class_name, target, complement):
        clip_color = list((ADE20K_dic[class_name]*255).astype(np.uint8))
        image = self.clip(image, clip_color, target, complement)
        return (image,)

```
