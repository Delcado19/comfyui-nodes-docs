# Documentation
- Class name: CR_ModelList
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ModelList node is designed to manage and compile a list of models, where each model is associated with a checkpoint file and an alias. It facilitates the organization and retrieval of model checkpoints for further processing or animation tasks. This node plays a key role in model management by allowing users to specify multiple checkpoints and their corresponding aliases, thereby improving workflow efficiency.

# Input types
## Required
- ckpt_name1
    - The ckpt_name1 parameter is essential for identifying the first checkpoint file associated with the model. It is a critical component of the node's operation, as it directly affects the selection and organization of model checkpoints in the list.
    - Comfy dtype: STRING
    - Python dtype: str
- alias1
    - alias1 serves as an alternative name or identifier for the first checkpoint, allowing easier reference and management within the model list. It enhances the node's functionality by providing a user-friendly naming convention for checkpoints.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- ckpt_name2
    - The ckpt_name2 parameter is optional and can be used to specify a second checkpoint file in the model list. It extends the node's capabilities by allowing additional checkpoints to be included during the model management process.
    - Comfy dtype: STRING
    - Python dtype: str
- alias2
    - alias2 is an optional parameter that provides an alternative name for the second checkpoint, enhancing the node's flexibility and user-friendliness by offering customizable naming options for checkpoints.
    - Comfy dtype: STRING
    - Python dtype: str
- model_list
    - The model_list parameter is optional and allows users to input a pre-existing model list. This parameter enhances the node's adaptability by enabling external model lists to be integrated into the node's operation.
    - Comfy dtype: MODEL_LIST
    - Python dtype: List[Tuple[str, str]]

# Output types
- MODEL_LIST
    - The MODEL_LIST output parameter represents the compiled model list, including the associated checkpoints and aliases. It is a significant output as it encompasses the node's primary function of organizing and managing model checkpoints.
    - Comfy dtype: MODEL_LIST
    - Python dtype: List[Tuple[str, str]]
- show_text
    - The show_text output parameter provides a text representation of the model list, which is useful for display or logging purposes. It reflects the node's ability to generate a human-readable summary of model checkpoints.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ModelList:

    @classmethod
    def INPUT_TYPES(cls):
        checkpoint_files = ['None'] + folder_paths.get_filename_list('checkpoints')
        return {'required': {'ckpt_name1': (checkpoint_files,), 'alias1': ('STRING', {'multiline': False, 'default': ''}), 'ckpt_name2': (checkpoint_files,), 'alias2': ('STRING', {'multiline': False, 'default': ''}), 'ckpt_name3': (checkpoint_files,), 'alias3': ('STRING', {'multiline': False, 'default': ''}), 'ckpt_name4': (checkpoint_files,), 'alias4': ('STRING', {'multiline': False, 'default': ''}), 'ckpt_name5': (checkpoint_files,), 'alias5': ('STRING', {'multiline': False, 'default': ''})}, 'optional': {'model_list': ('MODEL_LIST',)}}
    RETURN_TYPES = ('MODEL_LIST', 'STRING')
    RETURN_NAMES = ('MODEL_LIST', 'show_text')
    FUNCTION = 'model_list'
    CATEGORY = icons.get('Comfyroll/Animation/Legacy')

    def model_list(self, ckpt_name1, alias1, ckpt_name2, alias2, ckpt_name3, alias3, ckpt_name4, alias4, ckpt_name5, alias5, model_list=None):
        models = list()
        model_text = list()
        if model_list is not None:
            models.extend([l for l in model_list if l[0] != None])
            model_text += '\n'.join(map(str, model_list)) + '\n'
        if ckpt_name1 != 'None':
            model1_tup = [(alias1, ckpt_name1)]
            (models.extend(model1_tup),)
            model_text += '\n'.join(map(str, model1_tup)) + '\n'
        if ckpt_name2 != 'None':
            model2_tup = [(alias2, ckpt_name2)]
            (models.extend(model2_tup),)
            model_text += '\n'.join(map(str, model2_tup)) + '\n'
        if ckpt_name3 != 'None':
            model3_tup = [(alias3, ckpt_name3)]
            (models.extend(model3_tup),)
            model_text += '\n'.join(map(str, model3_tup)) + '\n'
        if ckpt_name4 != 'None':
            model4_tup = [(alias4, ckpt_name4)]
            (models.extend(model4_tup),)
            model_text += '\n'.join(map(str, model4_tup)) + '\n'
        if ckpt_name5 != 'None':
            model5_tup = [(alias5, ckpt_name5)]
            (models.extend(model5_tup),)
            model_text += '\n'.join(map(str, model5_tup)) + '\n'
        show_text = ''.join(model_text)
        return (models, show_text)
```