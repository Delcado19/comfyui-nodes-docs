
# Documentation
- Class name: `Kep_RepeatList`
- Category: `List Stuff`
- Output node: `False`

The Kep_RepeatList node repeats a given list a specified number of times, effectively expanding the list by duplicating its elements. This node belongs to the "List Stuff" category, highlighting its utility in data processing pipelines for manipulating list structures.

# Input types
## Required
- **`In`**
    - The input list to be repeated. It serves as the base list whose elements are duplicated according to the specified count.
    - Comfy dtype: `*`
    - Python dtype: `List[Any]`
- **`Count`**
    - Specifies how many times the input list should be repeated. This parameter determines the final length of the output list by multiplying the original list's length.
    - Comfy dtype: `INT`
    - Python dtype: `int`

# Output types
- **`Extended`**
    - The output list produced by repeating the input list elements the specified number of times. It represents the expanded version of the original list.
    - Comfy dtype: `*`
    - Python dtype: `Tuple[List[Any]]`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RepeatList:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "In": (any_type, {}),
                "Count": ("INT", {"default": 0, "min": 0, "max": 99999, "step": 1}),
            },
        }

    RETURN_TYPES = (any_type,)
    RETURN_NAMES = ("Extended",)
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "repeat_list"

    CATEGORY = "List Stuff"

    def repeat_list(self, In: List[Any], Count: List[int]) -> Tuple[List[Any]]:
        if len(Count) != 1:
            raise ValueError("Count does not support multiple values")
        return (In * Count[0],)

```
