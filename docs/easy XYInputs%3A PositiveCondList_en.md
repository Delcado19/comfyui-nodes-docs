
# Documentation
- Class name: easy XYInputs: PositiveCondList
- Category: EasyUse/XY Inputs
- Output node: False

The XYplot_Positive_Cond_List node is designed to process a series of positive conditions, transforming them into a structured format suitable for plotting or further analysis. It focuses on identifying and organizing these conditions based on positive attributes, facilitating the visualization or manipulation of data points in a "positive" context.

# Input types
## Required
- positive
    - The 'positive' input accepts a series of conditions, each representing a positive attribute or criterion. This input is critical to the node's operation, as it determines which conditions will be processed and structured for output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]

# Output types
- X or Y
    - Outputs a structured representation of positive conditions, including their indices and corresponding conditions, ready for direct use in plotting or analysis.
    - Comfy dtype: X_Y
    - Python dtype: Tuple[Dict[str, List[str]], ...]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Positive_Cond_List:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "positive": ("CONDITIONING",),
            }
        }

    INPUT_IS_LIST = True
    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, positive):
        axis = "advanced: Pos Condition"
        values = []
        cond = []
        for index, c in enumerate(positive):
            values.append(str(index))
            cond.append(c)

        return ({"axis": axis, "values": values, "cond": cond},) if values is not None else (None,)

```
