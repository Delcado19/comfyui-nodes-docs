
# Documentation
- Class name: Apply ControlNet Stack
- Category: Efficiency Nodes/Stackers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Apply ControlNet Stack node aims to enhance the conditioning of positive and negative prompts by applying a series of control networks. This process dynamically adjusts prompts based on specified control networks, images, and strength parameters, optimizing conditions for more targeted and effective generation results.

# Input types
## Required
- positive
    - The positive prompt to be conditioned. It serves as the initial input for the control network stack application, influencing the generation process toward desired attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- negative
    - The negative prompt to be conditioned. It acts as the counterpart to the positive prompt, steering the generation process away from undesired attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
## Optional
- cnet_stack
    - An optional control network stack and related parameters, applied sequentially to both positive and negative prompts. This stack enables complex, multi-layered conditioning adjustments.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: Optional[List[Tuple[ControlNet, torch.Tensor, float, float, float]]]

# Output types
- CONDITIONING+
    - The conditioned positive prompt after the control network stack has been applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]
- CONDITIONING-
    - The conditioned negative prompt after the control network stack has been applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class TSC_Apply_ControlNet_Stack:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"positive": ("CONDITIONING",),
                             "negative": ("CONDITIONING",)},
                "optional": {"cnet_stack": ("CONTROL_NET_STACK",)}
                }

    RETURN_TYPES = ("CONDITIONING","CONDITIONING",)
    RETURN_NAMES = ("CONDITIONING+","CONDITIONING-",)
    FUNCTION = "apply_cnet_stack"
    CATEGORY = "Efficiency Nodes/Stackers"

    def apply_cnet_stack(self, positive, negative, cnet_stack=None):
        if cnet_stack is None:
            return (positive, negative)

        for control_net_tuple in cnet_stack:
            control_net, image, strength, start_percent, end_percent = control_net_tuple
            controlnet_conditioning = ControlNetApplyAdvanced().apply_controlnet(positive, negative, control_net, image,
                                                                                 strength, start_percent, end_percent)
            positive, negative = controlnet_conditioning[0], controlnet_conditioning[1]

        return (positive, negative, )

```
