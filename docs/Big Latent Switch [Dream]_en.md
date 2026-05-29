
# Documentation
- Class name: Big Latent Switch [Dream]
- Category: ✨ Dream/🛠 utils/⭆ switches
- Output node: False

The Big Latent Switch node dynamically selects one of multiple latent inputs based on specified conditions. It flexibly controls latent representations in the computation graph, enabling conditional routing of data across different processing paths.

# Input types
## Required
- select
- Specify the index of the latent input to select. This parameter determines which of the multiple latent inputs will be actively passed through the node.
    - Comfy dtype: INT
    - Python dtype: int
- on_missing
- Define the switch behavior when the selected input is missing. It can choose to continue processing the next available input or fall back to the previous input, ensuring operational continuity.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- input_i
- Represent one of the multiple latent inputs that can be selected by the switch. The node can handle any number of these inputs, dynamically choosing among them based on the 'select' parameter.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- selected
- The output of the Big Latent Switch node, the latent representation selected based on the specified condition.
    - Comfy dtype: LATENT
    - Python dtype: dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamBigLatentSwitch:
    _switch_type = "LATENT"
    NODE_NAME = "Big Latent Switch"
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
