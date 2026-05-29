
# Documentation
- Class name: Join Image Lists
- Category: List Stuff
- Output node: False

The Join Image Lists node is designed to merge multiple image lists into a single list while providing the sizes of the original lists. This functionality is essential for operations requiring the integration of image data from different sources, ensuring seamless integration and manipulation of image collections.

# Input types
## Required
- In1
    - Represents the first image list to be merged. This is a required input and plays a key role in initiating the merge process.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]
- In2
    - Represents the second image list to be merged. This is a required input and participates in the merge process alongside the first list.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]
## Optional
- In3
    - An optional image list that can be included in the merge process, providing flexibility for handling varying numbers of image lists.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]
- In4
    - An optional image list that can be included in the merge process, providing flexibility for handling varying numbers of image lists.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]
- In5
    - An optional image list that can be included in the merge process, providing flexibility for handling varying numbers of image lists.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]

# Output types
- Joined
    - A merged image list from all input lists.
    - Comfy dtype: IMAGE
    - Python dtype: List[Tensor]
- Sizes
    - A list of integers representing the sizes of the original input lists.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class JoinImageLists:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(self) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "In1": ("IMAGE",),
                "In2": ("IMAGE",),
            },
            "optional": {
                "In3": ("IMAGE",),
                "In4": ("IMAGE",),
                "In5": ("IMAGE",),
            },
        }

    RETURN_TYPES = ("IMAGE", "INT")
    RETURN_NAMES = ("Joined", "Sizes")
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, True)
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
