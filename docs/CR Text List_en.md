# Documentation
- Class name: CR_TextList
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextList node is designed to handle and manipulate text data, especially for creating lists from multi-line text input. It allows users to select a subset of text lines based on a start index and a maximum number of rows to include, providing a simplified method for text list management within the Comfyroll framework.

# Input types
## Required
- multiline_text
    - ‘multiline_text’ parameter is the node's primary input, accepting text blocks that may contain multiple lines. It plays a key role in determining the source material for the list to be generated.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - ‘start_index’ parameter specifies the position in the text where list generation should begin. It is important for controlling the starting point of text lines included in the final list.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - ‘max_rows’ parameter sets the limit on the number of text lines to include in the list. It is important for defining the scope of text data processed and returned by the node.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- selected_rows
    - ‘selected_rows’ output contains the text lines selected according to the input parameters. It represents the core result of the node's operation, encapsulating the processed text data.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - ‘show_help’ output provides a URL link to documentation for further help or guidance on using the node. It is a valuable resource for users seeking more information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'multiline_text': ('STRING', {'multiline': True, 'default': 'text'}), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 9999}), 'max_rows': ('INT', {'default': 1000, 'min': 1, 'max': 9999})}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('STRING', 'show_help')
    OUTPUT_IS_LIST = (True, False)
    FUNCTION = 'make_list'
    CATEGORY = icons.get('Comfyroll/List')

    def make_list(self, multiline_text, start_index, max_rows, loops):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-text-list'
        lines = multiline_text.split('\n')
        start_index = max(0, min(start_index, len(lines) - 1))
        end_index = min(start_index + max_rows, len(lines))
        selected_rows = lines[start_index:end_index]
        return (selected_rows, show_help)
```