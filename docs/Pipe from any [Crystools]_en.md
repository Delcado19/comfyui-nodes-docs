
# Documentation
- Class name: Pipe from any [Crystools]
- Category: crystools 🪛/Pipe
- Output node: False

This node facilitates data flow from a generic input to a specified output, enabling dynamic processing and transformation of various data types. It abstracts the complexity of data operations, providing a simplified interface for data pipeline operations.

# Input types
## Required
- CPipeAny
    - This parameter represents a generic input of any type. It is essential to the node's operation, serving as the source for data extraction and subsequent transformation or passing.
    - Comfy dtype: CPipeAny
    - Python dtype: tuple

# Output types
- CPipeAny
    - This output represents the original input data, unchanged, passed through for further processing.
    - Comfy dtype: CPipeAny
    - Python dtype: tuple
- any_1
    - This output represents the first element of the input tuple, possibly transformed or passed directly.
    - Comfy dtype: *
    - Python dtype: object
- any_2
    - This output represents the second element of the input tuple, possibly transformed or passed directly.
    - Comfy dtype: *
    - Python dtype: object
- any_3
    - This output represents the third element of the input tuple, possibly transformed or passed directly.
    - Comfy dtype: *
    - Python dtype: object
- any_4
    - This output represents the fourth element of the input tuple, possibly transformed or passed directly.
    - Comfy dtype: *
    - Python dtype: object
- any_5
    - This output represents the fifth element of the input tuple, possibly transformed or passed directly.
    - Comfy dtype: *
    - Python dtype: object
- any_6
    - This output represents the sixth element of the input tuple, possibly transformed or passed directly.
    - Comfy dtype: *
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CPipeFromAny:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                CLASSES.CPIPE_ANY_TYPE.value: (CLASSES.CPIPE_ANY_TYPE.value,),
            },
            "optional": {
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.PIPE.value
    RETURN_TYPES = (CLASSES.CPIPE_ANY_TYPE.value, any, any, any, any, any, any,)
    RETURN_NAMES = (CLASSES.CPIPE_ANY_TYPE.value, "any_1", "any_2", "any_3", "any_4", "any_5", "any_6",)

    FUNCTION = "execute"

    def execute(self, CPipeAny=None, ):
        any_1, any_2, any_3, any_4, any_5, any_6 = CPipeAny
        return CPipeAny, any_1, any_2, any_3, any_4, any_5, any_6

```
