# Documentation
- Class name: SeargeStylePreprocessor
- Category: Searge/_deprecated_/UI
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

SeargeStylePreprocessor is designed to process and manipulate style-related inputs within the processing pipeline, ensuring that style information is correctly interpreted and prepared for subsequent stages.

# Input types
## Required
- inputs
    - This parameter is the main data source for preprocessing operations. It contains various inputs essential for the node's normal operation and producing meaningful results.
    - Comfy dtype: DICT[str, Any]
    - Python dtype: Dict[str, Any]
- active_style_name
    - This parameter is crucial for identifying active styles in the input set. It guides preprocessing by specifying which style definitions should be applied.
    - Comfy dtype: STRING
    - Python dtype: str
- style_definitions
    - This parameter contains definitions of various styles that may be used in preprocessing. It is important for the node because it determines how styles are interpreted and transformed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- inputs
    - The processed input is returned as correctly prepared and structured style information, allowing seamless integration into the next stage of the processing pipeline.
    - Comfy dtype: DICT[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeStylePreprocessor:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'inputs': ('PARAMETER_INPUTS',), 'active_style_name': ('STRING', {'multiline': False, 'default': ''}), 'style_definitions': ('STRING', {'multiline': True, 'default': '[unfinished work in progress]'})}}
    RETURN_TYPES = ('PARAMETER_INPUTS',)
    RETURN_NAMES = ('inputs',)
    FUNCTION = 'process'
    CATEGORY = 'Searge/_deprecated_/UI'

    def process(self, inputs, active_style_name, style_definitions):
        if inputs is None:
            inputs = {}
        style_template = inputs['style_template']
        if style_template is None or style_template != SeargeParameterProcessor.STYLE_TEMPLATE[1]:
            return (inputs,)
        return (inputs,)
```