
# Documentation
- Class name: `Analyze Palette [Dream]`
- Category: `✨ Dream/🌄 image/🎨 color`
- Output node: `False`

The "Analyze Palette" node is used to process palettes, calculating metrics such as average brightness, contrast, and color dominance (red, green, blue). It abstracts the color characteristics of a palette into numerical values, which can be used for further image processing or analysis.

# Input types
## Required
- palette
    - The palette to be analyzed. It is a set of colors from which the node will calculate average brightness, contrast, and color dominance values.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: Tuple[RGBPalette]

# Output types
- brightness
    - The average brightness value of the analyzed palette.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - The average contrast value of the analyzed palette.
    - Comfy dtype: FLOAT
    - Python dtype: float
- redness
    - The average red dominance value of the analyzed palette.
    - Comfy dtype: FLOAT
    - Python dtype: float
- greenness
    - The average green dominance value of the analyzed palette.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blueness
    - The average blue dominance value of the analyzed palette.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamAnalyzePalette:
    NODE_NAME = "Analyze Palette"
    ICON = "📊"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.palette
            ,
        }

    CATEGORY = NodeCategories.IMAGE_COLORS
    RETURN_TYPES = ("FLOAT", "FLOAT", "FLOAT", "FLOAT", "FLOAT")
    RETURN_NAMES = ("brightness", "contrast", "redness", "greenness", "blueness")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, palette):
        f = 1.0 / len(palette)
        (w, c, r, g, b) = (0, 0, 0, 0, 0)
        for p in palette:
            (brightness, contrast, red, green, blue) = p.analyze()
            w += brightness
            c += contrast
            r += red
            g += green
            b += blue

        return w * f, c * f, r * f, g * f, b * f

```
