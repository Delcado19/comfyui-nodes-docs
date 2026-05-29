# Documentation
- Class name: WAS_Image_Chromatic_Aberration
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Chromatic_Aberration node applies a chromatic aberration effect to the input image, simulating the optical phenomenon where a lens fails to focus all colors at the same point, causing color fringing at the edges. This effect adds a unique visual style to the image, commonly used in photography and film to create specific aesthetic results.

# Input types
## Required
- image
    - The image parameter is the node's core input, representing the image to which the chromatic aberration effect will be applied. The quality and characteristics of this image directly affect the final output, determining the range and appearance of the aberration.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- red_offset
    - The red_offset parameter allows adjusting the offset of the red channel, creating the chromatic aberration effect by shifting the red component of the image. It is a key part of achieving the desired visual distortion.
    - Comfy dtype: INT
    - Python dtype: int
- green_offset
    - The green_offset parameter fine-tunes the green channel's contribution to the chromatic aberration. By adjusting this value, the node controls how the green color fringes in the image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_offset
    - The blue_offset parameter determines the displacement of the blue channel during the chromatic aberration process. This is crucial for controlling the degree of blue color spread in the distorted image.
    - Comfy dtype: INT
    - Python dtype: int
- intensity
    - The intensity parameter controls the strength of the chromatic aberration effect. Higher values produce a more pronounced effect, while lower values yield a more subtle distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fade_radius
    - The fade_radius parameter defines the radius of the fade-out effect at the image edges. It helps create a smooth transition between the chromatic aberration and the undistorted center of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the result of applying the chromatic aberration effect to the input image. It reflects the adjusted offsets and intensity, providing a creatively distorted version of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Chromatic_Aberration:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'red_offset': ('INT', {'default': 2, 'min': -255, 'max': 255, 'step': 1}), 'green_offset': ('INT', {'default': -1, 'min': -255, 'max': 255, 'step': 1}), 'blue_offset': ('INT', {'default': 1, 'min': -255, 'max': 255, 'step': 1}), 'intensity': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'fade_radius': ('INT', {'default': 12, 'min': 0, 'max': 1024, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_chromatic_aberration'
    CATEGORY = 'WAS Suite/Image/Filter'

    def image_chromatic_aberration(self, image, red_offset=4, green_offset=2, blue_offset=0, intensity=1, fade_radius=12):
        return (pil2tensor(self.apply_chromatic_aberration(tensor2pil(image), red_offset, green_offset, blue_offset, intensity, fade_radius)),)

    def apply_chromatic_aberration(self, img, r_offset, g_offset, b_offset, intensity, fade_radius):

        def lingrad(size, direction, white_ratio):
            image = Image.new('RGB', size)
            draw = ImageDraw.Draw(image)
            if direction == 'vertical':
                black_end = size[1] - white_ratio
                range_start = 0
                range_end = size[1]
                range_step = 1
                for y in range(range_start, range_end, range_step):
                    color_ratio = y / size[1]
                    if y <= black_end:
                        color = (0, 0, 0)
                    else:
                        color_value = int((y - black_end) / (size[1] - black_end) * 255)
                        color = (color_value, color_value, color_value)
                    draw.line([(0, y), (size[0], y)], fill=color)
            elif direction == 'horizontal':
                black_end = size[0] - white_ratio
                range_start = 0
                range_end = size[0]
                range_step = 1
                for x in range(range_start, range_end, range_step):
                    color_ratio = x / size[0]
                    if x <= black_end:
                        color = (0, 0, 0)
                    else:
                        color_value = int((x - black_end) / (size[0] - black_end) * 255)
                        color = (color_value, color_value, color_value)
                    draw.line([(x, 0), (x, size[1])], fill=color)
            return image.convert('L')

        def create_fade_mask(size, fade_radius):
            mask = Image.new('L', size, 255)
            left = ImageOps.invert(lingrad(size, 'horizontal', int(fade_radius * 2)))
            right = left.copy().transpose(Image.FLIP_LEFT_RIGHT)
            top = ImageOps.invert(lingrad(size, 'vertical', int(fade_radius * 2)))
            bottom = top.copy().transpose(Image.FLIP_TOP_BOTTOM)
            mask = ImageChops.multiply(mask, left)
            mask = ImageChops.multiply(mask, right)
            mask = ImageChops.multiply(mask, top)
            mask = ImageChops.multiply(mask, bottom)
            mask = ImageChops.multiply(mask, mask)
            return mask
        (r, g, b) = img.split()
        r_offset_img = ImageChops.offset(r, r_offset, 0)
        g_offset_img = ImageChops.offset(g, 0, g_offset)
        b_offset_img = ImageChops.offset(b, 0, b_offset)
        merged = Image.merge('RGB', (r_offset_img, g_offset_img, b_offset_img))
        fade_mask = create_fade_mask(img.size, fade_radius)
        result = Image.composite(merged, img, fade_mask).convert('RGB')
        return result
```