
# Documentation
- Class name: LoRA Stacker
- Category: Efficiency Nodes/Stackers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoRA Stacker node is designed to aggregate and configure LoRA (Low-Rank Adaptation) parameters into a structured format for operation and application across different model components. This node supports dynamic configuration through input parameters, allowing custom LoRA parameters to be defined according to specific requirements.

# Input types
## Required
- input_mode
    - Specify the input processing mode, which determines how LoRA parameters are aggregated and built. This affects the configuration and representation of LoRA parameters in the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_count
    - Define the number of LoRA parameters to consider, determining the scale of aggregation and the number of parameters to process.
    - Comfy dtype: INT
    - Python dtype: int
- lora_name_i
    - Specify the name of each LoRA parameter, allowing individual LoRA adjustments to be identified and configured.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_wt_i
    - Determine the weight of each LoRA parameter, influencing the degree to which the adjustment affects the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_str_i
    - Specify the model adjustment strength of each LoRA parameter, influencing model behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_str_i
    - Define the clipping strength of each LoRA parameter, controlling the extent to which the adjustment is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- lora_stack
    - An optional pre-configured LoRA parameter stack that can be extended or modified with the current configuration, enhancing the flexibility of LoRA parameter management.
    - Comfy dtype: LORA_STACK
    - Python dtype: list of tuples

# Output types
- LORA_STACK
    - Returns a structured representation of LoRA parameters, suitable for further processing or application within model components.
    - Comfy dtype: LORA_STACK
    - Python dtype: list of tuples


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Efficient Loader](../../efficiency-nodes-comfyui/Nodes/Efficient Loader.md)
    - [Eff. Loader SDXL](../../efficiency-nodes-comfyui/Nodes/Eff. Loader SDXL.md)
    - [CR Apply LoRA Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Apply LoRA Stack.md)
    - Reroute



## Source code
```python
class TSC_LoRA_Stacker:
    modes = ["simple", "advanced"]

    @classmethod
    def INPUT_TYPES(cls):
        loras = ["None"] + folder_paths.get_filename_list("loras")
        inputs = {
            "required": {
                "input_mode": (cls.modes,),
                "lora_count": ("INT", {"default": 3, "min": 0, "max": 50, "step": 1}),
            }
        }

        for i in range(1, 50):
            inputs["required"][f"lora_name_{i}"] = (loras,)
            inputs["required"][f"lora_wt_{i}"] = ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01})
            inputs["required"][f"model_str_{i}"] = ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01})
            inputs["required"][f"clip_str_{i}"] = ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01})

        inputs["optional"] = {
            "lora_stack": ("LORA_STACK",)
        }
        return inputs

    RETURN_TYPES = ("LORA_STACK",)
    RETURN_NAMES = ("LORA_STACK",)
    FUNCTION = "lora_stacker"
    CATEGORY = "Efficiency Nodes/Stackers"

    def lora_stacker(self, input_mode, lora_count, lora_stack=None, **kwargs):

        # Extract values from kwargs
        loras = [kwargs.get(f"lora_name_{i}") for i in range(1, lora_count + 1)]

        # Create a list of tuples using provided parameters, exclude tuples with lora_name as "None"
        if input_mode == "simple":
            weights = [kwargs.get(f"lora_wt_{i}") for i in range(1, lora_count + 1)]
            loras = [(lora_name, lora_weight, lora_weight) for lora_name, lora_weight in zip(loras, weights) if
                     lora_name != "None"]
        else:
            model_strs = [kwargs.get(f"model_str_{i}") for i in range(1, lora_count + 1)]
            clip_strs = [kwargs.get(f"clip_str_{i}") for i in range(1, lora_count + 1)]
            loras = [(lora_name, model_str, clip_str) for lora_name, model_str, clip_str in
                     zip(loras, model_strs, clip_strs) if lora_name != "None"]

        # If lora_stack is not None, extend the loras list with lora_stack
        if lora_stack is not None:
            loras.extend([l for l in lora_stack if l[0] != "None"])

        return (loras,)

```
