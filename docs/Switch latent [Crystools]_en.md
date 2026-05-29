
# Documentation
- Class name: Switch latent [Crystools]
- Category: crystools 🪛/Switch
- Output node: False

The CSwitchBooleanLatent node provides a mechanism to switch between two latent representations based on a boolean condition. It abstracts the decision process, allowing dynamic selection of latent data flow.

# Input types
## Required
- on_true
    - The latent representation to return if the boolean condition is true. It plays a key role in determining the output based on the condition.
    - Comfy dtype: LATENT
    - Python dtype: tuple
- on_false
    - The latent representation to return if the boolean condition is false. This parameter ensures an alternative output is available, enhancing the node's flexibility.
    - Comfy dtype: LATENT
    - Python dtype: tuple
- boolean
    - The boolean condition that decides which latent representation (on_true or on_false) to return. It is the core of the node's decision process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The latent representation selected based on the boolean condition. It embodies the core functionality of the node's conditional selection.
    - Comfy dtype: LATENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CSwitchBooleanLatent:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "on_true": ("LATENT",),
                "on_false": ("LATENT",),
                "boolean": BOOLEAN,
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.SWITCH.value
    RETURN_TYPES = ("LATENT",)
    RETURN_NAMES = ("latent",)

    FUNCTION = "execute"

    def execute(self, on_true, on_false, boolean=True):
        logger.debug("Latent switch: " + str(boolean))

        if boolean:
            return (on_true,)
        else:
            return (on_false,)

```
