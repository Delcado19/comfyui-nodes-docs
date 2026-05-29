
# Documentation
- Class name: Noise from Area Palettes [Dream]
- Category: ✨ Dream/🌄 image/⚡ generate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node generates noise-based images by fusing colors from different region-specific palettes. It utilizes unique region sharpness parameters to influence the randomness and distribution of colors in specified areas, creating visually coherent noise patterns.

# Input types
## Required
- area_sharpness
    - Controls the sharpness of transitions between different region palettes, affecting the clarity of region definitions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The width of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- blur_amount
    - The amount of blur applied to the noise, affecting the smoothness of color transitions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- density
    - Determines the density of the noise pattern, affecting the overall texture and complexity of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed value for random number generation, ensuring reproducibility of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- top_left_palette
    - Specifies the palette for the top-left region of the image, affecting the color scheme of that specific section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- top_center_palette
    - Defines the palette for the top-center region, affecting the color distribution and theme of that specific area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- top_right_palette
    - Determines the palette for the top-right region, affecting the color choices and overall aesthetics of that area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- center_left_palette
    - Sets the palette for the middle-left region, guiding the color scheme and visual harmony of that section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- center_palette
    - Indicates the palette for the center region of the image, affecting the core color theme and distribution.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- center_right_palette
    - Specifies the palette for the middle-right region, affecting the color dynamics and visual appeal of that section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- bottom_left_palette
    - Determines the palette for the bottom-left region, affecting the color scheme and aesthetic consistency of that section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- bottom_center_palette
    - Sets the palette for the bottom-center region, guiding the color choices and thematic consistency of that area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- bottom_right_palette
    - Defines the palette for the bottom-right region, affecting the color distribution and visual impact of that area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID

# Output types
- image
    - The generated image composed of noise patterns derived from the specified region palettes.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DreamNoiseFromAreaPalettes:
    NODE_NAME = "Noise from Area Palettes"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "optional": {
                "top_left_palette": (RGBPalette.ID,),
                "top_center_palette": (RGBPalette.ID,),
                "top_right_palette": (RGBPalette.ID,),
                "center_left_palette": (RGBPalette.ID,),
                "center_palette": (RGBPalette.ID,),
                "center_right_palette": (RGBPalette.ID,),
                "bottom_left_palette": (RGBPalette.ID,),
                "bottom_center_palette": (RGBPalette.ID,),
                "bottom_right_palette": (RGBPalette.ID,),
            },
            "required": {
                "area_sharpness": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.05}),
                "width": ("INT", {"default": 512, "min": 1, "max": 8192}),
                "height": ("INT", {"default": 512, "min": 1, "max": 8192}),
                "blur_amount": ("FLOAT", {"default": 0.3, "min": 0, "max": 1.0, "step": 0.05}),
                "density": ("FLOAT", {"default": 0.5, "min": 0.1, "max": 1.0, "step": 0.025}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            },
        }

    CATEGORY = NodeCategories.IMAGE_GENERATE
    ICON = "🌫"
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def _area_coordinates(self, width, height):
        dx = width / 6
        dy = height / 6
        return {
            "top_left_palette": (dx, dy),
            "top_center_palette": (dx * 3, dy),
            "top_right_palette": (dx * 5, dy),
            "center_left_palette": (dx, dy * 3),
            "center_palette": (dx * 3, dy * 3),
            "center_right_palette": (dx * 5, dy * 3),
            "bottom_left_palette": (dx * 1, dy * 5),
            "bottom_center_palette": (dx * 3, dy * 5),
            "bottom_right_palette": (dx * 5, dy * 5),
        }

    def _pick_random_area(self, active_coordinates, x, y, rng, area_sharpness):
        def _dst(x1, y1, x2, y2):
            a = x1 - x2
            b = y1 - y2
            return math.sqrt(a * a + b * b)

        distances = list(map(lambda item: (item[0], _dst(item[1][0], item[1][1], x, y)), active_coordinates))
        areas_by_weight = list(
            map(lambda item: (math.pow((1.0 / max(1, item[1])), 0.5 + 4.5 * area_sharpness), item[0]), distances))
        return pick_random_by_weight(areas_by_weight, rng)

    def _setup_initial_colors(self, image: DreamImage, color_func):
        w = image.width
        h = image.height
        wpart = round(w / 3)
        hpart = round(h / 3)
        for i in range(3):
            for j in range(3):
                image.color_area(wpart * i, hpart * j, w, h,
                                 color_func(wpart * i + w // 2, hpart * j + h // 2))

    def result(self, width, height, seed, blur_amount, density, area_sharpness, **palettes):
        outputs = list()
        rng = random.Random()
        coordinates = self._area_coordinates(width, height)
        active_palettes = list(filter(lambda pair: pair[1] is not None and len(pair[1]) > 0, palettes.items()))
        active_coordinates = list(map(lambda item: (item[0], coordinates[item[0]]), active_palettes))

        n = max(list(map(len, palettes.values())) + [0])
        for b in range(n):
            batch_palettes = dict(map(lambda item: (item[0], item[1][b].random_iteration(seed)), active_palettes))

            def _color_func(x, y):
                name = self._pick_random_area(active_coordinates, x, y, rng, area_sharpness)
                rgb = batch_palettes[name]
                return next(rgb)

            image = DreamImage(pil_image=Image.new("RGB", (width, height)))
            self._setup_initial_colors(image, _color_func)
            image = _generate_noise(image, _color_func, rng, (round(image.width / 3), round(image.height / 3)),
                                    blur_amount, density)
            outputs.append(image)

        if not outputs:
            outputs.append(DreamImage(pil_image=Image.new("RGB", (width, height))))

        return (DreamImage.join_to_tensor_data(outputs),)

```
