
# Documentation
- Class name: `Big Float Switch [Dream]`
- Category: `✨ Dream/🛠 utils/⭆ switches`
- Output node: `False`

The Big Float Switch node is designed to select a floating-point value from a set of inputs based on specified conditions. It enhances the flexibility and adaptability of numerical data processing by allowing value selection based on runtime conditions, thereby facilitating dynamic decision-making in data flows.

# Input types
## Required
- select
    - Specifies the initially selected input index. The node will attempt to select that input, but may choose another based on the 'on_missing' strategy and the presence of valid data.
    - Comfy dtype: INT
    - Python dtype: int
- on_missing
    - Determines the node's behavior when the initially selected input does not meet validation criteria. It can move to the previous or next input until a valid input is found, ensuring a fallback mechanism is in place.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- input_i
    - Represents one of multiple floating-point inputs that can be selected by the node. Each 'input_i' represents a potential value that may be selected based on the selection criteria, where 'i' can range from 0 to n, indicating flexibility in the number of inputs.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- selected
    - The floating-point value selected by the node based on the specified conditions and input selection.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBigFloatSwitch:
    _switch_type = "FLOAT"
    NODE_NAME = "Big Float Switch"
    ICON = "⭆"
    CATEGORY = NodeCategories.UTILS_SWITCHES
    RETURN_TYPES = (_switch_type,)
    RETURN_NAMES = ("selected",)
    FUNCTION = "pick"

    @classmethod
    def INPUT_TYPES(cls):
        return _generate_switch_input(cls._switch_type, _NOT_A_VALUE_F)

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(values)

    def pick(self, select, on_missing, **args):
        return _do_pick(self.__class__, select, lambda n: (n is not None) and (n != _NOT_A_VALUE_F), on_missing, **args)

```
