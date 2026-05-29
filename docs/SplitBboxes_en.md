
# Documentation
- Class name: SplitBboxes
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SplitBboxes node is used to split a list of bounding boxes (bboxes) into two separate lists at a specified index. This functionality is crucial for processing and manipulating bounding box data in various computer vision tasks, enabling targeted operations on specific parts of the data.

# Input types
## Required
- bboxes
    - The bboxes parameter represents the list of bounding boxes to be split. It is crucial for determining the data segment to be processed and divided at the specified index.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- index
    - The index parameter specifies the position at which the bounding box list should be split. It plays a key role in dividing the bounding box list into two distinct parts.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- bboxes_a
    - The first output bounding box list contains elements from the start of the original list up to (but not including) the specified index.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- bboxes_b
    - The second output bounding box list contains elements from the specified index to the end of the original list.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SplitBboxes:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "bboxes": ("BBOX",),
                "index": ("INT", {"default": 0,"min": 0, "max": 99999999, "step": 1}),
            },
        }

    RETURN_TYPES = ("BBOX","BBOX",)
    RETURN_NAMES = ("bboxes_a","bboxes_b",)
    FUNCTION = "splitbbox"
    CATEGORY = "KJNodes/masking"
    DESCRIPTION = """
Splits the specified bbox list at the given index into two lists.
"""

    def splitbbox(self, bboxes, index):
        bboxes_a = bboxes[:index]  # Sub-list from the start of bboxes up to (but not including) the index
        bboxes_b = bboxes[index:]  # Sub-list from the index to the end of bboxes

        return (bboxes_a, bboxes_b,)

```
