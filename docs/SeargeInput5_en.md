# Documentation
- Class name: SeargeInput5
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeInput5 node serves as a central hub for processing and integrating various condition scales and style parameters, providing a consistent input set for further processing. It is designed to handle both required and optional parameters, ensuring flexibility in input configuration while maintaining a structured approach to data flow.

# Input types
## Required
- base_conditioning_scale
    - The base condition scale is a critical parameter that influences the initial level of detail in the processing pipeline. It sets the tone for subsequent refinement stages, affecting the overall quality and resolution of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_conditioning_scale
    - The refinement condition scale is essential for fine-tuning the output after initial processing. It allows adjustments to the detail and clarity of the final result, ensuring the output is polished and refined.
    - Comfy dtype: FLOAT
    - Python dtype: float
- style_prompt_power
    - The style prompt power determines the influence of the style template on the final output. It is a key factor in shaping the artistic and aesthetic aspects of the result, allowing a balance between creativity and control.
    - Comfy dtype: FLOAT
    - Python dtype: float
- negative_style_power
    - The negative style power is used to counteract or suppress certain style elements in the output. It provides a mechanism for fine-grained control over the stylistic direction of the result, enabling a nuanced approach to style application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- style_template
    - The style template parameter plays a critical role in defining the stylistic framework of the output. It serves as a blueprint for artistic expression, guiding the overall look and feel of the final product.
    - Comfy dtype: SeargeParameterProcessor.STYLE_TEMPLATE
    - Python dtype: str
## Optional
- inputs
    - The optional input parameters allow additional customization and flexibility in node operation. They permit the integration of external data sources or parameters that can further refine the node's functionality.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The output parameters encapsulate the processed inputs, providing a structured dataset ready for downstream processing. This output is important as it forms the foundation for subsequent operations in the workflow.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeInput5:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_conditioning_scale': ('FLOAT', {'default': 2.0, 'min': 0.25, 'max': 4.0, 'step': 0.25}), 'refiner_conditioning_scale': ('FLOAT', {'default': 2.0, 'min': 0.25, 'max': 4.0, 'step': 0.25}), 'style_prompt_power': ('FLOAT', {'default': 0.33, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'negative_style_power': ('FLOAT', {'default': 0.67, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'style_template': (SeargeParameterProcessor.STYLE_TEMPLATE, {'default': SeargeParameterProcessor.STYLE_TEMPLATE[0]})}, 'optional': {'inputs': ('PARAMETER_INPUTS',)}}
    RETURN_TYPES = ('PARAMETER_INPUTS',)
    RETURN_NAMES = ('inputs',)
    FUNCTION = 'mux'
    CATEGORY = 'Searge/_deprecated_/UI/Inputs'

    def mux(self, base_conditioning_scale, refiner_conditioning_scale, style_prompt_power, negative_style_power, style_template, inputs=None):
        if inputs is None:
            parameters = {}
        else:
            parameters = inputs
        parameters['base_conditioning_scale'] = base_conditioning_scale
        parameters['refiner_conditioning_scale'] = refiner_conditioning_scale
        parameters['style_prompt_power'] = style_prompt_power
        parameters['negative_style_power'] = negative_style_power
        parameters['style_template'] = style_template
        return (parameters,)
```