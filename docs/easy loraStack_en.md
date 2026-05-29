# Documentation
- Class name: loraStackLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The loraStackLoader node aims to simplify the process of loading and configuring a Lora stack, which is crucial for fine-tuning and improving the performance of neural network models. It simplifies the complexity of managing multiple Lora layers by providing a structured way to specify the names, strengths, and other related parameters for multiple Lora layers.

# Input types
## Required
- toggle
    - The toggle parameter is critical for deciding whether the node should execute its loading process. When set to True, the node will load the specified Lora stack; otherwise, it will return without performing any action.
    - Comfy dtype: BOOL
    - Python dtype: bool
- mode
    - The mode parameter determines the complexity level of the Lora stack configuration. It allows users to choose between simple or advanced settings, affecting how subsequent parameters are interpreted and applied.
    - Comfy dtype: STR
    - Python dtype: str
- num_loras
    - The num_loras parameter specifies the number of Lora layers to load. It directly affects the node's operation by determining how many Lora configurations will be processed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_lora_stack
    - The optional_lora_stack parameter provides a way to supply an existing Lora stack to the node. This is useful for extending or modifying an already configured stack without starting from scratch.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]
- lora_{i}_name
    - The lora_{i}_name parameter allows users to specify the name of the Lora layer at position {i}. This is important for identifying and loading the correct Lora configuration.
    - Comfy dtype: STR
    - Python dtype: str
- lora_{i}_strength
    - The lora_{i}_strength parameter sets the strength of the Lora layer at position {i}. This is a key factor in the influence weight of the Lora layer in the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_{i}_model_strength
    - The lora_{i}_model_strength parameter applies in advanced mode, setting the model-specific strength for the Lora layer at position {i}. It is used to fine-tune the Lora's impact on model output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_{i}_clip_strength
    - The lora_{i}_clip_strength parameter is also used in advanced mode, determining the interaction strength between the Lora layer at position {i} and the CLIP model. This is crucial for controlling the integration of text-based guidance in model processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- lora_stack
    - The lora_stack output is the collection of Lora configurations processed by the node. It represents the final Lora layer stack ready to be applied to the neural network model.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Usage tips
- Infra type: CPU

# Source code
```
class loraStackLoader:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        max_lora_num = 10
        inputs = {'required': {'toggle': ([True, False],), 'mode': (['simple', 'advanced'],), 'num_loras': ('INT', {'default': 1, 'min': 0, 'max': max_lora_num})}, 'optional': {'optional_lora_stack': ('LORA_STACK',)}}
        for i in range(1, max_lora_num + 1):
            inputs['optional'][f'lora_{i}_name'] = (['None'] + folder_paths.get_filename_list('loras'), {'default': 'None'})
            inputs['optional'][f'lora_{i}_strength'] = ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})
            inputs['optional'][f'lora_{i}_model_strength'] = ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})
            inputs['optional'][f'lora_{i}_clip_strength'] = ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})
        return inputs
    RETURN_TYPES = ('LORA_STACK',)
    RETURN_NAMES = ('lora_stack',)
    FUNCTION = 'stack'
    CATEGORY = 'EasyUse/Loaders'

    def stack(self, toggle, mode, num_loras, lora_stack=None, **kwargs):
        if toggle in [False, None, 'False'] or not kwargs:
            return (None,)
        loras = []
        if lora_stack is not None:
            loras.extend([l for l in lora_stack if l[0] != 'None'])
        for i in range(1, num_loras + 1):
            lora_name = kwargs.get(f'lora_{i}_name')
            if not lora_name or lora_name == 'None':
                continue
            if mode == 'simple':
                lora_strength = float(kwargs.get(f'lora_{i}_strength'))
                loras.append((lora_name, lora_strength, lora_strength))
            elif mode == 'advanced':
                model_strength = float(kwargs.get(f'lora_{i}_model_strength'))
                clip_strength = float(kwargs.get(f'lora_{i}_clip_strength'))
                loras.append((lora_name, model_strength, clip_strength))
        return (loras,)
```