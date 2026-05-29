# Documentation
- Class name: CR_TextCycler
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextCycler node is designed to duplicate text lines a specified number of times within a given loop structure. It is used to automate the text duplication process to improve efficiency in text processing workflows.

# Input types
## Required
- text
    - The 'text' parameter is the input text to be looped. It can contain multiple lines and is crucial to the node's operation as it determines the content that will be repeated.
    - Comfy dtype: STRING
    - Python dtype: str
- repeats
    - The 'repeats' parameter indicates the number of times each line of text will be duplicated. It is a key element that directly affects the amount of output text.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- loops
    - The 'loops' parameter specifies the number of times the entire text block will cycle through its repetitions. It adds an extra layer of repetition to text processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- show_text
    - The 'show_text' output provides the final cycled text after all repetitions and looping have been processed. It represents the result of the node's text manipulation capabilities.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextCycler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': ''}), 'repeats': ('INT', {'default': 1, 'min': 1, 'max': 99999}), 'loops': ('INT', {'default': 1, 'min': 1, 'max': 99999})}}
    RETURN_TYPES = (any_type, 'STRING')
    RETURN_NAMES = ('STRING', 'show_text')
    OUTPUT_IS_LIST = (True, False)
    FUNCTION = 'cycle'
    CATEGORY = icons.get('Comfyroll/List')

    def cycle(self, text, repeats, loops=1):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-text-cycler'
        lines = text.split('\n')
        list_out = []
        for i in range(loops):
            for text_item in lines:
                for _ in range(repeats):
                    list_out.append(text_item)
        return (list_out, show_help)
```