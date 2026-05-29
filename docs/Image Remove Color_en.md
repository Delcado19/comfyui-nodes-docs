# Documentation
- Class name: WAS_Image_Remove_Color
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Remove_Color node aims to process images according to user-defined criteria, removing specific colors. It allows identifying and replacing target colors with a specified replacement color to enhance images for further analysis or beautification purposes.

# Input types
## Required
- image
    - The image parameter is required as it is the input that the node will process. It determines the content and format of the color removal operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- target_red
    - The target_red parameter specifies the red component of the color to be removed. It plays a key role in determining the accuracy of the color removal process.
    - Comfy dtype: INT
    - Python dtype: int
- target_green
    - The target_green parameter defines the green component of the color to be removed, affecting the node's ability to isolate and replace the target color.
    - Comfy dtype: INT
    - Python dtype: int
- target_blue
    - The target_blue parameter sets the blue component of the color to be replaced, which is crucial for achieving the desired result in the color removal task.
    - Comfy dtype: INT
    - Python dtype: int
- replace_red
    - The replace_red parameter determines the red component of the replacement color, which is important for the final appearance of the modified image.
    - Comfy dtype: INT
    - Python dtype: int
- replace_green
    - The replace_green parameter sets the green component of the color used to replace the target color, affecting the node's output.
    - Comfy dtype: INT
    - Python dtype: int
- replace_blue
    - The replace_blue parameter specifies the blue component of the color that will replace the original color, which is essential for the node's color change functionality.
    - Comfy dtype: INT
    - Python dtype: int
- clip_threshold
    - The clip_threshold parameter sets the threshold for color difference, which is crucial for the node's ability to distinguish between the target color and other colors.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - output_image represents the processed image where the specified color has been removed, demonstrating the node's ability to alter visual content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Remove_Color:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'target_red': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'target_green': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'target_blue': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'replace_red': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'replace_green': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'replace_blue': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1}), 'clip_threshold': ('INT', {'default': 10, 'min': 0, 'max': 255, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_remove_color'
    CATEGORY = 'WAS Suite/Image/Process'

    def image_remove_color(self, image, clip_threshold=10, target_red=255, target_green=255, target_blue=255, replace_red=255, replace_green=255, replace_blue=255):
        return (pil2tensor(self.apply_remove_color(tensor2pil(image), clip_threshold, (target_red, target_green, target_blue), (replace_red, replace_green, replace_blue))),)

    def apply_remove_color(self, image, threshold=10, color=(255, 255, 255), rep_color=(0, 0, 0)):
        color_image = Image.new('RGB', image.size, color)
        diff_image = ImageChops.difference(image, color_image)
        gray_image = diff_image.convert('L')
        mask_image = gray_image.point(lambda x: 255 if x > threshold else 0)
        mask_image = ImageOps.invert(mask_image)
        result_image = Image.composite(Image.new('RGB', image.size, rep_color), image, mask_image)
        return result_image
```