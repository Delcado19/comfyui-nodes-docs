# Documentation
- Class name: SeargePromptCombiner
- Category: Searge/_deprecated_/Prompting
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates the connection of two text prompts by aligning them with the required format, enhancing the input data for subsequent processing.

# Input types
## Required
- prompt1
    - The first text prompt, serving as the initial input for the combination process.
    - Comfy dtype: STRING
    - Python dtype: str
- separator
    - A string used to distinguish between the two prompts, ensuring they combine in a structured manner.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt2
    - The second text prompt, which will be joined with the first prompt to help form the final combined prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- combined prompt
    - The final prompt after combining the two inputs, ready for further processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargePromptCombiner:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt1': ('STRING', {'default': '', 'multiline': True}), 'separator': ('STRING', {'default': ', ', 'multiline': False}), 'prompt2': ('STRING', {'default': '', 'multiline': True})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('combined prompt',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Prompting'

    def get_value(self, prompt1, separator, prompt2):
        len1 = len(prompt1)
        len2 = len(prompt2)
        prompt = ''
        if len1 > 0 and len2 > 0:
            prompt = prompt1 + separator + prompt2
        elif len1 > 0:
            prompt = prompt1
        elif len2 > 0:
            prompt = prompt2
        return (prompt,)
```