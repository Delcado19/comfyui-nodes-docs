
# Documentation
- Class name: BuildColorRangeAdvanced (hsv)
- Category: Bmad/CV/Color A.
- Output node: False

BuildColorRangeAdvanced (hsv) node creates a comprehensive color range in the HSV color space. It uses advanced techniques to precisely define and adjust the boundaries of the color range, ensuring accurate color selection and manipulation in various computer vision tasks.

# Input types
## Required
- samples
    - The 'samples' parameter represents data points or color samples in the HSV color space. The node uses these samples to determine the range. It is essential for defining the scope of the generated color range.
    - Comfy dtype: HSV_SAMPLES
    - Python dtype: numpy.ndarray
- hue_exp
    - The 'hue_exp' parameter adjusts the hue component of the color range, affecting the final color selection.
    - Comfy dtype: STRING
    - Python dtype: float
- sat_exp
    - The 'sat_exp' parameter adjusts the saturation component of the color range, affecting the final color selection.
    - Comfy dtype: STRING
    - Python dtype: float
- val_exp
    - The 'val_exp' parameter adjusts the value component of the color range, affecting the final color selection.
    - Comfy dtype: STRING
    - Python dtype: float

# Output types
- hsv_color
    - The 'hsv_color' output represents the generated color range in the HSV color space. It is crucial for applications requiring precise color manipulation and selection.
    - Comfy dtype: HSV_COLOR
    - Python dtype: tuple
- combo[string]
    - The 'combo[string]' output provides additional information or metadata about the generated color range, enhancing the node's usefulness in complex color analysis tasks.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- ui
    - The 'ui' parameter offers a user interface component for interacting with the node's output, improving usability and accessibility.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class BuildColorRangeHSVAdvanced:
    def __init__(self):
        self.samples = None

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            # "average": ("HSV_COLOR",), # compute from sample?
            "samples": ("HSV_SAMPLES",),
            "hue_exp": ("STRING", {"multiline": True, "default": s.default_hue_expression}),
            "sat_exp": ("STRING", {"multiline": True, "default": s.default_saturation_expression}),
            "val_exp": ("STRING", {"multiline": True, "default": s.default_value_expression}),
        }}

    RETURN_TYPES = ("HSV_COLOR", "HSV_COLOR", InRangeHSV.hue_modes)
    FUNCTION = "get_interval"
    CATEGORY = "Bmad/CV/Color A."

    default_hue_expression = """# hue
h_quant2(0, 1).scale_by_constant(16) if 2 < v_median < 253 else to_interval(0, 180)
    """
    default_saturation_expression = """# saturation
to_interval(5, 255) if 2 < v_median < 253 else s_quant2(0,1).interpolate(0.2, [0, 255])
    """
    default_value_expression = """# value
v_quant2(0,1).interpolate(.5, [0, 255]).scale_by_constant(50) if 2 < v_median < 253 else v_quant2(0,1).scale_by_constant(8)
    """

    def get_interval(self, samples, hue_exp, sat_exp, val_exp):
        self.samples = samples

        # function to get sample names to include (avoids pre computing everything)
        # this supposes some computations could take considerable time, thus avoiding them if not used
        def valid_token(token: str):
            return token in samples_names and (
                    token.startswith("h_") or token.startswith("s_") or token.startswith("v_") or
                    token == "to_interval" or token == "minmax" or token == "maxmin"
            )

        # get bounds from the eval expressions
        bounds = {}
        samples_names = dir(samples)
        for key, expression in {"h": hue_exp, "s": sat_exp, "v": val_exp}.items():
            expression = prepare_text_for_eval(expression)  # purge potentially dangerous tokens

            locals_to_include_names = filter_expression_names(valid_token, expression)
            locals_to_include = {
                name: getattr(samples, name)
                for name in locals_to_include_names
            }

            bounds[key] = eval(expression, {
                "__builtins__": {},
                'min': min, 'max': max, 'm': math,
                **locals_to_include
            }, {})

        # get 2 colors that represent the computed lower and upper bounds
        lower_bounds = np.array([bounds.get("h")[0], bounds.get("s")[0], bounds.get("v")[0]]).round()
        upper_bounds = np.array([bounds.get("h")[1], bounds.get("s")[1], bounds.get("v")[1]]).round()
        hue_mode = BuildColorRangeHSV.fix_bounds(lower_bounds, upper_bounds)
        return (upper_bounds, lower_bounds, hue_mode)

```
