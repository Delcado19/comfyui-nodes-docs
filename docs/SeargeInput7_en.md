# Documentation
- Class name: SeargeInput7
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a multiplexer for input parameters, simplifying the integration of various settings into the system. It ensures parameters are correctly routed and managed, facilitating overall operation without manual intervention.

# Input types
## Required
- lora_strength
    - Lora strength is a critical parameter that affects the system's sensitivity to input signals. It is essential for adjusting responsiveness and ensuring the desired output is achieved.
    - Comfy dtype: FLOAT
    - Python dtype: float
- operation_mode
    - Operation mode determines the general working state of the system, influencing its behavior and how it processes inputs. This is crucial for aligning the system's functionality with the intended use case.
    - Comfy dtype: ENUM
    - Python dtype: str
- prompt_style
    - Prompt style shapes how the system presents itself and interacts with users, ensuring inputs are solicited and processed in a manner consistent with user expectations and system design.
    - Comfy dtype: ENUM
    - Python dtype: str
## Optional
- inputs
    - Input is an optional parameter that allows additional customization and fine-tuning of the system. It provides a range of options to further optimize operation based on specific requirements.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: Dict[str, Any]

# Output types
- inputs
    - Output represents the consolidated and processed set of parameters, which are critical for subsequent stages of system operation. It encapsulates the system's configuration, ensuring the intended functionality is maintained.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeInput7:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'lora_strength': ('FLOAT', {'default': 0.2, 'min': -10.0, 'max': 10.0, 'step': 0.05}), 'operation_mode': (SeargeParameterProcessor.OPERATION_MODE, {'default': SeargeParameterProcessor.OPERATION_MODE[0]}), 'prompt_style': (SeargeParameterProcessor.PROMPT_STYLE, {'default': SeargeParameterProcessor.PROMPT_STYLE[0]})}, 'optional': {'inputs': ('PARAMETER_INPUTS',)}}
    RETURN_TYPES = ('PARAMETER_INPUTS',)
    RETURN_NAMES = ('inputs',)
    FUNCTION = 'mux'
    CATEGORY = 'Searge/_deprecated_/UI/Inputs'

    def mux(self, lora_strength, operation_mode, prompt_style, inputs=None):
        if inputs is None:
            parameters = {}
        else:
            parameters = inputs
        parameters['lora_strength'] = lora_strength
        parameters['operation_mode'] = operation_mode
        parameters['prompt_style'] = prompt_style
        return (parameters,)
```