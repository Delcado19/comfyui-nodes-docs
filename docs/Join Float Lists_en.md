
# Documentation
- Class name: Join Float Lists
- Category: List Stuff
- Output node: False

This node aims to merge two float lists into a single list, preserving the original order of elements from the input lists. It facilitates operations that require concatenation of numerical data, such as combining datasets or aggregating results from different sources.

# Input types
## Required
- In1
    - Represents the first float list to be concatenated. Its elements are combined with the elements of 'In2' to form a single concatenated list.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- In2
    - Represents the second float list to be merged with 'In1'. Elements in 'In2' follow elements from 'In1' in the concatenated output list.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Output types
- Joined
    - The concatenated float list derived from 'In1' and 'In2'. This output preserves the order in which elements appear in the input lists.
    - Comfy dtype: FLOAT
    - Python dtype: Tuple[List[float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class JoinFloatLists:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "In1": ("FLOAT", {"forceInput": True}),
                "In2": ("FLOAT", {"forceInput": True}),
            },
        }

    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("Joined",)
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "join_lists"

    CATEGORY = "List Stuff"

    def join_lists(self, In1: List[float], In2: List[float]) -> Tuple[List[float]]:
        return (In1 + In2,)

```
