# Documentation
- Class name: CR_PromptList
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_PromptList node is designed to process and manipulate text data in list form. It accepts multi-line text input, allows users to add text before and after each line, and selects a range of lines from the list by specifying a starting index and maximum number of lines. The node's main function focuses on creating prompt lists and body text lists from input text, which can be used for various purposes such as generating prompts for AI models or organizing text data.

# Input types
## Required
- multiline_text
    - The multiline_text parameter is the node's primary input, containing text that will be split into a list. It supports multi-line input, allowing processing of complex and detailed text data.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prepend_text
    - The prepend_text parameter allows users to specify a string that will be added to the beginning of each line in the output list. This can be used to customize the list format or add context to the text.
    - Comfy dtype: STRING
    - Python dtype: str
- append_text
    - The append_text parameter enables users to add a string at the end of each line in the output list, which is useful for extending text or adding additional information.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - The start_index parameter determines the position in the list from which the node will start selecting lines. It provides control over the subset of the list that will be processed.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - The max_rows parameter sets the maximum number of lines to be included in the output list. It helps limit the size of the list and manage the amount of data being processed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- prompt
    - The prompt output is a list of strings, where each string consists of the prepend text, a line from the input multi-line text, and the append text. This can be used to create prompts for AI applications.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- body_text
    - The body_text output is a list of strings, representing the selected lines from the input multi-line text. It serves as the main content for further processing or analysis.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The show_help output provides a URL link to documentation or help pages related to the node's functionality. This is useful for users seeking more information on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_PromptList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prepend_text': ('STRING', {'multiline': False, 'default': ''}), 'multiline_text': ('STRING', {'multiline': True, 'default': 'body_text'}), 'append_text': ('STRING', {'multiline': False, 'default': ''}), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 9999}), 'max_rows': ('INT', {'default': 1000, 'min': 1, 'max': 9999})}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('prompt', 'body_text', 'show_help')
    OUTPUT_IS_LIST = (True, True, False)
    FUNCTION = 'make_list'
    CATEGORY = icons.get('Comfyroll/List')

    def make_list(self, multiline_text, prepend_text='', append_text='', start_index=0, max_rows=9999):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-prompt-list'
        lines = multiline_text.split('\n')
        start_index = max(0, min(start_index, len(lines) - 1))
        end_index = min(start_index + max_rows, len(lines))
        selected_rows = lines[start_index:end_index]
        prompt_list_out = [prepend_text + line + append_text for line in selected_rows]
        body_list_out = selected_rows
        return (prompt_list_out, body_list_out, show_help)
```