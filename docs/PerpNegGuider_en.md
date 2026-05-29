# Documentation
- Class name: PerpNegGuider
- Category: _for_testing
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PerpNegGuider node aims to guide the generation process by providing conditional inputs that influence the model output. It steers the generation process by setting positive and negative conditions as well as a null condition to achieve the desired result. The node also allows configuring a scaling factor and a control parameter, enhancing the flexibility and precision of the guidance.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the generative model the node will interact with. It is the foundation of the node's functionality, making it possible to guide the generation process according to specified conditions.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive conditioning parameter is essential for defining the positive aspects the guider should focus on during the generation process. It helps shape the output into the desired qualities.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - The negative conditioning parameter is used to specify which aspects should be avoided in the generated output. It plays a key role in refining the generated content to exclude unwanted elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- empty_conditioning
    - The null conditioning parameter is used to set a baseline or neutral state for the generation process. It is important for establishing a reference point from which the positive and negative conditions can effectively guide the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
## Optional
- cfg
    - The cfg parameter acts as a control factor that adjusts the influence of conditioning on the generation process. It is important for fine-tuning the balance between guidance and the model's natural generation tendency.
    - Comfy dtype: FLOAT
    - Python dtype: float
- neg_scale
    - The neg_scale parameter adjusts the influence of negative conditioning, allowing fine-tuning of the degree to which unwanted aspects are discouraged in the generation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- guider
    - The guider output is a configured guidance object that encapsulates the conditions and settings provided by the node. It plays an important role in guiding the generative model to produce outputs consistent with the specified guidance.
    - Comfy dtype: GUIDER
    - Python dtype: comfy.samplers.CFGGuider

# Usage tips
- Infra type: CPU

# Source code
```
class PerpNegGuider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'empty_conditioning': ('CONDITIONING',), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0, 'step': 0.1, 'round': 0.01}), 'neg_scale': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 100.0, 'step': 0.01})}}
    RETURN_TYPES = ('GUIDER',)
    FUNCTION = 'get_guider'
    CATEGORY = '_for_testing'

    def get_guider(self, model, positive, negative, empty_conditioning, cfg, neg_scale):
        guider = Guider_PerpNeg(model)
        guider.set_conds(positive, negative, empty_conditioning)
        guider.set_cfg(cfg, neg_scale)
        return (guider,)
```