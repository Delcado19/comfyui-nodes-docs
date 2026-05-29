# Documentation
- Class name: SeargeLoras
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node is designed to process and manage lora signals, integrating their strengths and configurations into a structured data format.

# Input types
## Required
- lora_1
    - The first lora parameter is crucial for defining the initial signal in the lora stack, affecting the overall structure and output of the node.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_1_strength
    - The strength of the first lora signal is very important because it determines the signal's influence in the stack, contributing to the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_2
    - The second lora parameter further refines the signal stack, adding extra complexity and nuance to the node's operation.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_2_strength
    - The strength of the second lora signal is critical because it adjusts the relative weight of the signal, affecting the node's final processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_3
    - The third lora parameter contributes to the diversity of the signal stack, enhancing the node's adaptability and versatility.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_3_strength
    - The strength of the third lora signal is important because it fine-tunes the signal's contribution to the stack, refining the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_4
    - The fourth lora parameter adds depth to the signal stack, affecting the node's comprehensive analysis and synthesis capabilities.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_4_strength
    - The strength of the fourth lora signal is crucial because it adjusts the signal's prominence in the stack, shaping the node's overall performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_5
    - The fifth lora parameter is indispensable to the signal stack, providing rich information that enhances the node's processing capability.
    - Comfy dtype: LORAS_WITH_NONE()
    - Python dtype: Union[str, None]
- lora_5_strength
    - The strength of the fifth lora signal is important because it helps fine-tune the signal's role in the stack, affecting the node's comprehensive output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- data
    - The output data stream is the result of node processing, encapsulating the structured lora stack and its associated strengths.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeLoras:

    def __init__(self):
        self.expected_lora_stack_size = None

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'lora_1': (UI.LORAS_WITH_NONE(),), 'lora_1_strength': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.05}), 'lora_2': (UI.LORAS_WITH_NONE(),), 'lora_2_strength': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.05}), 'lora_3': (UI.LORAS_WITH_NONE(),), 'lora_3_strength': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.05}), 'lora_4': (UI.LORAS_WITH_NONE(),), 'lora_4_strength': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.05}), 'lora_5': (UI.LORAS_WITH_NONE(),), 'lora_5_strength': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.05})}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'get'
    CATEGORY = UI.CATEGORY_UI_INPUTS

    @staticmethod
    def create_dict(loras, lora_1, lora_1_strength, lora_2, lora_2_strength, lora_3, lora_3_strength, lora_4, lora_4_strength, lora_5, lora_5_strength):
        loras += [{UI.F_LORA_NAME: lora_1, UI.F_LORA_STRENGTH: round(lora_1_strength, 3)}, {UI.F_LORA_NAME: lora_2, UI.F_LORA_STRENGTH: round(lora_2_strength, 3)}, {UI.F_LORA_NAME: lora_3, UI.F_LORA_STRENGTH: round(lora_3_strength, 3)}, {UI.F_LORA_NAME: lora_4, UI.F_LORA_STRENGTH: round(lora_4_strength, 3)}, {UI.F_LORA_NAME: lora_5, UI.F_LORA_STRENGTH: round(lora_5_strength, 3)}]
        return {UI.F_LORA_STACK: loras}

    def get(self, lora_1, lora_1_strength, lora_2, lora_2_strength, lora_3, lora_3_strength, lora_4, lora_4_strength, lora_5, lora_5_strength, data=None):
        if data is None:
            data = {}
        loras = retrieve_parameter(UI.F_LORA_STACK, retrieve_parameter(UI.S_LORAS, data), [])
        if self.expected_lora_stack_size is None:
            self.expected_lora_stack_size = len(loras)
        elif self.expected_lora_stack_size == 0:
            loras = []
        elif len(loras) > self.expected_lora_stack_size:
            loras = loras[:self.expected_lora_stack_size]
        data[UI.S_LORAS] = self.create_dict(loras, lora_1, lora_1_strength, lora_2, lora_2_strength, lora_3, lora_3_strength, lora_4, lora_4_strength, lora_5, lora_5_strength)
        return (data,)
```