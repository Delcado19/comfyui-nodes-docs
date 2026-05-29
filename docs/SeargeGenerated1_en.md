# Documentation
- Class name: SeargeGenerated1
- Category: Searge/_deprecated_/UI/Generated
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a multiplexer, routing input parameters to specific operations and styles as specified by the inputs.

# Input types
## Required
- parameters
    - This parameter holds key-value pairs that indicate the node's operation and style selection, playing a critical role in determining the node's behavior and output.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The output retains the input parameters, providing a foundation for subsequent operations.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]
- operation_selector
    - This output identifies the selected operation, guiding the node's processing flow.
    - Comfy dtype: str
    - Python dtype: str
- prompt_style_selector
    - This output represents the selected prompt style, affecting the presentation and formatting of the node's results.
    - Comfy dtype: str
    - Python dtype: str
- prompt_style_group
    - This output represents the prompt style group, influencing the overall aesthetics and structure of the node's output.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeGenerated1:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'parameters': ('PARAMETERS',)}}
    RETURN_TYPES = ('PARAMETERS', 'INT', 'INT', 'INT')
    RETURN_NAMES = ('parameters', 'operation_selector', 'prompt_style_selector', 'prompt_style_group')
    FUNCTION = 'demux'
    CATEGORY = 'Searge/_deprecated_/UI/Generated'

    def demux(self, parameters):
        operation_selector = parameters['operation_selector']
        prompt_style_selector = parameters['prompt_style_selector']
        prompt_style_group = parameters['prompt_style_group']
        return (parameters, operation_selector, prompt_style_selector, prompt_style_group)
```