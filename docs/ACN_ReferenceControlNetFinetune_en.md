# Documentation
- Class name: ReferenceControlFinetune
- Category: Adv-ControlNet 🛂🅐🅒🅝/Reference
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

ReferenceControlFinetune is a control network fine-tuning node for advanced image processing tasks. It leverages attention and adaptive instance normalization mechanisms to achieve high fidelity in style transfer and content adaptation. This node plays a critical role in enhancing control over the generative process, allowing fine-tuning of the final output.

# Input types
## Required
- attn_style_fidelity
    - The attn_style_fidelity parameter controls the fidelity of the attention mechanism when applying style transfer. It is crucial for balancing stylization effects and preserving content details, thereby influencing the overall aesthetic outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_ref_weight
    - The attn_ref_weight parameter determines the weight of the reference in the attention mechanism, influencing the degree to which style transfer is guided by the reference content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attn_strength
    - The attn_strength parameter adjusts the intensity of the attention mechanism's influence on the stylization process, allowing control over the strength of the applied style.
    - Comfy dtype: FLOAT
    - Python dtype: float
- adain_style_fidelity
    - The adain_style_fidelity parameter determines the level of adaptive instance normalization fidelity when applying styles, which is essential for maintaining the integrity of original image features while applying styles.
    - Comfy dtype: FLOAT
    - Python dtype: float
- adain_ref_weight
    - The adain_ref_weight parameter sets the reference weight in adaptive instance normalization, influencing the strength of the reference style applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- adain_strength
    - The adain_strength parameter defines the overall intensity of the adaptive instance normalization effect, allowing fine-tuning of how the style is integrated into the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- control_net
    - The output of the ReferenceControlFinetune node is a control network that encapsulates the fine-tuned parameters and mechanisms for advanced style control and manipulation. It is a key component for subsequent image generation tasks.
    - Comfy dtype: CONTROL_NET
    - Python dtype: comfy.controlnet.ControlBase

# Usage tips
- Infra type: GPU

# Source code
```
class ReferenceControlFinetune:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'attn_style_fidelity': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'attn_ref_weight': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'attn_strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'adain_style_fidelity': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'adain_ref_weight': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'adain_strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONTROL_NET',)
    FUNCTION = 'load_controlnet'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/Reference'

    def load_controlnet(self, attn_style_fidelity: float, attn_ref_weight: float, attn_strength: float, adain_style_fidelity: float, adain_ref_weight: float, adain_strength: float):
        ref_opts = ReferenceOptions(reference_type=ReferenceType.ATTN_ADAIN, attn_style_fidelity=attn_style_fidelity, attn_ref_weight=attn_ref_weight, attn_strength=attn_strength, adain_style_fidelity=adain_style_fidelity, adain_ref_weight=adain_ref_weight, adain_strength=adain_strength)
        controlnet = ReferenceAdvanced(ref_opts=ref_opts, timestep_keyframes=None)
        return (controlnet,)
```