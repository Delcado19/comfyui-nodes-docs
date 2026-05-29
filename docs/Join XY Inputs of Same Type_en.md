
# Documentation
- Class name: Join XY Inputs of Same Type
- Category: Efficiency Nodes/XY Inputs
- Output node: False

This node is designed to merge two XY inputs of the same type into a single output. It employs specific merging strategies for different types of XY data, ensuring input type compatibility before merging. Finally, it provides a unified XY output that combines the input data in a manner appropriate for each type.

# Input types
## Required
- XY_i
    - Represents one of the XY inputs to be merged. Its type and value are crucial for determining the merging strategy and ensuring compatibility with the other XY input.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[Any]]

# Output types
- X or Y
    - The merged output of two XY inputs, combining data based on their types and the specific merging logic implemented for each type.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[Any]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_JoinInputs:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
            "XY_1": ("XY",),
            "XY_2": ("XY",),},
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, XY_1, XY_2):
        xy_type_1, xy_value_1 = XY_1
        xy_type_2, xy_value_2 = XY_2

        if xy_type_1 != xy_type_2:
            print(f"{error('Join XY Inputs Error:')} Input types must match")
            return (None,)
        elif xy_type_1 == "Seeds++ Batch":
            xy_type = xy_type_1
            combined_length = len(xy_value_1) + len(xy_value_2)
            xy_value = list(range(combined_length))
        elif xy_type_1 == "Positive Prompt S/R" or xy_type_1 == "Negative Prompt S/R":
            xy_type = xy_type_1
            xy_value = xy_value_1 + [(xy_value_1[0][0], t[1]) for t in xy_value_2[1:]]
        else:
            xy_type = xy_type_1
            xy_value = xy_value_1 + xy_value_2
        return ((xy_type, xy_value),)

```
