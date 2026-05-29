# Documentation
- Class name: PromptBuilder
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The PromptBuilder node is designed to conveniently construct and manipulate prompts for various applications. It processes input text according to preset configurations or user-defined parameters and outputs a refined prompt.

# Input types
## Required
- category
    - The ‘category’ parameter is crucial because it determines the preset categories available to the prompt builder. It influences the range of options that can be used when building a prompt, thereby affecting the final output.
    - Comfy dtype: COMBO[category]
    - Python dtype: List[str]
- text
    - The ‘text’ parameter is the primary input for PromptBuilder. It is the raw material that the node processes and shapes according to the specified configuration, significantly impacting the operation result.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - The ‘output’ represents the final processed prompt produced by PromptBuilder. It contains the transformations and refinements applied to the input text, reflecting the node’s core functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptBuilder:

    @classmethod
    def INPUT_TYPES(s):
        global prompt_builder_preset
        presets = ['#PRESET']
        return {'required': {'category': (list(prompt_builder_preset.keys()) + ['#PLACEHOLDER'],), 'preset': (presets,), 'text': ('STRING', {'multiline': True})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Prompt'

    def doit(self, **kwargs):
        return (kwargs['text'],)
```