# Documentation
- Class name: TextPreserve
- Category: Mikey/Text
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The TextPreserve node is designed to process and retain original text while allowing dynamic content replacement. It does this by identifying placeholders in the input text and replacing them with random or designated values, ensuring the integrity of the original message is maintained throughout the conversion process.

# Input types
## Required
- text
    - ‘text’ parameter is the node’s primary input, containing the text to be processed. It is essential because it defines the content that will undergo preservation and replacement. This parameter supports multiple lines, allowing complex and extended text input.
    - Comfy dtype: STRING
    - Python dtype: str
- result_text
    - ‘result_text’ parameter stores the processed text after node execution. It is essential because it contains the final output of the text after all replacement and preservation operations are complete.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- unique_id
    - ‘unique_id’ parameter is used to uniquely identify the node within a workflow. It is optional but can be important for tracking and managing the node’s state and output in a larger system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Union[str, None]
- extra_pnginfo
    - ‘extra_pnginfo’ parameter provides additional information that can be used to enhance text processing. It is optional and may contain metadata or other relevant details that affect node operation.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Union[str, None]
- prompt
    - ‘prompt’ parameter provides dynamic hints that guide the text replacement process. It is optional but can significantly influence node behavior by introducing context-specific replacements.
    - Comfy dtype: PROMPT
    - Python dtype: Union[str, None]

# Output types
- text
    - ‘text’ output parameter represents the final processed text after all operations. It is the ultimate representation of the node’s functionality, containing the results of preservation and replacement.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
