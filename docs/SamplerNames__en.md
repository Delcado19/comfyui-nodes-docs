# Documentation
- Class name: CreateSampler_names
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node simplifies the process of generating a list of sampler names that can be used in various sampling applications. It emphasizes the node's role in preparing and cleaning input to extract valid sampler names, ensuring the output is a clean and usable set of identifiers.

# Input types
## Required
- sampler_names
    - This parameter is critical as it provides the raw text from which sampler names will be extracted. Its impact on node execution is significant, as the quality and format of the input text directly affects the accuracy and utility of the generated sampler names.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- sampler_names
    - The output represents a refined list of valid sampler names, with all unnecessary information removed. This list is critical for downstream processes that rely on accurate sampler identifiers to function correctly.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class CreateSampler_names:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'sampler_names': ('STRING', {'multiline': True, 'default': '\n'.join(comfy.samplers.KSampler.SAMPLERS), 'dynamicPrompts': False})}}
    RETURN_TYPES = (any_type,)
    RETURN_NAMES = ('sampler_names',)
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'

    def run(self, sampler_names):
        sampler_names = sampler_names.split('\n')
        sampler_names = [name for name in sampler_names if name.strip()]
        return (sampler_names,)
```