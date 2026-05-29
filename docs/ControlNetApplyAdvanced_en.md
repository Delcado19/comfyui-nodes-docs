# Documentation
- Class name: ControlNetApplyAdvanced
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ControlNetApplyAdvanced node is designed to apply a control network to a set of conditioning inputs, enhancing precision and control over the generation process. It operates by adjusting the influence of positive and negative conditioning factors, allowing fine-tuning of the output based on specific image features and desired strength.

# Input types
## Required
- positive
    - The "positive" input represents desired features that should be emphasized in the output. It is crucial for guiding the generation process toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The "negative" input contains features that should be avoided in the output. It plays an important role in refining the generation process to exclude unwanted elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- control_net
    - The "control_net" parameter is a preconfigured network used to manage the application of control prompts. It is essential to the node's functionality, determining how conditioning is applied.
    - Comfy dtype: CONTROL_NET
    - Python dtype: ControlNet
- image
    - The "image" input is the visual data to which the control network will be applied. It is a fundamental component as it defines the context for the conditioning process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The "strength" parameter determines the intensity of the control network's influence on the output. It is a key factor in controlling the degree of change induced by conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The "start_percent" parameter specifies the starting point of the control network effect relative to the image dimensions. It is important in defining the initial range of control application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The "end_percent" parameter marks the endpoint of the control network's influence. It is crucial in defining the range over which the control network affects the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The "positive" output is refined conditioning data adjusted by the control network, ensuring desired features are more prominent in the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The "negative" output reflects conditioning data where unwanted features are minimized through the application of the control network.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ControlNetApplyAdvanced:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'control_net': ('CONTROL_NET',), 'image': ('IMAGE',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_percent': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('positive', 'negative')
    FUNCTION = 'apply_controlnet'
    CATEGORY = 'conditioning'

    def apply_controlnet(self, positive, negative, control_net, image, strength, start_percent, end_percent):
        if strength == 0:
            return (positive, negative)
        control_hint = image.movedim(-1, 1)
        cnets = {}
        out = []
        for conditioning in [positive, negative]:
            c = []
            for t in conditioning:
                d = t[1].copy()
                prev_cnet = d.get('control', None)
                if prev_cnet in cnets:
                    c_net = cnets[prev_cnet]
                else:
                    c_net = control_net.copy().set_cond_hint(control_hint, strength, (start_percent, end_percent))
                    c_net.set_previous_controlnet(prev_cnet)
                    cnets[prev_cnet] = c_net
                d['control'] = c_net
                d['control_apply_to_uncond'] = False
                n = [t[0], d]
                c.append(n)
            out.append(c)
        return (out[0], out[1])
```