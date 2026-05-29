# Documentation
- Class name: negativePrompt
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The negativePrompt node is designed to manage and process negative prompts within the system. It plays a critical role in refining outputs by excluding certain unwanted elements or features. The node's functionality centers on the concept of negation, aiming to improve the precision and relevance of results by actively specifying what should be avoided.

# Input types
## Required
- negative
    - The 'negative' parameter is crucial for defining which aspects should be omitted from the final output. It allows users to specify elements they wish to exclude, guiding the system to produce more targeted and refined results.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- negative
    - The output 'negative' represents the processed negative prompt that has been used to refine the system output. It marks the successful application of user-specified exclusions, ensuring the final result meets the desired criteria.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class negativePrompt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'negative': ('STRING', {'default': '', 'multiline': True, 'placeholder': 'Negative'})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('negative',)
    FUNCTION = 'main'
    CATEGORY = 'EasyUse/Prompt'

    @staticmethod
    def main(negative):
        return (negative,)
```