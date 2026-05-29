# Documentation
- Class name: ImageOverlay
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The ImageOverlay node class seamlessly integrates a foreground image onto a background image at a specified opacity level, creating a composite image that combines visual elements from both sources.

# Input types
## Required
- background_image
    - The background image serves as the base canvas for the overlay application. It is essential for establishing the context and dimensions of the final composite image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- foreground_image
    - The foreground image is the element to be overlaid onto the background. Its visual characteristics and position are crucial for achieving the desired effect in the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- opacity
    - Opacity determines the degree to which the foreground image blends with the background image. This is a critical parameter that affects the overall appearance and transparency of the composite image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result_img
    - result_img represents the final composite image, where the foreground image has been overlaid onto the background image according to the specified opacity.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageOverlay:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'background_image': ('IMAGE', {'default': None}), 'foreground_image': ('IMAGE', {'default': None}), 'opacity': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('result_img',)
    FUNCTION = 'overlay'
    CATEGORY = 'Mikey/Image'

    def overlay(self, background_image, foreground_image, opacity):
        background_image = tensor2pil(background_image)
        foreground_image = tensor2pil(foreground_image)
        background_image = background_image.convert('RGB')
        foreground_image = foreground_image.convert('RGB')
        cropped_fg = Image.new('RGB', (background_image.size[0], background_image.size[1]))
        cropped_fg.paste(foreground_image, (int((background_image.size[0] - foreground_image.size[0]) / 2), int((background_image.size[1] - foreground_image.size[1]) / 2)))
        bg_array = np.array(background_image, dtype=np.float32) / 255
        fg_array = np.array(cropped_fg, dtype=np.float32) / 255
        mask = bg_array < 0.5
        overlay = np.zeros_like(bg_array)
        overlay[mask] = 2 * bg_array[mask] * fg_array[mask]
        overlay[~mask] = 1 - 2 * (1 - bg_array[~mask]) * (1 - fg_array[~mask])
        result = (1 - opacity) * bg_array + opacity * overlay
        result_img = Image.fromarray((result * 255).astype(np.uint8))
        result_img = pil2tensor(result_img)
        return (result_img,)
```