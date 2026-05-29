
# Documentation
- Class name: XY Input: LoRA
- Category: Efficiency Nodes/XY Inputs
- Output node: False

This node is designed to process and manipulate LoRA (Low-Rank Adaptation) parameters to generate input data for XY plots. It handles various LoRA-related inputs, such as batch information, model and clip strengths, and weights, to produce structured data suitable for visualization or further analysis. The node can dynamically adapt to different LoRA configurations, ensuring compatibility and flexibility to meet diverse analysis needs.

# Input types
## Required
- input_mode
    - Specifies the node's operating mode, affecting how LoRA parameters are processed and interpreted in XY plots.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_path
    - Defines the file path for batch processing of LoRA parameters, enabling the node to process multiple inputs simultaneously for XY plots.
    - Comfy dtype: STRING
    - Python dtype: str
- subdirectories
    - Indicates whether to consider subdirectories when batch processing LoRA parameters, affecting the scope of included XY plot data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_sort
    - Determines the sorting order for batch processing of LoRA parameters, affecting the organization of XY plot data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_max
    - Sets the maximum number of batches to process, limiting the number of LoRA parameters considered for XY plots.
    - Comfy dtype: INT
    - Python dtype: int
- lora_count
    - Specifies the number of LoRA parameters to process, directly affecting the composition of XY plot data.
    - Comfy dtype: INT
    - Python dtype: int
- model_strength
    - Defines the model adjustment strength for LoRA parameters, affecting the intensity of modifications applied in XY plots.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength
    - Sets the clip strength for LoRA parameters, affecting the degree of clipping applied in XY plot processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_name_i
    - Identifies a single LoRA parameter by name, allowing specific selection and manipulation during XY plot processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_str_i
    - Specifies the model strength for a single LoRA parameter, enabling fine-grained control over the adjustment strength for each parameter.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_str_i
    - Determines the clip strength for a single LoRA parameter, allowing precise clip adjustments for each parameter.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- lora_stack
    - Represents an optional stack of LoRA parameters, contributing aggregated LoRA data to XY plots.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Any]

# Output types
- X or Y
    - Outputs structured LoRA data for XY plots, encapsulating various LoRA configurations and parameters in the X or Y axis.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[Any]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_LoRA:
    modes = ["LoRA Names", "LoRA Names+Weights", "LoRA Batch"]

    @classmethod
    def INPUT_TYPES(cls):
        loras = ["None"] + folder_paths.get_filename_list("loras")

        inputs = {
            "required": {
                "input_mode": (cls.modes,),
                "batch_path": ("STRING", {"default": xy_batch_default_path, "multiline": False}),
                "subdirectories": ("BOOLEAN", {"default": False}),
                "batch_sort": (["ascending", "descending"],),
                "batch_max": ("INT", {"default": -1, "min": -1, "max": XYPLOT_LIM, "step": 1}),
                "lora_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM, "step": 1}),
                "model_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                "clip_strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
            }
        }

        for i in range(1, XYPLOT_LIM+1):
            inputs["required"][f"lora_name_{i}"] = (loras,)
            inputs["required"][f"model_str_{i}"] = ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01})
            inputs["required"][f"clip_str_{i}"] = ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01})

        inputs["optional"] = {
            "lora_stack": ("LORA_STACK",)
        }
        return inputs

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def __init__(self):
        self.lora_batch = TSC_XYplot_LoRA_Batch()

    def xy_value(self, input_mode, batch_path, subdirectories, batch_sort, batch_max, lora_count, model_strength,
                 clip_strength, lora_stack=None, **kwargs):

        xy_type = "LoRA"
        result = (None,)
        lora_stack = lora_stack if lora_stack else []

        if "Batch" not in input_mode:
            # Extract values from kwargs
            loras = [kwargs.get(f"lora_name_{i}") for i in range(1, lora_count + 1)]
            model_strs = [kwargs.get(f"model_str_{i}", model_strength) for i in range(1, lora_count + 1)]
            clip_strs = [kwargs.get(f"clip_str_{i}", clip_strength) for i in range(1, lora_count + 1)]

            # Use model_strength and clip_strength for the loras where values are not provided
            if "Weights" not in input_mode:
                for i in range(lora_count):
                    model_strs[i] = model_strength
                    clip_strs[i] = clip_strength

            # Extend each sub-array with lora_stack if it's not None
            xy_value = [[(lora, model_str, clip_str)] + lora_stack for lora, model_str, clip_str
                        in zip(loras, model_strs, clip_strs) if lora != "None"]

            result = ((xy_type, xy_value),)
        else:
            try:
                result = self.lora_batch.xy_value(batch_path, subdirectories, batch_sort, model_strength,
                                                  clip_strength, batch_max, lora_stack)
            except Exception as e:
                print(f"{error('XY Plot Error:')} {e}")

        return result

```
