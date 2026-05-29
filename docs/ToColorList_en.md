
# Documentation
- Class name: ToColorList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToColorList node converts a set of color-related data into a structured list format, specifically designed for handling color information. This node helps organize and manipulate color data, making it easier to process and use in various computer color analysis and processing tasks.

# Input types
## Required
- inputs_len
    - Represents the collection of color data to be converted into a list. This parameter is critical to the node's operation, as it determines the content of the generated color list, thereby influencing subsequent processing and analysis.
    - Comfy dtype: INT
    - Python dtype: List[Union[str, Tuple[int, int, int]]]

# Output types
- color
    - A structured list of color data, organized for efficient processing and manipulation in subsequent color-related computing tasks.
    - Comfy dtype: COLOR
    - Python dtype: List[Union[str, Tuple[int, int, int]]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToColorList(metaclass=MakeListMeta): TYPE = "COLOR"

```
