
# Documentation
- Class name: XY Input: Control Net
- Category: Efficiency Nodes/XY Inputs
- Output node: False

This node is designed to generate and manipulate XY input data for control networks, facilitating exploration of variations in different control parameters (such as strength, start percentage, and end percentage) across image batches. It dynamically adjusts control network parameters to optimize image generation, supports complex conditioning scenarios, and enables detailed analysis and visualization of control network effects.

# Input types
## Required
- control_net
    - The control network configuration to be applied or manipulated across image batches, central to determining the impact on generated images.
    - Comfy dtype: CONTROL_NET
    - Python dtype: object
- image
    - The image or image batch to which the control network parameters are applied, serving as the basis for control network effect analysis.
    - Comfy dtype: IMAGE
    - Python dtype: object
- target_parameter
    - The specific control network parameters to vary across the batch, such as strength, start percentage, or end percentage, used to guide the generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Specifies the number of variations to generate for a given control parameter, for detailed exploration of its impact.
    - Comfy dtype: INT
    - Python dtype: int
- first_strength
    - The initial strength value for the control network parameter variation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_strength
    - The final strength value for the control network parameter variation, allowing a range of adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- first_start_percent
    - The initial start percentage value for the control network parameter variation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_start_percent
    - The final start percentage value for the control network parameter variation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- first_end_percent
    - The initial end percentage value for the control network parameter variation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_end_percent
    - The final end percentage value for the control network parameter variation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The strength level applied to the control network, affecting the intensity of its effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start percentage of the control network effect, determining its initial influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end percentage of the control network effect, determining its final influence.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- cnet_stack
    - Optional additional control network configuration stack, allowing layered or sequential application of multiple control networks.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: object

# Output types
- X or Y
    - X-axis or Y-axis values generated based on control network parameters, structured for integration into visualization or analysis tools.
    - Comfy dtype: XY
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_XYplot_Control_Net(TSC_XYplot_Control_Net_Strength, TSC_XYplot_Control_Net_Start, TSC_XYplot_Control_Net_End):
    parameters = ["strength", "start_percent", "end_percent"]
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "control_net": ("CONTROL_NET",),
                "image": ("IMAGE",),
                "target_parameter": (cls.parameters,),
                "batch_count": ("INT", {"default": XYPLOT_DEF, "min": 0, "max": XYPLOT_LIM}),
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
            "optional": {"cnet_stack": ("CONTROL_NET_STACK",)},
        }

    RETURN_TYPES = ("XY",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"
    CATEGORY = "Efficiency Nodes/XY Inputs"

    def xy_value(self, control_net, image, target_parameter, batch_count, first_strength, last_strength, first_start_percent,
                 last_start_percent, first_end_percent, last_end_percent, strength, start_percent, end_percent, cnet_stack=None):

        if target_parameter == "strength":
            return TSC_XYplot_Control_Net_Strength.xy_value(self, control_net, image, batch_count, first_strength,
                                                            last_strength, start_percent, end_percent, cnet_stack=cnet_stack)
        elif target_parameter == "start_percent":
            return TSC_XYplot_Control_Net_Start.xy_value(self, control_net, image, batch_count, first_start_percent,
                                                         last_start_percent, strength, end_percent, cnet_stack=cnet_stack)
        elif target_parameter == "end_percent":
            return TSC_XYplot_Control_Net_End.xy_value(self, control_net, image, batch_count, first_end_percent,
                                                       last_end_percent, strength, start_percent, cnet_stack=cnet_stack)

```
