
# Documentation
- Class name: Big Image Switch [Dream]
- Category: ✨ Dream/🛠 utils/⭆ switches
- Output node: False

This node is designed to switch between different image inputs according to selection criteria, enabling dynamic image selection in the workflow.

# Input types
## Required
- select
    - Decide which image input to select based on the provided criteria, thus enabling dynamic image selection.
    - Comfy dtype: INT
    - Python dtype: int
- on_missing
    - Specify the action to take when the selected image input is missing, ensuring robustness of image selection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Callable

## Optional
- input_i
    - Represents one of the multiple image inputs that can be selected. The index 'i' is a variable representing each distinct image input available for selection.
    - Comfy dtype: IMAGE
    - Python dtype: Image

# Output types
- selected
    - The image selected based on the provided criteria.
    - Comfy dtype: IMAGE
    - Python dtype: Image


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBigImageSwitch:
    _switch_type = "IMAGE"
    NODE_NAME = "Big Image Switch"
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
        return _do_pick(self.__class__, select, lambda n: n is not None, on_missing, **args)

```
