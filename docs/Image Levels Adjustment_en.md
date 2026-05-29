# Documentation
- Class name: WAS_Image_Levels
- Category: WAS Suite/Image/Adjustment
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node aims to adjust the tonal range of an image by modifying its black, mid, and white levels, thereby enhancing the overall contrast and visual appeal of the image.

# Input types
## Required
- image
    - The image parameter is essential for the node to process and adjust visual content. It serves as input, and its tonal levels will be modified according to the specified black, mid, and white levels.
    - Comfy dtype: COMBO[Image]
    - Python dtype: PIL.Image
- black_level
    - The black level parameter is crucial for setting the darkest point in the image, affecting overall contrast and tonal range. It helps define shadows and the deepest blacks in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mid_level
    - The mid level parameter plays a key role in determining the midpoint of the tonal range, influencing the overall balance and distribution of tones in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- white_level
    - The white level parameter is important for defining the brightest point in the image, contributing to highlights and the brightest whites.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image is the result of tonal adjustment, showcasing enhanced contrast and refined visual details achieved through manipulation of the black, mid, and white levels.
    - Comfy dtype: COMBO[Image]
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Levels:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'black_level': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 255.0, 'step': 0.1}), 'mid_level': ('FLOAT', {'default': 127.5, 'min': 0.0, 'max': 255.0, 'step': 0.1}), 'white_level': ('FLOAT', {'default': 255, 'min': 0.0, 'max': 255.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'apply_image_levels'
    CATEGORY = 'WAS Suite/Image/Adjustment'

    def apply_image_levels(self, image, black_level, mid_level, white_level):
        tensor_images = []
        for img in image:
            img = tensor2pil(img)
            levels = self.AdjustLevels(black_level, mid_level, white_level)
            tensor_images.append(pil2tensor(levels.adjust(img)))
        tensor_images = torch.cat(tensor_images, dim=0)
        return (tensor_images,)

    class AdjustLevels:

        def __init__(self, min_level, mid_level, max_level):
            self.min_level = min_level
            self.mid_level = mid_level
            self.max_level = max_level

        def adjust(self, im):
            im_arr = np.array(im)
            im_arr[im_arr < self.min_level] = self.min_level
            im_arr = (im_arr - self.min_level) * (255 / (self.max_level - self.min_level))
            im_arr[im_arr < 0] = 0
            im_arr[im_arr > 255] = 255
            im_arr = im_arr.astype(np.uint8)
            im = Image.fromarray(im_arr)
            im = ImageOps.autocontrast(im, cutoff=self.max_level)
            return im
```