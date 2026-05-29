
# Documentation
- Class name: Common Frame Dimensions [Dream]
- Category: ✨ Dream/🛠 utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Common Frame Dimensions node provides a utility to calculate frame sizes based on a set of input parameters (including size, aspect ratio, orientation, divisor, and alignment). It abstracts the complexity of dimension calculation and alignment adjustment, offering a simplified method to determine the optimal frame size for various display needs.

# Input types
## Required
- size
    - Specify the desired frame size from a predefined list of resolutions. This choice influences the overall frame size and serves as the basis for further calculations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- aspect_ratio
    - Determine the frame's aspect ratio, which proportionally affects its width and height to maintain the specified ratio.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- orientation
    - Indicate the frame's orientation (wide or tall), which affects the calculation of width and height based on the aspect ratio.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- divisor
    - Use a factor to divide the frame size for finer control over size granularity, affecting the final dimension.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- alignment
    - Specify the alignment value for size calculation, ensuring the final size aligns to a particular boundary.
    - Comfy dtype: INT
    - Python dtype: int
- alignment_type
    - Determine the rounding method (up, down, or nearest) for the final size based on the alignment value.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- width
    - The calculated frame width after considering all input parameters.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The calculated frame height after considering all input parameters.
    - Comfy dtype: INT
    - Python dtype: int
- final_width
    - The final frame width after adjustment for alignment and alignment type.
    - Comfy dtype: INT
    - Python dtype: int
- final_height
    - The final frame height after adjustment for alignment and alignment type.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamFrameDimensions:
    NODE_NAME = "Common Frame Dimensions"
    ICON = "⌗"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "size": (["3840", "1920", "1440", "1280", "768", "720", "640", "512"],),
                "aspect_ratio": (["16:9", "16:10", "4:3", "1:1", "5:4", "3:2", "21:9", "14:9"],),
                "orientation": (["wide", "tall"],),
                "divisor": (["8", "4", "2", "1"],),
                "alignment": ("INT", {"default": 64, "min": 1, "max": 512}),
                "alignment_type": (["ceil", "floor", "nearest"],),
            },
        }

    CATEGORY = NodeCategories.UTILS
    RETURN_TYPES = ("INT", "INT", "INT", "INT")
    RETURN_NAMES = ("width", "height", "final_width", "final_height")
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def result(self, size, aspect_ratio, orientation, divisor, alignment, alignment_type):
        ratio = tuple(map(int, aspect_ratio.split(":")))
        final_width = int(size)
        final_height = int(round((float(final_width) * ratio[1]) / ratio[0]))
        width = _align_num(int(round(final_width / float(divisor))), alignment, alignment_type)
        height = _align_num(int(round((float(width) * ratio[1]) / ratio[0])), alignment, alignment_type)
        if orientation == "wide":
            return (width, height, final_width, final_height)
        else:
            return (height, width, final_height, final_width)

```
