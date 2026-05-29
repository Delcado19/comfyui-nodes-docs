
# Documentation
- Class name: easy XYInputs: ControlNet
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to simplify the process of applying control network parameters, enabling users to dynamically adjust image processing across a range of values, based on the strength and position of the control network. It provides a versatile tool for experimenting with different control network configurations, enhancing the ability to fine-tune image generation or modification tasks.

# Input types
## Required
- control_net_name
    - Specifies the name of the control network to apply. This parameter is crucial for identifying which control network configuration to use during the operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image
    - The image to which control network adjustments will be applied. This parameter is central to the node's functionality, serving as the foundation for subsequent control network operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_parameter
    - Determines the specific control network parameter to vary, such as strength or position, guiding the node's processing and output generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Defines the number of variants to generate, allowing exploration of a range of control network adjustments in a single operation.
    - Comfy dtype: INT
    - Python dtype: int
- first_strength
    - Sets the starting strength value of the control network, marking the beginning of the strength adjustment range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_strength
    - Sets the ending strength value of the control network, marking the end of the strength adjustment range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- first_start_percent
    - Specifies the starting percentage of control network application, defining the initial point of effect along the image axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_start_percent
    - Specifies the ending percentage of control network application, defining the final point of effect along the image axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- first_end_percent
    - Determines the starting end percentage of the control network effect, establishing the initial boundary of control network influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_end_percent
    - Determines the ending end percentage of the control network effect, establishing the final boundary of control network influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The intensity of the control network effect to apply, influencing the strength of the control network's impact on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The starting percentage of control network application, indicating the initial point of the control network's effect on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The ending percentage of control network application, indicating the final point of the control network's effect on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Outputs a series of values or configurations based on the specified control network parameters, facilitating exploration and fine-tuning of image processing tasks.
    - Comfy dtype: X_Y
    - Python dtype: List[Tuple[str, torch.Tensor, float, float, float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Control_Net:
    parameters = ["strength", "start_percent", "end_percent"]
    @classmethod
    def INPUT_TYPES(cls):
        def get_file_list(filenames):
            return [file for file in filenames if file != "put_models_here.txt" and "lllite" not in file]

        return {
            "required": {
                "control_net_name": (get_file_list(folder_paths.get_filename_list("controlnet")),),
                "image": ("IMAGE",),
                "target_parameter": (cls.parameters,),
                "batch_count": ("INT", {"default": 3, "min": 1, "max": 30}),
                "first_strength": ("FLOAT", {"default": 0.0, "min": 0.00, "max": 10.0, "step": 0.01}),
                "last_strength": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 10.0, "step": 0.01}),
                "first_start_percent": ("FLOAT", {"default": 0.0, "min": 0.00, "max": 1.0, "step": 0.01}),
                "last_start_percent": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 1.0, "step": 0.01}),
                "first_end_percent": ("FLOAT", {"default": 0.0, "min": 0.00, "max": 1.0, "step": 0.01}),
                "last_end_percent": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 1.0, "step": 0.01}),
                "strength": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 10.0, "step": 0.01}),
                "start_percent": ("FLOAT", {"default": 0.0, "min": 0.00, "max": 1.0, "step": 0.01}),
                "end_percent": ("FLOAT", {"default": 1.0, "min": 0.00, "max": 1.0, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, control_net_name, image, target_parameter, batch_count, first_strength, last_strength, first_start_percent,
                 last_start_percent, first_end_percent, last_end_percent, strength, start_percent, end_percent):

        axis, = None,

        values = []

        if target_parameter == "strength":
            axis = "advanced: ControlNetStrength"

            values.append([(control_net_name, image, first_strength, start_percent, end_percent)])
            strength_increment = (last_strength - first_strength) / (batch_count - 1) if batch_count > 1 else 0
            for i in range(1, batch_count - 1):
                values.append([(control_net_name, image, first_strength + i * strength_increment, start_percent,
                                end_percent)])
            if batch_count > 1:
                values.append([(control_net_name, image, last_strength, start_percent, end_percent)])

        elif target_parameter == "start_percent":
            axis = "advanced: ControlNetStart%"

            percent_increment = (last_start_percent - first_start_percent) / (batch_count - 1) if batch_count > 1 else 0
            values.append([(control_net_name, image, strength, first_start_percent, end_percent)])
            for i in range(1, batch_count - 1):
                values.append([(control_net_name, image, strength, first_start_percent + i * percent_increment,
                                  end_percent)])

            # Always add the last start_percent if batch_count is more than 1.
            if batch_count > 1:
                values.append((control_net_name, image, strength, last_start_percent, end_percent))

        elif target_parameter == "end_percent":
            axis = "advanced: ControlNetEnd%"

            percent_increment = (last_end_percent - first_end_percent) / (batch_count - 1) if batch_count > 1 else 0
            values.append([(control_net_name, image, image, strength, start_percent, first_end_percent)])
            for i in range(1, batch_count - 1):
                values.append([(control_net_name, image, strength, start_percent,
                                  first_end_percent + i * percent_increment)])

            if batch_count > 1:
                values.append([(control_net_name, image, strength, start_percent, last_end_percent)])


        return ({"axis": axis, "values": values},)

```
