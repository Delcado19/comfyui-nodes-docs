# Documentation
- Class name: WLSH_Prompt_Weight
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node adjusts the influence of prompts by applying weights, which is critical for fine-tuning the output of generative models. It allows users to emphasize or diminish certain prompts within a set, thereby controlling the overall direction of the generated content.

# Input types
## Required
- prompt
    - Prompts are text inputs that guide the output of generative models. They are essential as they set the context and theme for the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - The weight parameter adjusts the influence of a prompt, allowing fine-grained control over model responses. It affects how prominently the prompt is reflected in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- prompt
    - The modified prompt with applied weights can serve as input for subsequent nodes or models, now carrying the adjusted influence.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Prompt_Weight:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt': ('STRING', {'multiline': True, 'forceInput': True}), 'weight': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 5.0, 'step': 0.1})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('prompt',)
    FUNCTION = 'add_weight'
    CATEGORY = 'WLSH Nodes/text'

    def add_weight(self, prompt, weight):
        if weight == 1.0:
            new_string = prompt
        else:
            new_string = '(' + prompt + ':' + str(weight) + ')'
        return (new_string,)
```