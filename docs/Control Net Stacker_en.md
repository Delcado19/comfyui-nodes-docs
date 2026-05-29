
# Documentation
- Class name: Control Net Stacker
- Category: Efficiency Nodes/Stackers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Control Net Stacker node aims to aggregate control nets and their associated images, strengths, and percentage ranges into a stack. This functionality is crucial for managing and applying multiple control nets in a sequential or layered manner, thereby enhancing the flexibility and efficiency of the image processing process.

# Input types
## Required
- control_net
    - The control net to be added to the stack. It plays a central role in defining the operations or adjustments to be applied to the image.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
- image
    - The image associated with the control net. This image serves as a reference or target for the control net application.
    - Comfy dtype: IMAGE
    - Python dtype: str
- strength
    - Defines the strength of the control net's influence on the image, allowing for fine adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Specifies the starting point of the control net effect during the image generation process, enabling precise control over the timing of application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Determines the end point of the control net effect, further refining the temporal precision of application.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- cnet_stack
    - The existing control net stack to which the new control net will be added, facilitating the accumulation of multiple nets.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: list

# Output types
- CNET_STACK
    - The updated control net stack, where each net is associated with a specific image, strength, and percentage range, ready for sequential or layered application.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Efficient Loader](../../efficiency-nodes-comfyui/Nodes/Efficient Loader.md)



## Source code
```python
class TSC_Control_Net_Stacker:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"control_net": ("CONTROL_NET",),
                             "image": ("IMAGE",),
                             "strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                             "start_percent": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}),
                             "end_percent": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.001})},
                "optional": {"cnet_stack": ("CONTROL_NET_STACK",)},
                }

    RETURN_TYPES = ("CONTROL_NET_STACK",)
    RETURN_NAMES = ("CNET_STACK",)
    FUNCTION = "control_net_stacker"
    CATEGORY = "Efficiency Nodes/Stackers"

    def control_net_stacker(self, control_net, image, strength, start_percent, end_percent, cnet_stack=None):
        # If control_net_stack is None, initialize as an empty list
        cnet_stack = [] if cnet_stack is None else cnet_stack

        # Extend the control_net_stack with the new tuple
        cnet_stack.extend([(control_net, image, strength, start_percent, end_percent)])

        return (cnet_stack,)

```
