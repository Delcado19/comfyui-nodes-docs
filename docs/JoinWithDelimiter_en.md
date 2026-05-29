# Documentation
- Class name: JoinWithDelimiter
- Category: ♾️Mixlab/Prompt
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node concatenates a list of text strings into a single string, using the specified delimiter to separate items. It is designed to simplify text combination, offering a direct solution for creating unified text output from multiple inputs.

# Input types
## Required
- text_list
    - List of text strings to concatenate. This parameter is crucial because it forms the basis of the node's operation, determining the content and quantity of text to be merged.
    - Comfy dtype: ANY
    - Python dtype: List[str]
- delimiter
    - Character or string used to separate elements in text_list. The choice of delimiter affects the readability and structure of the resulting string.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- result
    - Final concatenated string, where all text_list elements are joined together using the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
