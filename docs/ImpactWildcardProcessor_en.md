# Documentation
- Class name: ImpactWildcardProcessor
- Category: ImpactPack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImpactWildcardProcessor node is designed to manage and process wildcards in text inputs. It facilitates dynamic insertion or filling of wildcards based on a given pattern, enhancing flexibility in text manipulation tasks. This node plays a key role in crafting prompts that can adapt to various inputs by leveraging the wildcard concept.

# Input types
## Required
- wildcard_text
    - The wildcard text parameter is essential for defining placeholders in the text that can be dynamically filled. It influences the structure of the final output text, allowing customization of prompts based on specific needs.
    - Comfy dtype: STRING
    - Python dtype: str
- populated_text
    - The filled text serves as the initial input text that may contain wildcards. This parameter is critical because it determines the base text on which wildcard processing will be performed, affecting the outcome of the text after wildcard handling.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mode
    - The pattern parameter decides whether wildcards should be filled or kept fixed. It is important because it controls the behavior of wildcard processing, allowing dynamic content generation or preservation of static text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducible results when processing wildcards. It plays a significant role in maintaining consistency across multiple executions of the node, especially for debugging and testing purposes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- processed_text
    - The processed text is the primary output of the ImpactWildcardProcessor node, representing the final text after all wildcards have been appropriately filled or kept as-is according to the specified pattern.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactWildcardProcessor:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'wildcard_text': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'populated_text': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'mode': ('BOOLEAN', {'default': True, 'label_on': 'Populate', 'label_off': 'Fixed'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'Select to add Wildcard': (['Select the Wildcard to add to the text'],)}}
    CATEGORY = 'ImpactPack/Prompt'
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'doit'

    @staticmethod
    def process(**kwargs):
        return impact.wildcards.process(**kwargs)

    def doit(self, *args, **kwargs):
        populated_text = kwargs['populated_text']
        return (populated_text,)
```