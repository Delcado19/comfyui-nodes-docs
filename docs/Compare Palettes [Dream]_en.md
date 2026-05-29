
# Documentation
- Class name: `Compare Palettes [Dream]`
- Category: `✨ Dream/🌄 image/🎨 color`
- Output node: `False`

The Compare Palettes node is designed to compare two palettes by calculating the average multipliers of brightness, contrast, and RGB color intensity between them. This comparison provides a quantitative measure of the color characteristic differences between the two palettes.

# Input types
## Required
- a
    - The first RGB palette to compare. It serves as the baseline for comparison with the second palette.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- b
    - The second RGB palette to compare against the first palette. This comparison yields multipliers indicating the degree of brightness, contrast, or color differences of the second palette relative to the first.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID

# Output types
- brightness_multiplier
    - The average multiplier of brightness difference between the two palettes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast_multiplier
    - The average multiplier of contrast difference between the two palettes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- red_multiplier
    - The average multiplier of red intensity difference between the two palettes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- green_multiplier
    - The average multiplier of green intensity difference between the two palettes.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamComparePalette:
    NODE_NAME = "Compare Palettes"
    ICON = "📊"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "a": (RGBPalette.ID,),
                "b": (RGBPalette.ID,),
            },
        }

    CATEGORY = NodeCategories.IMAGE_COLORS
    RETURN_TYPES = ("FLOAT", "FLOAT", "FLOAT", "FLOAT")
    RETURN_NAMES = (
        "brightness_multiplier", "contrast_multiplier", "red_multiplier", "green_multiplier", "blue_multiplier")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, a, b):
        MIN_VALUE = 1 / 255.0

        brightness = list()
        contrasts = list()
        reds = list()
        greens = list()
        blues = list()

        for i in range(min(len(a), len(b))):
            (bright, ctr, red, green, blue) = a[i].analyze()
            (bright2, ctr2, red2, green2, blue2) = b[i].analyze()
            brightness.append(bright2 / max(MIN_VALUE, bright))
            contrasts.append(ctr2 / max(MIN_VALUE, ctr))
            reds.append(red2 / max(MIN_VALUE, red))
            greens.append(green2 / max(MIN_VALUE, green))
            blues.append(blue2 / max(MIN_VALUE, blue))

        n = len(brightness)

        return (sum(brightness) / n, sum(contrasts) / n, sum(reds) / n,
                sum(greens) / n, sum(blues) / n)

```
