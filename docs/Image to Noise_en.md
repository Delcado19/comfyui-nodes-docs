# Documentation
- Class name: WAS_Image_To_Noise
- Category: WAS Suite/Image/Generate/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_To_Noise node is designed to convert input images into noise patterns. It achieves a noisy aesthetic by quantizing colors, randomizing pixel data, and optionally blending with Gaussian blur. This node serves as a creative tool for generating noise-based images, applicable to artistic expression, data augmentation, and other uses.

# Input types
## Required
- images
    - The 'images' parameter is critical, as it defines the input images the node will process into noise patterns. This conversion significantly impacts the final output, making this parameter essential to the node's execution and the quality of generated images.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- num_colors
    - The 'num_colors' parameter determines the number of colors used to quantize the image, affecting the complexity of the noise pattern. It plays a key role in the node's operation by controlling color depth and the resulting visual noise effect.
    - Comfy dtype: INT
    - Python dtype: int
- black_mix
    - The 'black_mix' parameter controls the amount of black noise blended into the image, adding a layer of complexity to the noise pattern. It is important for achieving the desired noise level in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- gaussian_mix
    - The 'gaussian_mix' parameter specifies the degree of Gaussian blur to apply, which can smooth the noise and create a more subtle noise effect. It is an important factor in fine-tuning the visual appearance of the noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - The 'brightness' parameter adjusts the brightness of the noise image, enhancing or reducing the contrast of the noise pattern. It is an important factor in controlling the overall appearance of the noise effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_mode
    - The 'output_mode' parameter determines the format of the output. Selecting 'batch' merges images into a single tensor, while 'list' keeps them as a list of separate images. This affects how results are structured for downstream tasks.
    - Comfy dtype: COMBO['batch', 'list']
    - Python dtype: Literal['batch', 'list']
- seed
    - The 'seed' parameter initializes the random number generator, ensuring reproducibility of the noise pattern. It is important for generating consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The 'image' output parameter represents the converted noise image. It is the primary result of the node's functionality, containing the noise pattern generated from the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_To_Noise:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'num_colors': ('INT', {'default': 16, 'max': 256, 'min': 2, 'step': 2}), 'black_mix': ('INT', {'default': 0, 'max': 20, 'min': 0, 'step': 1}), 'gaussian_mix': ('FLOAT', {'default': 0.0, 'max': 1024, 'min': 0, 'step': 0.1}), 'brightness': ('FLOAT', {'default': 1.0, 'max': 2.0, 'min': 0.0, 'step': 0.01}), 'output_mode': (['batch', 'list'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    OUTPUT_IS_LIST = (False,)
    FUNCTION = 'image_to_noise'
    CATEGORY = 'WAS Suite/Image/Generate/Noise'

    def image_to_noise(self, images, num_colors, black_mix, gaussian_mix, brightness, output_mode, seed):
        noise_images = []
        for image in images:
            noise_images.append(pil2tensor(self.image2noise(tensor2pil(image), num_colors, black_mix, brightness, gaussian_mix, seed)))
        if output_mode == 'list':
            self.OUTPUT_IS_LIST = (True,)
        else:
            noise_images = torch.cat(noise_images, dim=0)
        return (noise_images,)

    def image2noise(self, image, num_colors=16, black_mix=0, brightness=1.0, gaussian_mix=0, seed=0):
        random.seed(int(seed))
        image = image.quantize(colors=num_colors)
        image = image.convert('RGBA')
        pixel_data = list(image.getdata())
        random.shuffle(pixel_data)
        randomized_image = Image.new('RGBA', image.size)
        randomized_image.putdata(pixel_data)
        (width, height) = image.size
        black_noise = Image.new('RGBA', (width, height), (0, 0, 0, 0))
        for _ in range(black_mix):
            for x in range(width):
                for y in range(height):
                    if random.randint(0, 1) == 1:
                        black_noise.putpixel((x, y), (0, 0, 0, 255))
        randomized_image = Image.alpha_composite(randomized_image, black_noise)
        enhancer = ImageEnhance.Brightness(randomized_image)
        randomized_image = enhancer.enhance(brightness)
        if gaussian_mix > 0:
            original_noise = randomized_image.copy()
            randomized_gaussian = randomized_image.filter(ImageFilter.GaussianBlur(radius=gaussian_mix))
            randomized_image = Image.blend(randomized_image, randomized_gaussian, 0.65)
            randomized_image = Image.blend(randomized_image, original_noise, 0.25)
        return randomized_image
```