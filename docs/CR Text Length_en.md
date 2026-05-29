# Documentation
- Class name: CR_TextLength
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextLength node is designed to measure the length of a given text string. It serves as a basic tool in text processing workflows, providing a direct method to determine the number of characters in the input text. This node is critical for tasks that require consideration of text length, such as data cleaning or formatting.

# Input types
## Required
- text
    - The 'text' parameter is the input text whose length is to be determined. This is a key element as the node's operation is entirely dependent on the content of this text. The node processes this input to provide the length of the text, which may be essential for various text analysis or processing tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- INT
    - The 'INT' output represents the length of the input text, i.e., the number of characters in the text string. This output is important as it directly reflects the result of the node's main function, allowing users to utilize this information for further processing or decision-making in their applications.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page for further assistance. This output is useful for users who need additional guidance or information about the node's functionality, providing direct access to the node's wiki page.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_TextLength:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'multiline': False, 'default': '', 'forceInput': True})}}
    RETURN_TYPES = ('INT', 'STRING')
    RETURN_NAMES = ('INT', 'show_help')
    FUNCTION = 'len_text'
    CATEGORY = icons.get('Comfyroll/Utils/Text')

    def len_text(self, text):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-text-length'
        int_out = len(text)
        return (int_out, show_help)
```