
# Documentation
- Class name: SaltSchedule2ExecSchedule
- Category: SALT/Scheduling
- Output node: False

This node aims to convert a list into an iterable execution list, thereby transforming scheduling data into a format suitable for sequential processing.

# Input types
## Required
- list_input
    - Represents the input list that needs to be converted into an iterable execution list, and is the main data structure of the conversion process.
    - Comfy dtype: LIST
    - Python dtype: List

# Output types
- float
    - Outputs a list of floats derived from the input list, representing the converted scheduling data.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltSchedule2ExecSchedule:
    """
        Converts a list to a list output (iterative execution list)
    """
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "list_input": ("LIST", {}), 
            },
        }

    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("float",)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "convert"
    CATEGORY = "SALT/Scheduling"

    def convert(self, list_input):
        return (list_input, )

```
