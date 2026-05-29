
# Documentation
- Class name: Big Int Switch [Dream]
- Category: ✨ Dream/🛠 utils/⭆ switches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Big Int Switch node selectively outputs an integer value based on specified selection criteria. It facilitates dynamic decision-making in data flows by allowing an integer to be chosen from a predefined set according to input conditions.

# Input types
## Required
- select
- Specifies the index of the integer to be selected. It plays a crucial role in determining which integer value the node outputs based on the implemented selection logic.
    - Comfy dtype: INT
    - Python dtype: int
- on_missing
- Defines the node's behavior when the selected integer is missing. By specifying an alternative selection strategy, this parameter ensures the node can gracefully handle situations where the desired integer is unavailable.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- input_i
- Represents one of the potential integer values that can be chosen. This parameter is part of a series (input_0 to input_9) that collectively define the set of integers from which the node can select according to the selection criteria.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- selected
- The integer value selected based on the input criteria. This output reflects the node's decision when choosing one integer from the available options.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBigIntSwitch:
    _switch_type = "INT"
    NODE_NAME = "Big Int Switch"
    ICON = "⭆"
    CATEGORY = NodeCategories.UTILS_SWITCHES
    RETURN_TYPES = (_switch_type,)
    RETURN_NAMES = ("selected",)
    FUNCTION = "pick"

    @classmethod
    def INPUT_TYPES(cls):
        return _generate_switch_input(cls._switch_type, _NOT_A_VALUE_I)

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(values)

    def pick(self, select, on_missing, **args):
        return _do_pick(self.__class__, select, lambda n: (n is not None) and (n != _NOT_A_VALUE_I), on_missing, **args)

```
