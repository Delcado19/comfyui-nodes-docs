
# Documentation
- Class name: easy XYInputs: CFG Scale
- Category: EasyUse/XY Inputs
- Output node: False

This node aims to simplify and optimize the exploration and adjustment of Classifier-Free Guidance (CFG) scale values in generative models. It allows users to dynamically adjust the CFG scale, enabling fine-grained control over the model's conditional generation capabilities to better control output quality and adherence to specified conditions.

# Input types
## Required
- batch_count
    - Specifies the number of batches to which the CFG scale adjustment will be applied. This parameter is critical for understanding the scale of the operation and ensuring adjustments are applied uniformly across multiple instances.
    - Comfy dtype: INT
    - Python dtype: int
- first_cfg
    - Determines the starting value for the CFG scale adjustment. This allows setting the initial degree of influence that conditional guidance has on the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_cfg
    - Sets the ending value for the CFG scale adjustment. This parameter enables fine-tuning the influence of the CFG scale on the generation process within a specified range, allowing for gradual adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Returns the result of the CFG scale adjustment, which may be a modified generative model or a specific set of generated results, depending on the context of the operation.
    - Comfy dtype: X_Y
    - Python dtype: custom type


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class XYplot_CFG:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "batch_count": ("INT", {"default": 3, "min": 0, "max": 50}),
                "first_cfg": ("FLOAT", {"default": 7.0, "min": 0.0, "max": 100.0}),
                "last_cfg": ("FLOAT", {"default": 9.0, "min": 0.0, "max": 100.0}),
            }
        }

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, batch_count, first_cfg, last_cfg):
        axis = "advanced: CFG Scale"
        values = generate_floats(batch_count, first_cfg, last_cfg)
        return ({"axis": axis, "values": values},) if values else (None,)

```
