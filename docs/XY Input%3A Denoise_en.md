
# Documentation
- Class name: XY Input: Denoise
- Category: Efficiency Nodes/XY Inputs
- Output node: False

XY Input: Denoise node is used to generate a set of floating-point values representing denoising levels for data batching. It abstracts the process of computing denoising values within a specified range, facilitating visualization or analysis of denoising effects in the context of computational efficiency.

# Input types
## Required
- batch_count
    - Specify the number of denoising values to generate, allowing control over the granularity of denoising analysis.
    - Comfy dtype: INT
    - Python dtype: int
- first_denoise
    - Define the start of the denoising range, allowing customization of the lower bound of the denoising process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_denoise
    - Set the end of the denoising range, allowing adjustment of the upper bound of denoising analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Output a tuple containing the type of value ('Denoise') and the generated floating-point denoising values, suitable for plotting or further analysis.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_Denoise:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
                "first_denoise": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                "last_denoise": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
            }
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, batch_count, first_denoise, last_denoise):
        xy_type = "Denoise"
        xy_value = generate_floats(batch_count, first_denoise, last_denoise)
        return ((xy_type, xy_value),) if xy_value else (None,)

```
