
# Documentation
- Class name: easy XYInputs: Denoise
- Category: EasyUse/XY Inputs
- Output node: False

This node helps users explore and visualize denoising effects in generative models. It allows adjusting denoising parameters on a batch of data, providing a graphical representation of how different denoising levels affect the generated outputs.

# Input types
## Required
- batch_count
    - Specify the number of batches to process, allowing users to examine denoising effects on multiple data sets.
    - Comfy dtype: INT
    - Python dtype: int
- first_denoise
    - Set the initial denoising level, marking the starting point for exploring denoising effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_denoise
    - Define the final denoising level, enabling users to observe how increasing or decreasing denoising intensity affects the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Provide a graphical representation of the denoising process, showing the impact of different denoising levels on the data.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Denoise:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "batch_count": ("INT", {"default": 3, "min": 0, "max": 50}),
                "first_denoise": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.1}),
                "last_denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.1}),
            }
        }

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, batch_count, first_denoise, last_denoise):
        axis = "advanced: Denoise"
        values = generate_floats(batch_count, first_denoise, last_denoise)
        return ({"axis": axis, "values": values},) if values else (None,)

```
