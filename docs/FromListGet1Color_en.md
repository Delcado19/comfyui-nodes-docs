
# Documentation
- Class name: FromListGet1Color
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1Color node is designed to retrieve a single color value from a color list based on a specified index. It simplifies the process of accessing list elements, allowing direct retrieval of color information in a user-friendly manner.

# Input types
## Required
- list
    - This parameter represents the color list from which a single color will be retrieved. The list must contain color values, and the node will access one of them based on the provided index.
    - Comfy dtype: COLOR
    - Python dtype: List[str]
- index
    - The index parameter specifies the position of the color to retrieve from the color list. It supports both positive and negative indexing, enabling access to elements from the beginning or end of the list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- color
    - The output is the single color value retrieved from the specified position in the input color list.
    - Comfy dtype: COLOR
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1Color(metaclass=GetSingleFromListMeta):  TYPE = "COLOR"

```
