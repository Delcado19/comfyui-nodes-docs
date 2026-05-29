
# Documentation
- Class name: `Big Palette Switch [Dream]`
- Category: `✨ Dream/🛠 utils/⭆ switches`
- Output node: `False`

The Big Palette Switch [Dream] node is designed to dynamically select different palettes based on input conditions. It enables flexible manipulation of color schemes in a project by allowing the selection of the palette that best matches given criteria or context.

# Input types
## Required
- select
    - Specifies the index of the palette to select. This parameter determines which of the potential input palettes is chosen based on the index, directly affecting the node's output.
    - Comfy dtype: INT
    - Python dtype: int
- on_missing
    - Defines the node's behavior when the selected palette is missing. It can choose to move to the previous or next available palette, ensuring the selection process continues seamlessly even if some inputs are unavailable.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- input_i
    - Represents one of the potential palette inputs that may be selected. The index i ranges from 0 to 9, allowing up to ten different palettes to be input, providing a wide range of choices.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID

# Output types
- selected
    - The palette selected based on input conditions. This output reflects the palette chosen after considering the 'select' and 'on_missing' parameters.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBigPaletteSwitch:
    _switch_type = RGBPalette.ID
    NODE_NAME = "Big Palette Switch"
    ICON = "⭆"
    CATEGORY = NodeCategories.UTILS_SWITCHES
    RETURN_TYPES = (_switch_type,)
    RETURN_NAMES = ("selected",)
    FUNCTION = "pick"

    @classmethod
    def INPUT_TYPES(cls):
        return _generate_switch_input(cls._switch_type)

    @classmethod
    def IS_CHANGED(cls, *values):
        return ALWAYS_CHANGED_FLAG

    def pick(self, select, on_missing, **args):
        return _do_pick(self.__class__, select, lambda n: (n is not None), on_missing, **args)

```
