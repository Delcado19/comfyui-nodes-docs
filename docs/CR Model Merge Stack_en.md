# Documentation
- Class name: CR_ModelMergeStack
- Category: Comfyroll/Model Merge
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ModelMergeStack node is designed to merge multiple model checkpoints into a unified stack. It allows users to toggle the inclusion of each checkpoint and adjust the contribution ratios of model and clip components, providing a flexible method for merging different models based on specific requirements.

# Input types
## Required
- switch_1
    - The switch_1 parameter determines whether the first checkpoint is included in the model stack. It plays a critical role in the node's operation by enabling or disabling the integration of a specific checkpoint.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- ckpt_name1
    - The ckpt_name1 parameter specifies the name of the first checkpoint file to be potentially included in the model stack. This is crucial for identifying the specific model to be merged.
    - Comfy dtype: STRING
    - Python dtype: str
- model_ratio1
    - The model_ratio1 parameter adjusts the contribution weight of the first checkpoint's model component in the merged stack. It is important for fine-tuning the influence of each model in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_ratio1
    - The clip_ratio1 parameter sets the contribution weight of the first checkpoint's clip component. It is important for balancing the overall influence of clip guidance in the merged model stack.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_2
    - The switch_2 parameter controls whether the second checkpoint is included in the model stack. Similar to switch_1, it is crucial for selecting which checkpoints are integrated into the final stack.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- ckpt_name2
    - The ckpt_name2 parameter identifies the second checkpoint file to be potentially included in the model stack. It is a key factor in determining which model to merge.
    - Comfy dtype: STRING
    - Python dtype: str
- model_ratio2
    - The model_ratio2 parameter modifies the weight of the second checkpoint's model component in the stack. It affects how prominently the model's features appear in the merged output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_ratio2
    - The clip_ratio2 parameter defines the weight of the second checkpoint's clip component, influencing how much clip guidance is considered in the merged model stack.
    - Comfy dtype: FLOAT
    - Python dtype: float
- switch_3
    - The switch_3 parameter determines whether the third checkpoint is included in the model stack. It is another critical switch controlling the composition of the final stack.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- ckpt_name3
    - The ckpt_name3 parameter specifies the third checkpoint file that may be part of the model stack. It is crucial for including specific models in the merging process.
    - Comfy dtype: STRING
    - Python dtype: str
- model_ratio3
    - The model_ratio3 parameter adjusts the influence of the third checkpoint's model component in the merged stack. It is important for the overall balance of model contributions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_ratio3
    - The clip_ratio3 parameter sets the influence level of the third checkpoint's clip component in the stack. It is important for the final blend of clip guidance in the merged model stack.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- model_stack
    - The optional model_stack parameter allows users to provide an initial list of models to be merged. It is useful for building upon an existing model stack.
    - Comfy dtype: MODEL_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- MODEL_STACK
    - The MODEL_STACK output contains the merged list of model checkpoints with their respective ratios. It is the primary result of the node's operation, representing the merged model stack.
    - Comfy dtype: MODEL_STACK
    - Python dtype: List[Tuple[str, float, float]]
- show_help
    - The show_help output provides a URL link to documentation for further assistance. It directs users to external resources for more information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ModelMergeStack:

    @classmethod
    def INPUT_TYPES(cls):
        checkpoint_files = ['None'] + folder_paths.get_filename_list('checkpoints')
        return {'required': {'switch_1': (['Off', 'On'],), 'ckpt_name1': (checkpoint_files,), 'model_ratio1': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 0.01}), 'clip_ratio1': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 0.01}), 'switch_2': (['Off', 'On'],), 'ckpt_name2': (checkpoint_files,), 'model_ratio2': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 0.01}), 'clip_ratio2': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 0.01}), 'switch_3': (['Off', 'On'],), 'ckpt_name3': (checkpoint_files,), 'model_ratio3': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 0.01}), 'clip_ratio3': ('FLOAT', {'default': 1.0, 'min': -100.0, 'max': 100.0, 'step': 0.01})}, 'optional': {'model_stack': ('MODEL_STACK',)}}
    RETURN_TYPES = ('MODEL_STACK', 'STRING')
    RETURN_NAMES = ('MODEL_STACK', 'show_help')
    FUNCTION = 'list_checkpoints'
    CATEGORY = icons.get('Comfyroll/Model Merge')

    def list_checkpoints(self, switch_1, ckpt_name1, model_ratio1, clip_ratio1, switch_2, ckpt_name2, model_ratio2, clip_ratio2, switch_3, ckpt_name3, model_ratio3, clip_ratio3, model_stack=None):
        model_list = list()
        if model_stack is not None:
            model_list.extend([l for l in model_stack if l[0] != 'None'])
        if ckpt_name1 != 'None' and switch_1 == 'On':
            (model_list.extend([(ckpt_name1, model_ratio1, clip_ratio1)]),)
        if ckpt_name2 != 'None' and switch_2 == 'On':
            (model_list.extend([(ckpt_name2, model_ratio2, clip_ratio2)]),)
        if ckpt_name3 != 'None' and switch_3 == 'On':
            (model_list.extend([(ckpt_name3, model_ratio3, clip_ratio3)]),)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Model-Merge-Nodes#cr-model-stack'
        return (model_list, show_help)
```