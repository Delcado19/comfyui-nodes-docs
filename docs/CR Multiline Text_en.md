# Documentation
- Class name: CR_MultilineText
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_MultilineText node is designed to process and manipulate text data, providing functions such as converting text from CSV format, splitting strings based on specified delimiters, and removing unwanted characters. It plays a key role in text preprocessing for various applications, ensuring text is properly formatted for downstream tasks.

# Input types
## Required
- text
    - The 'text' parameter is the primary input to the node, which can contain multi-line text or CSV-formatted data. It is essential to the node's operation, as it determines what content will be processed and transformed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- convert_from_csv
    - The 'convert_from_csv' parameter allows users to specify whether the input text should be treated as CSV data. When enabled, the node will parse the text according to CSV rules, which is important for converting tabular data into a usable format.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- csv_quote_char
    - The 'csv_quote_char' parameter defines the character used to quote fields in CSV data. This is critical for parsing CSV text accurately and handling fields that contain commas or newlines.
    - Comfy dtype: STRING
    - Python dtype: str
- remove_chars
    - The 'remove_chars' parameter indicates whether certain characters should be removed from the text. This is important for cleaning text and preparing it for further analysis or processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- chars_to_remove
    - The 'chars_to_remove' parameter specifies the characters to remove from the text when the 'remove_chars' option is enabled. It plays a significant role in customizing the text cleaning process.
    - Comfy dtype: STRING
    - Python dtype: str
- split_string
    - The 'split_string' parameter determines whether the input text should be split into individual values based on a delimiter. This function is essential for breaking down complex strings into manageable parts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- multiline_text
    - The 'multiline_text' output contains the text after all transformations have been applied. It represents the final state of the text, ready for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a link to the documentation or help page associated with the node. It serves as a quick reference for users seeking more information or assistance on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_MultilineText:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'default': '', 'multiline': True}), 'convert_from_csv': ('BOOLEAN', {'default': False}), 'csv_quote_char': ('STRING', {'default': "'", 'choices': ["'", '"']}), 'remove_chars': ('BOOLEAN', {'default': False}), 'chars_to_remove': ('STRING', {'multiline': False, 'default': ''}), 'split_string': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = (any_type, 'STRING')
    RETURN_NAMES = ('multiline_text', 'show_help')
    FUNCTION = 'text_multiline'
    CATEGORY = icons.get('Comfyroll/Utils/Text')

    def text_multiline(self, text, chars_to_remove, split_string=False, remove_chars=False, convert_from_csv=False, csv_quote_char="'"):
        new_text = []
        text = text.rstrip(',')
        if convert_from_csv:
            csv_reader = csv.reader(io.StringIO(text), quotechar=csv_quote_char)
            for row in csv_reader:
                new_text.extend(row)
        if split_string:
            if text.startswith("'") and text.endswith("'"):
                text = text[1:-1]
                values = [value.strip() for value in text.split("', '")]
                new_text.extend(values)
            elif text.startswith('"') and text.endswith('"'):
                text = text[1:-1]
                values = [value.strip() for value in text.split('", "')]
                new_text.extend(values)
            elif ',' in text and text.count("'") % 2 == 0:
                text = text.replace("'", '')
                values = [value.strip() for value in text.split(',')]
                new_text.extend(values)
            elif ',' in text and text.count('"') % 2 == 0:
                text = text.replace('"', '')
                values = [value.strip() for value in text.split(',')]
                new_text.extend(values)
        if convert_from_csv == False and split_string == False:
            for line in io.StringIO(text):
                if not line.strip().startswith('#'):
                    if not line.strip().startswith('\n'):
                        line = line.replace('\n', '')
                    if remove_chars:
                        line = line.replace(chars_to_remove, '')
                    new_text.append(line)
        new_text = '\n'.join(new_text)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-multiline-text'
        return (new_text, show_help)
```