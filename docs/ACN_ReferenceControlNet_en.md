# Documentation
- Class name: ReferenceControlNetNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/Reference
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The ReferenceControlNetNode class is designed to manage the loading and application of control networks with reference options. It encapsulates the logic for creating advanced control structures that can be used to guide the behavior of generative models, providing a flexible interface to control the generation process based on user-defined reference types and style fidelity.

# Input types
## Required
- reference_type
    - The reference type parameter determines the type of control network to use, which has a significant impact on the style and behavior of the generated output. It is crucial for defining the method of the control mechanism and its influence on the final result.
    - Comfy dtype: str
    - Python dtype: str
- style_fidelity
    - The style fidelity parameter adjusts the degree of adherence to the reference style, affecting the stylistic consistency of the output. It plays an important role in balancing creative output with the desired level of style control.
    - Comfy dtype: float
    - Python dtype: float
- ref_weight
    - The ref_weight parameter sets the weight of the reference within the control network, directly influencing the strength of the applied control. It is essential for fine-tuning the impact of the control on the generation process.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- CONTROL_NET
    - The output of ReferenceControlNetNode is a control network object that encapsulates the advanced control logic. It is significant for guiding the generative model toward the desired outcome by applying the specified control parameters.
    - Comfy dtype: ControlBase
    - Python dtype: comfy.controlnet.ControlBase

# Usage tips
- Infra type: CPU

# Source code
```
class ReferenceControlNetNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'reference_type': (ReferenceType._LIST,), 'style_fidelity': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'ref_weight': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONTROL_NET',)
    FUNCTION = 'load_controlnet'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/Reference'

    def load_controlnet(self, reference_type: str, style_fidelity: float, ref_weight: float):
        ref_opts = ReferenceOptions.create_combo(reference_type=reference_type, style_fidelity=style_fidelity, ref_weight=ref_weight)
        controlnet = ReferenceAdvanced(ref_opts=ref_opts, timestep_keyframes=None)
        return (controlnet,)
```