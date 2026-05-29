# Documentation
- Class name: CreateCkptNames
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node facilitates the organization and management of checkpoint names in machine learning projects, enabling users to process and filter checkpoint name lists for further analysis or restoration.

# Input types
## Required
- ckpt_names
    - The input parameter is a string of checkpoint names, critical for the node to identify and process checkpoints. It influences the node's operation by determining what is filtered and organized.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ckpt_names
    - The output is a processed list of checkpoint names, significant for further operations such as loading specific checkpoints or analyzing their distribution.
    - Comfy dtype: LIST[STRING]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class CreateCkptNames:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'ckpt_names': ('STRING', {'multiline': True, 'default': '\n'.join(folder_paths.get_filename_list('checkpoints')), 'dynamicPrompts': False})}}
    RETURN_TYPES = (any_type,)
    RETURN_NAMES = ('ckpt_names',)
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'

    def run(self, ckpt_names):
        ckpt_names = ckpt_names.split('\n')
        ckpt_names = [name for name in ckpt_names if name.strip()]
        return (ckpt_names,)
```