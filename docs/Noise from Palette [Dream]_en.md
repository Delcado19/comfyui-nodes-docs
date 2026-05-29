
# Documentation
- Class name: `Noise from Palette [Dream]`
- Category: `✨ Dream/🌄 image/⚡ generate`
- Output node: `False`

This node generates noise patterns based on a given palette to create textured images with specific color schemes. It uses parameters such as width, height, blur amount, density, and seed to customize the noise generation process, producing unique and stylized noise images.

# Input types
## Required
- palette
    - The palette parameter defines the color scheme used for noise generation, affecting the overall appearance and color distribution of the generated image.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: Tuple[RGBPalette]
- width
    - Specifies the width of the generated noise image, determining its horizontal dimension.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the generated noise image, determining its vertical dimension.
    - Comfy dtype: INT
    - Python dtype: int
- blur_amount
    - Controls the amount of blur applied to the noise, affecting the smoothness and blending of colors.
    - Comfy dtype: FLOAT
    - Python dtype: float
- density
    - Adjusts the density of the noise pattern, affecting how tightly packed the noise elements are.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - A seed value used for random number generation, ensuring reproducibility of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a stylized noise image generated based on the input palette and other parameters.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamNoiseFromPalette:
    NODE_NAME = "Noise from Palette"
    ICON = "🌫"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.palette | {
                "width": ("INT", {"default": 512, "min": 1, "max": 8192}),
                "height": ("INT", {"default": 512, "min": 1, "max": 8192}),
                "blur_amount": ("FLOAT", {"default": 0.3, "min": 0, "max": 1.0, "step": 0.05}),
                "density": ("FLOAT", {"default": 0.5, "min": 0.1, "max": 1.0, "step": 0.025}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff})
            },
        }

    CATEGORY = NodeCategories.IMAGE_GENERATE
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, palette: Tuple[RGBPalette], width, height, seed, blur_amount, density):
        outputs = list()
        rng = random.Random()
        for p in palette:
            seed += 1
            color_iterator = p.random_iteration(seed)
            image = DreamImage(pil_image=Image.new("RGB", (width, height), color=next(color_iterator)))
            image = _generate_noise(image, lambda x, y: next(color_iterator), rng,
                                    (image.width >> 1, image.height >> 1), blur_amount, density)
            outputs.append(image)

        return (DreamImage.join_to_tensor_data(outputs),)

```
