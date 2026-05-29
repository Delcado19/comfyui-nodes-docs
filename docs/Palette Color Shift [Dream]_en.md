
# Documentation
- Class name: `Palette Color Shift [Dream]`
- Category: `✨ Dream/🌄 image/🎨 color`
- Output node: `False`

This node applies a color shift to a given palette by adjusting the multipliers for the red, green, and blue components, with an option to maintain a fixed luminance level. It enables customization of the palette for images or visual elements, enhancing or altering their aesthetic appeal.

# Input types
## Required
- **`palette`**
    - The input palette to be modified. It represents a set of colors that will be adjusted according to the provided multipliers.
    - Comfy dtype: `RGB_PALETTE`
    - Python dtype: `Tuple[RGBPalette]`
- **`red_multiplier`**
    - The multiplier for the red component of each color in the palette, allowing red tones to be enhanced or diminished.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`green_multiplier`**
    - The multiplier for the green component of each color in the palette, used to adjust green tones.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`blue_multiplier`**
    - The multiplier for the blue component of each color in the palette, used to modify blue tones.
    - Comfy dtype: `FLOAT`
    - Python dtype: `float`
- **`fixed_brightness`**
    - Determines whether the luminance level of the palette is kept constant during the color shift process.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`

# Output types
- **`palette`**
    - The modified palette after applying the specified red, green, and blue multipliers, potentially with fixed luminance maintained.
    - Comfy dtype: `RGB_PALETTE`
    - Python dtype: `Tuple[RGBPalette]`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamColorShift:
    NODE_NAME = "Palette Color Shift"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.palette | {
                "red_multiplier": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 100.0, "step": 0.1}),
                "green_multiplier": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 100.0, "step": 0.1}),
                "blue_multiplier": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 100.0, "step": 0.1}),
                "fixed_brightness": (["yes", "no"],),
            }
        }

    CATEGORY = NodeCategories.IMAGE_COLORS
    RETURN_TYPES = (RGBPalette.ID,)
    RETURN_NAMES = ("palette",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, palette, red_multiplier, green_multiplier, blue_multiplier, fixed_brightness):
        results = list()

        def _limit(c):
            return max(min(c, 255), 0)

        for p in palette:
            new_pixels = list()
            for pixel in p:
                s = pixel[0] + pixel[1] + pixel[2]
                r = _limit(round(pixel[0] * red_multiplier))
                g = _limit(round(pixel[1] * green_multiplier))
                b = _limit(round(pixel[2] * blue_multiplier))
                if fixed_brightness == "yes":
                    brightness_factor = max(s, 1) / float(max(r + g + b, 1))
                    r = _limit(round(r * brightness_factor))
                    g = _limit(round(g * brightness_factor))
                    b = _limit(round(b * brightness_factor))

                new_pixels.append((r, g, b))
            results.append(RGBPalette(colors=new_pixels))
        return (tuple(results),)

```
