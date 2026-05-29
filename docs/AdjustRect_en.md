
# Documentation
- Class name: AdjustRect
- Category: Bmad
- Output node: False

The AdjustRect node is designed to adjust the size and position of a rectangle based on specified modification parameters and rounding mode. It abstracts the complexity of geometric transformations, providing a simplified way to recalibrate rectangle coordinates for various use cases.

# Input types
## Required
- a
    - Represents one coordinate (x1 or y1) of the original rectangle, playing a key role in determining the new adjusted rectangle position.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - Represents the other coordinate (x2 or y2) of the original rectangle, helping to calculate the size and position of the new rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- c
    - Serves as the modification parameter for adjusting the rectangle's width, directly affecting the final size of the adjusted rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- d
    - Serves as the modification parameter for adjusting the rectangle's height, directly affecting the final size of the adjusted rectangle.
    - Comfy dtype: INT
    - Python dtype: int
- xm
    - Specifies the modification parameter for rectangle width adjustment, influencing the calculation of the new width.
    - Comfy dtype: INT
    - Python dtype: int
- ym
    - Specifies the modification parameter for rectangle height adjustment, influencing the calculation of the new height.
    - Comfy dtype: INT
    - Python dtype: int
- round_mode
    - Determines the rounding mode applied during adjustment, affecting how the final dimensions are computed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- input_format
    - Defines the format of the input coordinates, affecting how coordinates are interpreted and transformed during adjustment.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format
    - Specifies the format of the output coordinates, deciding how the size and position of the adjusted rectangle are represented.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- int
    - The coordinates of the adjusted rectangle, reflecting the modifications applied based on the input parameters. It is represented as a tuple of four integers.
    - Comfy dtype: INT
    - Python dtype: Tuple[int, int, int, int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AdjustRect:
    round_mode_map = {
        'Floor': math.floor,  # may be close to the image's edge, keep rect tight
        'Ceil': math.ceil,  # need the margin and image's edges aren't near
        'Round': round,  # whatever fits closest to the original rect
        'Exact': lambda v: 1  # force exact measurement
    }
    round_modes = list(round_mode_map.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "a": ("INT", {"min": 0, "max": np.iinfo(np.int32).max, "step": 1}),
            "b": ("INT", {"min": 0, "max": np.iinfo(np.int32).max, "step": 1}),
            "c": ("INT", {"min": 0, "max": np.iinfo(np.int32).max, "step": 1}),
            "d": ("INT", {"min": 0, "max": np.iinfo(np.int32).max, "step": 1}),
            "xm": ("INT", {"default": 64, "min": 2, "max": 1280, "step": 2}),
            "ym": ("INT", {"default": 64, "min": 2, "max": 1280, "step": 2}),
            "round_mode": (s.round_modes, {"default": s.round_modes[2]}),
            "input_format": (rect_modes, {"default": rect_modes[1]}),
            "output_format": (rect_modes, {"default": rect_modes[1]}),
        }}

    RETURN_TYPES = tuple(["INT" for x in range(4)])
    FUNCTION = "adjust"
    CATEGORY = "Bmad"

    def adjust(self, a, b, c, d, xm, ym, round_mode, input_format, output_format):
        x1, y1, x2, y2 = rect_modes_map[input_format]["toBounds"](a, b, c, d)
        center_x = (x1 + x2) // 2 + 1
        center_y = (y1 + y2) // 2 + 1
        # reasoning:
        # 00 01 02 03 04 05
        # __ -- -- -- -- __ ( original len of 4 )
        # __ x1 __ cx __ x2 ( target len of 4   )
        # most crop implementations include x1 but exclude x2;
        # thus is closer to original input
        # note that xm and ym are always even

        half_new_len_x = self.round_mode_map[round_mode]((x2 - x1) / xm) * xm // 2
        half_new_len_y = self.round_mode_map[round_mode]((y2 - y1) / ym) * ym // 2

        # note: these points can fall outside the image space
        x2 = x1 = center_x
        x2 += half_new_len_x
        x1 -= half_new_len_x
        y2 = y1 = center_y
        y2 += half_new_len_y
        y1 -= half_new_len_y

        # convert to desired output format
        x1, y1, x2, y2 = rect_modes_map[output_format]["fromBounds"](x1, y1, x2, y2)

        return (x1, y1, x2, y2,)

```
