# Documentation
- Class name: PromptComposerStyler
- Category: AI WizArt/Prompt Composer Tools/Deprecated
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

The PromptComposerStyler node aims to enhance the creative process by applying stylistic elements, allowing the integration of style preferences and weights so users can fine-tune the artistic direction of text. The node's functionality centers on the concept of style application, seeking to enhance the original text through specified aesthetics, thereby contributing to the overall thematic and tonal quality of the work.

# Input types
## Required
- text_in_opt
    - The 'text_in_opt' parameter is an optional input that allows users to provide the base text to which stylistic elements will be applied. Its importance lies in serving as the foundation for the node's operation, determining the content that will be artistically enhanced.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The 'style' parameter is essential for defining the artistic style that will be integrated into the text. It is a required input that determines the aesthetic characteristics the node will apply to the text, thereby influencing the final creative output.
    - Comfy dtype: STRING
    - Python dtype: str
- style_weight
    - The 'style_weight' parameter is crucial for adjusting the intensity of the applied style. It allows fine-grained control over the degree to which the style is reflected in the text, ensuring a balance between the original content and the stylistic overlay.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - The 'active' parameter is a boolean flag that determines whether the style application process is initiated. When set to True, it activates the node's functionality, allowing the style to be applied to the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_out
    - The 'text_out' output parameter represents the final text after applying stylistic elements. It contains the node's creative contribution, showcasing the result of the style application process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptComposerStyler:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'optional': {'text_in_opt': ('STRING', {'forceInput': True})}, 'required': {'style': (styles, {'default': styles[0]}), 'style_weight': ('FLOAT', {'default': 1, 'step': 0.05, 'min': 0, 'max': 1.95, 'display': 'slider'}), 'active': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('text_out',)
    FUNCTION = 'promptComposerStyler'
    CATEGORY = 'AI WizArt/Prompt Composer Tools/Deprecated'

    def promptComposerStyler(self, text_in_opt='', style='-', style_weight=0, active=True):
        prompt = []
        if text_in_opt != '':
            prompt.append(text_in_opt)
        if style != '-' and style_weight > 0 and active:
            prompt.append(f'({style} style:{round(style_weight, 2)})')
        if len(prompt) > 0:
            prompt = ', '.join(prompt)
            prompt = prompt.lower()
            return (prompt,)
        else:
            return ('',)
```