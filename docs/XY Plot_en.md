
# Documentation
- Class name: XY Plot
- Category: Efficiency Nodes/Scripts
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The XY Plot node is designed to generate and manipulate XY charts based on various parameters and conditions. It supports multiple operations such as flipping axes, adjusting label orientation, caching models, and handling unique identifiers for chart generation. This node is flexible in processing and visualizing data in a structured XY chart format, adapting to different chart inputs and configurations.

# Input types
## Required
- grid_spacing
    - Specifies the spacing between grid lines in the chart, affecting the granularity and visual density of the chart.
    - Comfy dtype: INT
    - Python dtype: int
- XY_flip
    - A boolean parameter that determines whether to flip the X and Y axes, thereby changing the chart orientation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- Y_label_orientation
    - Controls the orientation of Y-axis labels, enhancing readability based on the chart's layout and presentation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cache_models
    - Indicates whether to cache model data for efficiency, reducing load time when generating charts repeatedly.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- ksampler_output_image
    - Output image from a ksampler, used as a reference or base for the XY chart.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- dependencies
    - Optional dependencies required for chart generation, such as additional data sources or configurations.
    - Comfy dtype: DEPENDENCIES
    - Python dtype: Dict[str, Any]
- X
    - X-axis values or data points of the chart, if connected they can be unpacked as a tuple.
    - Comfy dtype: XY
    - Python dtype: Tuple[float, ...]
- Y
    - Y-axis values or data points of the chart, similar to X, if connected they can be unpacked as a tuple.
    - Comfy dtype: XY
    - Python dtype: Tuple[float, ...]

# Output types
- SCRIPT
    - Returns a dictionary containing XY chart script configuration, including chart parameters and data points.
    - Comfy dtype: SCRIPT
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [KSampler SDXL (Eff.)](../../efficiency-nodes-comfyui/Nodes/KSampler SDXL (Eff.).md)



## Source code
```python
class TSC_XYplot:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
                    "grid_spacing": ("INT", {"default": 0, "min": 0, "max": 500, "step": 5}),
                    "XY_flip": (["False","True"],),
                    "Y_label_orientation": (["Horizontal", "Vertical"],),
                    "cache_models": (["True", "False"],),
                    "ksampler_output_image": (["Images","Plot"],),},
                "optional": {
                    "dependencies": ("DEPENDENCIES", ),
                    "X": ("XY", ),
                    "Y": ("XY", ),},
                "hidden": {"my_unique_id": "UNIQUE_ID"},
        }

    RETURN_TYPES = ("SCRIPT",)
    RETURN_NAMES = ("SCRIPT",)
    FUNCTION = "XYplot"
    CATEGORY = "Efficiency Nodes/Scripts"

    def XYplot(self, grid_spacing, XY_flip, Y_label_orientation, cache_models, ksampler_output_image, my_unique_id,
               dependencies=None, X=None, Y=None):

        # Unpack X & Y Tuples if connected
        if X != None:
            X_type, X_value  = X
        else:
            X_type = "Nothing"
            X_value = [""]
        if Y != None:
            Y_type, Y_value = Y
        else:
            Y_type = "Nothing"
            Y_value = [""]

        # If types are the same exit. If one isn't "Nothing", print error
        if X_type != "XY_Capsule" and (X_type == Y_type) and X_type not in ["Positive Prompt S/R", "Negative Prompt S/R"]:
            if X_type != "Nothing":
                print(f"{error('XY Plot Error:')} X and Y input types must be different.")
            return (None,)

        # Check that dependencies are connected for specific plot types
        encode_types = {
            "Checkpoint", "Refiner",
            "LoRA", "LoRA Batch", "LoRA Wt", "LoRA MStr", "LoRA CStr",
            "Positive Prompt S/R", "Negative Prompt S/R",
            "AScore+", "AScore-",
            "Clip Skip", "Clip Skip (Refiner)",
            "ControlNetStrength", "ControlNetStart%", "ControlNetEnd%"
        }

        if X_type in encode_types or Y_type in encode_types:
            if dependencies is None:  # Not connected
                print(f"{error('XY Plot Error:')} The dependencies input must be connected for certain plot types.")
                # Return None
                return (None,)

        # Check if both X_type and Y_type are special lora_types
        lora_types = {"LoRA Batch", "LoRA Wt", "LoRA MStr", "LoRA CStr"}
        if (X_type in lora_types and Y_type not in lora_types) or (Y_type in lora_types and X_type not in lora_types):
            print(
                f"{error('XY Plot Error:')} Both X and Y must be connected to use the 'LoRA Plot' node.")
            return (None,)

        # Clean Schedulers from Sampler data (if other type is Scheduler)
        if X_type == "Sampler" and Y_type == "Scheduler":
            # Clear X_value Scheduler's
            X_value = [(x[0], "") for x in X_value]
        elif Y_type == "Sampler" and X_type == "Scheduler":
            # Clear Y_value Scheduler's
            Y_value = [(y[0], "") for y in Y_value]

        # Embed information into "Scheduler" X/Y_values for text label
        if X_type == "Scheduler" and Y_type != "Sampler":
            # X_value second tuple value of each array entry = None
            X_value = [(x, None) for x in X_value]

        if Y_type == "Scheduler" and X_type != "Sampler":
            # Y_value second tuple value of each array entry = None
            Y_value = [(y, None) for y in Y_value]

        # Clean VAEs from Checkpoint data if other type is VAE
        if X_type == "Checkpoint" and Y_type == "VAE":
            # Clear X_value VAE's
            X_value = [(t[0], t[1], None) for t in X_value]
        elif Y_type == "VAE" and X_type == "Checkpoint":
            # Clear Y_value VAE's
            Y_value = [(t[0], t[1], None) for t in Y_value]

        # Flip X and Y
        if XY_flip == "True":
            X_type, Y_type = Y_type, X_type
            X_value, Y_value = Y_value, X_value
            
        # Define Ksampler output image behavior
        xyplot_as_output_image = ksampler_output_image == "Plot"

        # Pack xyplot tuple into its dictionary item under script
        script = {"xyplot": (X_type, X_value, Y_type, Y_value, grid_spacing, Y_label_orientation, cache_models,
                        xyplot_as_output_image, my_unique_id, dependencies)}

        return (script,)

```
