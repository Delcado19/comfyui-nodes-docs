
# Documentation
- Class name: Kep_JoinListAny
- Category: List Stuff
- Output node: False

The Kep_JoinListAny node is designed to merge multiple lists into a single list, regardless of the types of elements contained in those lists. This node facilitates the combination of different lists, enhancing flexibility in list operations.

# Input types
## Required
- In1
    - Represents the first input list to be merged. Its elements can be of any type, providing flexibility to the node.
    - Comfy dtype: *
    - Python dtype: List[Any]
- In2
    - Represents the second input list to be merged, similar to In1, it can contain elements of any type.
    - Comfy dtype: *
    - Python dtype: List[Any]
## Optional
- In3
    - An optional third input list that can be merged with the previous lists. It can contain elements of any type.
    - Comfy dtype: *
    - Python dtype: List[Any]
- In4
    - An optional fourth input list for merging. It can contain elements of any type, further extending the node's merging capability.
    - Comfy dtype: *
    - Python dtype: List[Any]
- In5
    - An optional fifth input list that can be merged, allowing for broader list merging operations.
    - Comfy dtype: *
    - Python dtype: List[Any]

# Output types
- Joined
    - The resulting list produced after merging all input lists.
    - Comfy dtype: *
    - Python dtype: List[Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class JoinListAny:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "In1": (any_type, {}),
                "In2": (any_type, {}),
            },
            "optional": {
                "In3": (any_type, {}),
                "In4": (any_type, {}),
                "In5": (any_type, {}),
            },
        }

    RETURN_TYPES = (any_type,)
    RETURN_NAMES = ("Joined", "Sizes")
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "join_lists"

    CATEGORY = "List Stuff"


    def join_lists(
            self,
            *args: List[Tensor],
            **kwargs: List[Tensor],
    ) -> Tuple[List[Tensor], List[int]]:
        sizes = []
        joined = []
        for arg in args:
            sizes.append(len(arg))
            joined.extend(arg)
        for arg in kwargs.values():
            if arg is not None:
                sizes.append(len(arg))
                joined.extend(arg)

        return joined, sizes

```
