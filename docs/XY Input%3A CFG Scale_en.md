
# Documentation
- Class name: XY Input: CFG Scale
- Category: Efficiency Nodes/XY Inputs
- Output node: False

XY Input: CFG Scale node is used to generate and process CFG Scale values for XY plots. In an efficiency-oriented environment, it generates a series of floating-point numbers based on input parameters, ensuring these values are within a specified range. This node is crucial for tasks that require precise adjustment of CFG Scale values and visual representation, contributing to optimization and efficiency analysis of various processes.

# Input types
## Required
- batch_count
    - Specifies the number of CFG Scale values to generate. It affects node execution by determining the size of the output array of CFG Scale values.
    - Comfy dtype: INT
    - Python dtype: int
- first_cfg
    - Defines the starting point of the CFG Scale range. It affects the lower bound of generated CFG Scale values, ensuring the output starts from this specified value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_cfg
    - Sets the end point of the CFG Scale range. It affects the upper bound of generated CFG Scale values, ensuring the output ends at this specified value.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Outputs an array of generated CFG Scale values for XY plotting. These values are uniformly distributed within the specified range.
    - Comfy dtype: XY
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [XY Plot](../../efficiency-nodes-comfyui/Nodes/XY Plot.md)



## Source code
```python
class TSC_XYplot_CFG:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
                "first_cfg": ("FLOAT", {"default": 7.0, "min": 0.0, "max": 100.0}),
                "last_cfg": ("FLOAT", {"default": 9.0, "min": 0.0, "max": 100.0}),
            }
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, batch_count, first_cfg, last_cfg):
        xy_type = "CFG Scale"
        xy_value = generate_floats(batch_count, first_cfg, last_cfg)
        return ((xy_type, xy_value),) if xy_value else (None,)

```
