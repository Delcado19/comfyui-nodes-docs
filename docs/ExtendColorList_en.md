
# Documentation
- Class name: ExtendColorList
- Category: Bmad/Lists/Extend
- Output node: False

The ExtendColorList node aims to expand an existing color list by adding more color values. This functionality is essential in scenarios requiring dynamic color selection expansion, such as in image processing, design applications, or data visualization tasks, where a broader palette may enhance the aesthetic or informational value of the output.

# Input types
## Required
- inputs_len
    - Specifies the number of color values to add to the existing color list. This parameter determines the scale of the palette expansion.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- color
    - The expanded color list, combining the original color list with the newly added color values. This output is significant for subsequent applications requiring a broader or modified palette.
    - Comfy dtype: COLOR
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ExtendColorList(metaclass=ExtendListMeta): TYPE = "COLOR"

```
