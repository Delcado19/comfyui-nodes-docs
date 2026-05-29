
# Documentation
- Class name: `BboxToInt`
- Category: `KJNodes/masking`
- Output node: `False`

The BboxToInt node is designed to convert bounding box coordinates from a list into integer values, including calculating the center point of the bounding box. This node facilitates manipulation and analysis of bounding box data by providing precise integer coordinates.

# Input types
## Required
- **`bboxes`**
    - The 'bboxes' parameter represents the list of bounding boxes to process. Each bounding box should be a tuple or list of coordinates. This parameter is critical for determining which bounding boxes will be converted to integer values.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- **`index`**
    - The 'index' parameter specifies the position of the bounding box in the 'bboxes' list to process. It allows selective conversion of bounding boxes, enhancing flexibility in processing bounding box data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- **`x_min`**
    - The minimum x-coordinate of the selected bounding box.
    - Comfy dtype: INT
    - Python dtype: int
- **`y_min`**
    - The minimum y-coordinate of the selected bounding box.
    - Comfy dtype: INT
    - Python dtype: int
- **`width`**
    - The width of the selected bounding box.
    - Comfy dtype: INT
    - Python dtype: int
- **`height`**
    - The height of the selected bounding box.
    - Comfy dtype: INT
    - Python dtype: int
- **`center_x`**
    - The x-coordinate of the center point of the selected bounding box.
    - Comfy dtype: INT
    - Python dtype: int
- **`center_y`**
    - The y-coordinate of the center point of the selected bounding box.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class BboxToInt:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "bboxes": ("BBOX",),
                "index": ("INT", {"default": 0,"min": 0, "max": 99999999, "step": 1}),
            },
        }

    RETURN_TYPES = ("INT","INT","INT","INT","INT","INT",)
    RETURN_NAMES = ("x_min","y_min","width","height", "center_x","center_y",)
    FUNCTION = "bboxtoint"
    CATEGORY = "KJNodes/masking"
    DESCRIPTION = """
Returns selected index from bounding box list as integers.
"""
    def bboxtoint(self, bboxes, index):
        x_min, y_min, width, height = bboxes[index]
        center_x = int(x_min + width / 2)
        center_y = int(y_min + height / 2)
        
        return (x_min, y_min, width, height, center_x, center_y,)

```
