# Documentation
- Class name: CR_LoRAStack
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LoRAStack node manages and combines multiple LoRA (Low-Rank Adaptation) layers into a single stack. It allows users to toggle inclusion of each LoRA layer, set model weights, and clip weights to fine‑tune each layer's contribution to the final output. The node focuses on stacking LoRA layers to enhance model performance without significantly increasing computational cost.

# Input types
## Required
- switch_1
- The switch parameter determines whether the first LoRA layer is included in the stack. It is crucial for controlling the composition of the final LoRA stack.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name_1
- The lora_name_1 parameter specifies the name of the first LoRA layer that may be included in the stack. It plays an important role in identifying the specific LoRA layer during the stacking process.
    - Comfy dtype: STRING
    - Python dtype: str
- model_weight_1
- The model_weight_1 parameter adjusts the first LoRA layer's impact on the final output. It is essential for fine‑tuning each layer's contribution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight_1
- The clip_weight_1 parameter clips or limits the first LoRA layer's weight to prevent it from dominating the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_2
- The switch parameter for the second LoRA layer determines whether it is included in the stack. It is key to deciding the final structure of the LoRA stack.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name_2
- The lora_name_2 parameter indicates the name of the second LoRA layer considered for inclusion in the stack. It is a critical factor for identifying stacked LoRA layers.
    - Comfy dtype: STRING
    - Python dtype: str
- model_weight_2
- The model_weight_2 parameter modifies the second LoRA layer's influence on the final result. It is indispensable for calibrating that layer's contribution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight_2
- The clip_weight_2 parameter clips the second LoRA layer's weight to maintain balance in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_3
- The switch parameter for the third LoRA layer controls its presence in the stack. It is a key element in forming the LoRA stack.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name_3
- The lora_name_3 parameter identifies the third LoRA layer that may be included in the stack. It is vital for the LoRA layer selection process.
    - Comfy dtype: STRING
    - Python dtype: str
- model_weight_3
- The model_weight_3 parameter affects the third LoRA layer's impact on the final result. It is crucial for adjusting that layer's influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight_3
- The clip_weight_3 parameter clips the third LoRA layer's weight to ensure it does not disproportionately affect the output of the final stack.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_stack
- The lora_stack parameter allows pre‑populating the LoRA stack with existing layers. It is useful for continuing work from a previous state.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- LORA_STACK
- The LORA_STACK output is a list of tuples representing the stacked LoRA layers with their corresponding weights and clip values. This is the primary result of the node operation.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]
- show_help
- The show_help output provides a URL link to documentation for additional help and information on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoRAStack:

    @classmethod
    def INPUT_TYPES(cls):
        loras = ['None'] + folder_paths.get_filename_list('loras')
        return {'required': {'switch_1': (['Off', 'On'],), 'lora_name_1': (loras,), 'model_weight_1': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_weight_1': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'switch_2': (['Off', 'On'],), 'lora_name_2': (loras,), 'model_weight_2': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_weight_2': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'switch_3': (['Off', 'On'],), 'lora_name_3': (loras,), 'model_weight_3': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_weight_3': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}, 'optional': {'lora_stack': ('LORA_STACK',)}}
    RETURN_TYPES = ('LORA_STACK', 'STRING')
    RETURN_NAMES = ('LORA_STACK', 'show_help')
    FUNCTION = 'lora_stacker'
    CATEGORY = icons.get('Comfyroll/LoRA')

    def lora_stacker(self, lora_name_1, model_weight_1, clip_weight_1, switch_1, lora_name_2, model_weight_2, clip_weight_2, switch_2, lora_name_3, model_weight_3, clip_weight_3, switch_3, lora_stack=None):
        lora_list = list()
        if lora_stack is not None:
            lora_list.extend([l for l in lora_stack if l[0] != 'None'])
        if lora_name_1 != 'None' and switch_1 == 'On':
            (lora_list.extend([(lora_name_1, model_weight_1, clip_weight_1)]),)
        if lora_name_2 != 'None' and switch_2 == 'On':
            (lora_list.extend([(lora_name_2, model_weight_2, clip_weight_2)]),)
        if lora_name_3 != 'None' and switch_3 == 'On':
            (lora_list.extend([(lora_name_3, model_weight_3, clip_weight_3)]),)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/LoRA-Nodes#cr-lora-stack'
        return (lora_list, show_help)
```