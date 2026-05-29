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
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
