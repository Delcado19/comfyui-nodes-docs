
# Documentation
- Class name: Kep_ReverseList
- Category: List Stuff
- Output node: False
- Repo Ref: https://github.com/city96/ComfyUI_ExtraFormatNodes

The Kep_ReverseList node is used to reverse the order of elements in a list. It takes a list as input and returns a new list with the element order reversed from the original list, while maintaining the original data types of the elements.

# Input types
## Required
- In
    - The input list to be reversed. This parameter is crucial for the operation as it determines the sequence of elements that will be reversed.
    - Comfy dtype: *
    - Python dtype: List[Any]

# Output types
- Reversed
    - The output reversed list, whose element order is opposite to that of the input list.
    - Comfy dtype: *
    - Python dtype: Tuple[List[Any]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ReverseList:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {"In": (any_type, {})},
        }

    RETURN_TYPES = (any_type,)
    RETURN_NAMES = ("Reversed",)
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "reverse_list"

    CATEGORY = "List Stuff"

    def reverse_list(self, In: List[Any]) -> Tuple[List[Any]]:
        return (In[::-1],)

```
