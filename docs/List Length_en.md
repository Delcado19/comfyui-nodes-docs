
# Documentation
- Class name: List Length
- Category: List Stuff
- Output node: False

List Length node computes the length of a given list. It simplifies determining how many elements are in the list, providing a direct way to obtain this information.

# Input types
## Required
- In
    - Represents the input list to compute its length. The list's length directly determines the node's output.
    - Comfy dtype: *
    - Python dtype: List[Any]

# Output types
- Length
    - Output is the length of the input list, indicating the number of elements it contains.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ListLengthNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {"In": (any_type, {})},
        }

    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("Length",)
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (False,)
    FUNCTION = "get_len"

    CATEGORY = "List Stuff"

    def get_len(self, In: List[Any]) -> Tuple[int]:
        return (len(In),)

```
