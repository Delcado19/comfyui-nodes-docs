
# Documentation
- Class name: easy XYInputs: PositiveCond
- Category: EasyUse/XY Inputs
- Output node: False

This node is designed to handle positive condition inputs for XY charts, allowing users to specify positive scenario conditions that affect chart axes and values. It simplifies the complexity of conditional logic for handling positive inputs, helping to create custom charts that reflect specific positive conditions.

# Input types
## Optional
- positive_i
    - Indicates the positive conditions to be applied, where 'i' can range from 1 to 4. Each condition progressively modifies the axes and values of the chart, increasing chart specificity and allowing a layered approach to customize the chart's appearance based on positive scenarios.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[str]

# Output types
- X or Y
    - The output is the axes and values configured for the chart, reflecting the applied positive conditions. This output demonstrates the flexibility to choose X-axis or Y-axis based on the applied condition, providing a customized plotting experience.
    - Comfy dtype: X_Y
    - Python dtype: Tuple[Dict[str, Any]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Positive_Cond:

    @classmethod
    def INPUT_TYPES(cls):
        inputs = {
            "optional": {
                "positive_1": ("CONDITIONING",),
                "positive_2": ("CONDITIONING",),
                "positive_3": ("CONDITIONING",),
                "positive_4": ("CONDITIONING",),
            }
        }

        return inputs

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, positive_1=None, positive_2=None, positive_3=None, positive_4=None):
        axis = "advanced: Pos Condition"
        values = []
        cond = []
        # Create base entry
        if positive_1 is not None:
            values.append("0")
            cond.append(positive_1)
        if positive_2 is not None:
            values.append("1")
            cond.append(positive_2)
        if positive_3 is not None:
            values.append("2")
            cond.append(positive_3)
        if positive_4 is not None:
            values.append("3")
            cond.append(positive_4)

        return ({"axis": axis, "values": values, "cond": cond},) if values is not None else (None,)

```
