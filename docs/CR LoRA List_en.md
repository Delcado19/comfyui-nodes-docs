# Documentation
- Class name: CR_LoRAList
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LoRAList node is designed to manage and compile LoRA (Low-Rank Adaptation) configuration lists. It allows users to specify multiple LoRA settings, each with an alias, model strength, and clip strength, and then combine them into a single list. This node plays a key role in customizing and enhancing model behavior through LoRA technology.

# Input types
## Required
- lora_name1
    - The parameter 'lora_name1' is crucial for specifying the first LoRA configuration. It determines the LoRA file to use and significantly impacts the node's customization capability.
    - Comfy dtype: STRING
    - Python dtype: str
- model_strength_1
    - The parameter 'model_strength_1' adjusts the impact of the first LoRA configuration on the model, allowing fine-tuning of model behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength_1
    - The parameter 'clip_strength_1' controls the clip strength of the first LoRA configuration, which is crucial for maintaining model stability during training.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- alias1
    - The parameter 'alias1' provides a user-defined name for the first LoRA configuration, enhancing readability and manageability in the LoRA list.
    - Comfy dtype: STRING
    - Python dtype: str
- lora_name2
    - The parameter 'lora_name2', similar to 'lora_name1', specifies the second LoRA configuration to include in the list, providing more customization options.
    - Comfy dtype: STRING
    - Python dtype: str
- alias2
    - The parameter 'alias2' assigns an alias to the second LoRA configuration for easier reference and management in the compiled list.
    - Comfy dtype: STRING
    - Python dtype: str
- model_strength_2
    - The parameter 'model_strength_2' is used to adjust the impact of the second LoRA configuration, allowing users to control model adaptability.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength_2
    - The parameter 'clip_strength_2' sets the clip strength of the second LoRA configuration, playing a role in model training stability.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_name3
    - The parameter 'lora_name3' defines the third LoRA configuration to consider for inclusion in the list, further expanding the customization scope.
    - Comfy dtype: STRING
    - Python dtype: str
- alias3
    - The parameter 'alias3' allows users to assign a custom name to the third LoRA configuration for better identification and organization in the list.
    - Comfy dtype: STRING
    - Python dtype: str
- model_strength_3
    - The parameter 'model_strength_3' modifies the effect of the third LoRA configuration, allowing fine control over model performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength_3
    - The parameter 'clip_strength_3' determines the clip strength of the third LoRA configuration, which is essential for a robust training process of the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_list
    - The parameter 'lora_list' is optional and allows users to provide an existing LoRA configuration list, which will be appended or modified by the node.
    - Comfy dtype: LORA_LIST
    - Python dtype: List[Tuple[str, str, float, float]]

# Output types
- LORA_LIST
    - The 'LORA_LIST' output contains the compiled LoRA configuration list, which can be directly used for subsequent model operations.
    - Comfy dtype: LORA_LIST
    - Python dtype: List[Tuple[str, str, float, float]]
- show_text
    - The 'show_text' output provides a textual representation of the LoRA list, which is useful for display or logging purposes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoRAList:

    @classmethod
    def INPUT_TYPES(cls):
        lora_files = ['None'] + folder_paths.get_filename_list('loras')
        return {'required': {'lora_name1': (lora_files,), 'alias1': ('STRING', {'multiline': False, 'default': ''}), 'model_strength_1': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_strength_1': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'lora_name2': (lora_files,), 'alias2': ('STRING', {'multiline': False, 'default': ''}), 'model_strength_2': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_strength_2': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'lora_name3': (lora_files,), 'alias3': ('STRING', {'multiline': False, 'default': ''}), 'model_strength_3': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_strength_3': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}, 'optional': {'lora_list': ('lora_LIST',)}}
    RETURN_TYPES = ('LORA_LIST', 'STRING')
    RETURN_NAMES = ('LORA_LIST', 'show_text')
    FUNCTION = 'lora_list'
    CATEGORY = icons.get('Comfyroll/Animation/Legacy')

    def lora_list(self, lora_name1, model_strength_1, clip_strength_1, alias1, lora_name2, model_strength_2, clip_strength_2, alias2, lora_name3, model_strength_3, clip_strength_3, alias3, lora_list=None):
        loras = list()
        lora_text = list()
        if lora_list is not None:
            loras.extend([l for l in lora_list if l[0] != None])
            lora_text += '\n'.join(map(str, lora_list)) + '\n'
        if lora_name1 != 'None':
            lora1_tup = [(alias1, lora_name1, model_strength_1, clip_strength_1)]
            (loras.extend(lora1_tup),)
            lora_text += '\n'.join(map(str, lora1_tup)) + '\n'
        if lora_name2 != 'None':
            lora2_tup = [(alias2, lora_name2, model_strength_2, clip_strength_2)]
            (loras.extend(lora2_tup),)
            lora_text += '\n'.join(map(str, lora2_tup)) + '\n'
        if lora_name3 != 'None':
            lora3_tup = [(alias3, lora_name3, model_strength_3, clip_strength_3)]
            (loras.extend(lora3_tup),)
            lora_text += '\n'.join(map(str, lora3_tup)) + '\n'
        show_text = ''.join(lora_text)
        return (loras, show_text)
```