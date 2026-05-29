
# Documentation
- Class name: FromListGetColors
- Category: Bmad/Lists/GetAll
- Output node: False

This node extracts color information from a list, facilitating further processing or analysis of color data.

# Input types
## Required
- list
    - List from which to extract color information. This parameter is crucial for specifying the color data source the node will process.
    - Comfy dtype: COLOR
    - Python dtype: List[str]

# Output types
- color
    - List of color data extracted from the input list. This output is essential for downstream tasks that require color information.
    - Comfy dtype: COLOR
    - Python dtype: List[Tuple[int, int, int]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetColors(metaclass=UnMakeListMeta):  TYPE = "COLOR"

```
