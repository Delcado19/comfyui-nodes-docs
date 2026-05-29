
# Documentation
- Class name: XY Input: LoRA Plot
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes

This node is specifically designed to generate XY chart data for LoRA (Low-Rank Adaptation) parameters, helping to visualize the relationships and effects between different LoRA configurations. It can dynamically process various LoRA-related inputs, generating coordinated X and Y values for plotting, suitable for multiple LoRA parameters such as batch, weight, model strength, and crop strength.

# Input types
## Required
- input_mode
    - Specifies the input mode, determining which LoRA parameters (such as batch, weight, model strength, crop strength) are considered when generating the chart. This affects how the node processes and interprets the provided data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_name
    - The name of the LoRA configuration being visualized, which is crucial for identifying and distinguishing various LoRA settings in the chart.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_strength
    - The applied model adaptation strength, relevant when visualizing the impact of model strength on LoRA effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength
    - The applied crop strength, relevant when evaluating the impact of crop strength on LoRA performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- X_batch_count
    - Specifies the number of batches to consider for X-axis values, affecting the granularity of the chart.
    - Comfy dtype: INT
    - Python dtype: int
- X_batch_path
    - The file path for the X-axis batch data, crucial for locating and processing the specific LoRA data to be visualized.
    - Comfy dtype: STRING
    - Python dtype: str
- X_subdirectories
    - Indicates whether subdirectories should be included when searching for batch data, affecting the data range considered for the X-axis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- X_batch_sort
    - Determines the sort order of the X-axis batch data, potentially affecting how the chart represents temporal or ordinal relationships.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- X_first_value
    - The starting value used to generate the X-axis model strength or crop strength range, setting the lower bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- X_last_value
    - The ending value used to generate the X-axis model strength or crop strength range, setting the upper bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y_batch_count
    - Specifies the number of batches to consider for Y-axis values, affecting the granularity of the chart.
    - Comfy dtype: INT
    - Python dtype: int
- Y_first_value
    - The starting value used to generate the Y-axis model strength or crop strength range, setting the lower bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y_last_value
    - The ending value used to generate the Y-axis model strength or crop strength range, setting the upper bound of the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_stack
    - An optional stack of LoRA configurations that can be included in the chart, allowing multiple LoRA settings to be visualized in a single chart.
    - Comfy dtype: LORA_STACK
    - Python dtype: list

# Output types
- X
    - The data represented on the X-axis, including the type and values derived from the specified LoRA parameters.
    - Comfy dtype: XY
    - Python dtype: tuple
- Y
    - The data represented on the Y-axis, including the type and values derived from the specified LoRA parameters.
    - Comfy dtype: XY
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_LoRA_Plot:

    modes = ["X: LoRA Batch, Y: LoRA Weight",
             "X: LoRA Batch, Y: Model Strength",
             "X: LoRA Batch, Y: Clip Strength",
             "X: Model Strength, Y: Clip Strength",
            ]

    @classmethod
    def INPUT_TYPES(cls):
        loras = ["None"] + folder_paths.get_filename_list("loras")
        return {"required": {
                "input_mode": (cls.modes,),
                "lora_name": (loras,),
                "model_strength": ("FLOAT", {"default": 1.0, "min": -10.00, "max": 10.0, "step": 0.01}),
                "clip_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                "X_batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
                "X_batch_path": ("STRING", {"default": xy_batch_default_path, "multiline": False}),
                "X_subdirectories": ("BOOLEAN", {"default": False}),
                "X_batch_sort": (["ascending", "descending"],),
                "X_first_value": ("FLOAT", {"default": 0.0, "min": 0.00, "max": 10.0, "step": 0.01}),
                "X_last_value": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 10.0, "step": 0.01}),
                "Y_batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
                "Y_first_value": ("FLOAT", {"default": 0.0, "min": 0.00, "max": 10.0, "step": 0.01}),
                "Y_last_value": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 10.0, "step": 0.01}),},
            "optional": {"lora_stack": ("LORA_STACK",)}
        }

    RETURN_TYPES = ("XY","XY",)
    RETURN_NAMES = ("X","Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def __init__(self):
        self.lora_batch = TSC_XYplot_LoRA_Batch()

    def generate_values(self, mode, X_or_Y, *args, **kwargs):
        result = self.lora_batch.xy_value(*args, **kwargs)

        if result and result[0]:
            xy_type, xy_value_list = result[0]

            # Adjust type based on the mode
            if "LoRA Weight" in mode:
                xy_type = "LoRA Wt"
            elif "Model Strength" in mode:
                xy_type = "LoRA MStr"
            elif "Clip Strength" in mode:
                xy_type = "LoRA CStr"

            # Check whether the value is for X or Y
            if "LoRA Batch" in mode: # Changed condition
                return self.generate_batch_values(*args, **kwargs)
            else:
                return ((xy_type, xy_value_list),)

        return (None,)

    def xy_value(self, input_mode, lora_name, model_strength, clip_strength, X_batch_count, X_batch_path, X_subdirectories,
                 X_batch_sort, X_first_value, X_last_value, Y_batch_count, Y_first_value, Y_last_value, lora_stack=None):

        x_value, y_value = [], []
        lora_stack = lora_stack if lora_stack else []

        if "Model Strength" in input_mode and "Clip Strength" in input_mode:
            if lora_name == 'None':
                return (None,None,)
        if "LoRA Batch" in input_mode:
            lora_name = None
        if "LoRA Weight" in input_mode:
            model_strength = None
            clip_strength = None
        if "Model Strength" in input_mode:
            model_strength = None
        if "Clip Strength" in input_mode:
            clip_strength = None

        # Handling X values
        if "X: LoRA Batch" in input_mode:
            try:
                x_value = self.lora_batch.xy_value(X_batch_path, X_subdirectories, X_batch_sort,
                                                   model_strength, clip_strength, X_batch_count, lora_stack)[0][1]
            except Exception as e:
                print(f"{error('XY Plot Error:')} {e}")
                return (None,)
            x_type = "LoRA Batch"
        elif "X: Model Strength" in input_mode:
            x_floats = generate_floats(X_batch_count, X_first_value, X_last_value)
            x_type = "LoRA MStr"
            x_value = [[(lora_name, x, clip_strength)] + lora_stack for x in x_floats]

        # Handling Y values
        y_floats = generate_floats(Y_batch_count, Y_first_value, Y_last_value)
        if "Y: LoRA Weight" in input_mode:
            y_type = "LoRA Wt"
            y_value = [[(lora_name, y, y)] + lora_stack for y in y_floats]
        elif "Y: Model Strength" in input_mode:
            y_type = "LoRA MStr"
            y_value = [[(lora_name, y, clip_strength)] + lora_stack for y in y_floats]
        elif "Y: Clip Strength" in input_mode:
            y_type = "LoRA CStr"
            y_value = [[(lora_name, model_strength, y)] + lora_stack for y in y_floats]

        return ((x_type, x_value), (y_type, y_value))

```
