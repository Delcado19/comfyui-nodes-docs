# Documentation
- Class name: CR_TextReplace
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_TextReplace is a node that performs text replacement operations. It can efficiently replace specified strings in given text. This node is especially useful for preprocessing text data where consistent changes to certain patterns or strings are required.

# Input types
## Required
- text
    - The 'text' parameter is the node's main input. It is the text data that will undergo replacement operations. This parameter is essential because it is the content the node will modify.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- find1
    - The 'find1' parameter is an optional string that specifies the first substring to replace in the text. It is used with 'replace1' to define the first replacement operation.
    - Comfy dtype: STRING
    - Python dtype: str
- replace1
    - The 'replace1' parameter is the string that will replace the 'find1' substring in the text. It is optional and works with 'find1'.
    - Comfy dtype: STRING
    - Python dtype: str
- find2
    - The 'find2' parameter specifies the second substring to replace. It is part of the second find-and-replace pair within the node.
    - Comfy dtype: STRING
    - Python dtype: str
- replace2
    - The 'replace2' parameter defines the string that will replace the 'find2' substring. It is an optional component of the second replacement pair.
    - Comfy dtype: STRING
    - Python dtype: str
- find3
    - The 'find3' parameter specifies the third substring to replace. It completes the third find-and-replace action within the node.
    - Comfy dtype: STRING
    - Python dtype: str
- replace3
    - The 'replace3' parameter is the string that will replace the 'find3' substring. It is the final part of the optional replacement parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The 'STRING' output parameter represents the text after all replacement operations are complete. It is the main result of the node.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output parameter provides a URL linking to the node's documentation page, offering further assistance if needed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
