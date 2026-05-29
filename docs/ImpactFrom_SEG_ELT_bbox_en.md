# Documentation
- Class name: From_SEG_ELT_bbox
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the From_SEG_ELT_bbox node is designed to process and return the bounding box coordinates of a specific element. It plays a key role in spatial data operations within the ImpactPack toolset, ensuring precise positioning of elements for further processing.

# Input types
## Required
- bbox
    - The parameter 'bbox' is crucial for the node's operation, as it defines the spatial boundaries of the element to be processed. It directly influences the accuracy and relevance of the node's output by determining the specific region of interest.
    - Comfy dtype: SEG_ELT_bbox
    - Python dtype: Tuple[int, int, int, int]

# Output types
- left
    - The parameter 'left' represents the leftmost coordinate of the bounding box, marking the start of the horizontal span. It is essential in defining the spatial extent of the element within the processed data.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The parameter 'top' represents the topmost coordinate of the bounding box, indicating the start of the vertical span. It is important for determining the vertical position of the element in the dataset.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The parameter 'right' represents the rightmost coordinate of the bounding box, marking the end of the horizontal span. It is crucial in determining the width of the element and its spatial boundaries in the dataset.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The parameter 'bottom' represents the bottommost coordinate of the bounding box, marking the end of the vertical span. It is crucial in determining the height of the element and its complete vertical extent in the processed data.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class From_SEG_ELT_bbox:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'bbox': ('SEG_ELT_bbox',)}}
    RETURN_TYPES = ('INT', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('left', 'top', 'right', 'bottom')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, bbox):
        return bbox
```