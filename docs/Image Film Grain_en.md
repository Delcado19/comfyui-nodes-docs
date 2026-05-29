# Documentation
- Class name: WAS_Film_Grain
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Film_Grain node is designed to add a film grain effect to images, enhancing their visual texture and creating an aesthetic appeal similar to traditional cinematography. It achieves this by applying grayscale noise with adjustable density and intensity, allowing users to control the prominence of the grain in the final image.

# Input types
## Required
- image
    - The image parameter is the input image to which the film grain effect will be applied. It is a fundamental component of the node's operation, as the entire process revolves around manipulating this image to achieve the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- density
    - The density parameter controls the concentration of noise applied to the image. It is crucial for adjusting the intensity of the film grain effect, allowing fine-tuning to suit different visual preferences.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity
    - The intensity parameter determines the strength of the film grain overlay on the original image. It is an important factor in achieving a balanced effect, ensuring the grain is noticeable without overwhelming the image's details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlights
    - The highlights parameter adjusts the brightness of the image, particularly targeting the brighter areas. It plays an important role in enhancing contrast and making the film grain effect more prominent in the bright parts of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- supersample_factor
    - The supersample_factor parameter increases the image resolution before applying noise, which can result in a more detailed and higher-quality film grain effect. This is an optional setting for users seeking greater control over the final output appearance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- film_grain_image
    - The film_grain_image output parameter represents the final image with the film grain effect applied. It is the culmination of all node processing, reflecting the user's chosen settings for density, intensity, and highlights.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Film_Grain:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'density': ('FLOAT', {'default': 1.0, 'min': 0.01, 'max': 1.0, 'step': 0.01}), 'intensity': ('FLOAT', {'default': 1.0, 'min': 0.01, 'max': 1.0, 'step': 0.01}), 'highlights': ('FLOAT', {'default': 1.0, 'min': 0.01, 'max': 255.0, 'step': 0.01}), 'supersample_factor': ('INT', {'default': 4, 'min': 1, 'max': 8, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'film_grain'
    CATEGORY = 'WAS Suite/Image/Filter'

    def film_grain(self, image, density, intensity, highlights, supersample_factor):
        return (pil2tensor(self.apply_film_grain(tensor2pil(image), density, intensity, highlights, supersample_factor)),)

    def apply_film_grain(self, img, density=0.1, intensity=1.0, highlights=1.0, supersample_factor=4):
        """
        Apply grayscale noise with specified density, intensity, and highlights to a PIL image.
        """
        img_gray = img.convert('L')
        original_size = img.size
        img_gray = img_gray.resize((img.size[0] * supersample_factor, img.size[1] * supersample_factor), Image.Resampling(2))
        num_pixels = int(density * img_gray.size[0] * img_gray.size[1])
        noise_pixels = []
        for i in range(num_pixels):
            x = random.randint(0, img_gray.size[0] - 1)
            y = random.randint(0, img_gray.size[1] - 1)
            noise_pixels.append((x, y))
        for (x, y) in noise_pixels:
            value = random.randint(0, 255)
            img_gray.putpixel((x, y), value)
        img_noise = img_gray.convert('RGB')
        img_noise = img_noise.filter(ImageFilter.GaussianBlur(radius=0.125))
        img_noise = img_noise.resize(original_size, Image.Resampling(1))
        img_noise = img_noise.filter(ImageFilter.EDGE_ENHANCE_MORE)
        img_final = Image.blend(img, img_noise, intensity)
        enhancer = ImageEnhance.Brightness(img_final)
        img_highlights = enhancer.enhance(highlights)
        return img_highlights
```