
# Documentation
- Class name: Palette Color Align [Dream]
- Category: ✨ Dream/🌄 image/🎨 color
- Output node: False

This node aligns the colors of a given palette to a target palette based on a specified alignment factor. It adjusts the RGB values of the original palette colors to be closer to the target palette colors, enabling controlled blending or matching of color schemes.

# Input types
## Required
- palette
- The original color palette that needs alignment. It serves as the basis for adjusting colors toward the target palette.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: Tuple[RGBPalette]
- target_align
- The target color palette to which the original palette should be aligned. This palette provides the reference for the desired color adjustments.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: Tuple[RGBPalette]
- alignment_factor
- A floating‑point value that determines the degree of alignment between the original and target palettes. Higher values produce colors closer to the target palette.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- palette
- The adjusted color palette after alignment with the target palette, reflecting the applied color changes.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: Tuple[RGBPalette]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamColorAlign:
    NODE_NAME = "Palette Color Align"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.palette | {
                "target_align": (RGBPalette.ID,),
                "alignment_factor": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 10.0, "step": 0.1}),
            }
        }

    CATEGORY = NodeCategories.IMAGE_COLORS
    RETURN_TYPES = (RGBPalette.ID,)
    RETURN_NAMES = ("palette",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def result(self, palette: Tuple[RGBPalette], target_align: Tuple[RGBPalette], alignment_factor: float):
        results = list()

        def _limit(c):
            return max(min(c, 255), 0)

        for i in range(len(palette)):
            p = palette[i]
            t = target_align[i]
            (_, _, r1, g1, b1) = p.analyze()
            (_, _, r2, g2, b2) = t.analyze()

            dr = (r2 - r1) * alignment_factor
            dg = (g2 - g1) * alignment_factor
            db = (b2 - b1) * alignment_factor
            new_pixels = list()
            for pixel in p:
                r = _limit(round(pixel[0] + (255 * dr)))
                g = _limit(round(pixel[1] + (255 * dg)))
                b = _limit(round(pixel[1] + (255 * db)))
                new_pixels.append((r, g, b))
            results.append(RGBPalette(colors=new_pixels))
        return (tuple(results),)

```
