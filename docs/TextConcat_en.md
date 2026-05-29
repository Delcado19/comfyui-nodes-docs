# Documentation
- Class name: TextConcat
- Category: Mikey/Text
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The TextConcat node is designed to efficiently combine multiple strings into a single string. It achieves this by accepting a text list and a delimiter, and then concatenating the provided texts using the specified delimiter. This node is very useful when creating a coherent string from different pieces of information, which is crucial in text processing and data preparation tasks.

# Input types
## Required
- delimiter
    - The delimiter parameter is a string used to separate the concatenated text inputs. It plays a key role in determining the final format of the output string, allowing users to control the spacing and separation between the concatenated texts.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- text1
    - The text1 parameter represents the first text input that can be concatenated with other texts. It is optional, and if provided, it will be included in the final concatenated string.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The text2 parameter is another optional text input that can be included in the concatenation process. It allows further customization of the final string.
    - Comfy dtype: STRING
    - Python dtype: str
- text3
    - The text3 parameter is an additional optional text input in the concatenation. It extends the functionality to include more text elements in the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- text4
    - The text4 parameter is another optional input that can be concatenated with other texts. It provides further flexibility in building the desired output string.
    - Comfy dtype: STRING
    - Python dtype: str
- text5
    - The text5 parameter is the last optional text input for concatenation. It provides a final chance to add text before the string is finalized.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- concatenated_text
    - The concatenated_text output is the final string obtained by concatenating all input texts using the specified delimiter. It represents the outcome of the concatenation process and is the main output of the TextConcat node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
