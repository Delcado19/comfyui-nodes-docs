# Documentation
- Class name: CR_TextConcatenate
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextConcatenate node is designed to merge two separate text strings into a single string. It achieves this by inserting a specified separator between the two input texts, effectively combining them into a coherent sequence. This node is particularly useful when creating unified text blocks from multiple sources, which can play a key role in various text processing tasks.

# Input types
## Required
- text1
    - The parameter 'text1' represents the first text string to be concatenated. It plays a key role in determining the initial content of the final output. The node's execution is directly influenced by the content and length of this parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The parameter 'text2' is the second text string to be concatenated with 'text1'. It is essential in forming the final output, as it provides the subsequent part of the text sequence.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- separator
    - The parameter 'separator' defines the string that will be inserted between 'text1' and 'text2'. It is important in controlling the formatting of the concatenated text, allowing users to customize spacing and delimiters as needed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The output 'STRING' is the result of concatenating 'text1' and 'text2' using the provided 'separator'. It represents the combined text and is the primary output of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
