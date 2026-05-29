# Documentation
- Class name: CharacterInText
- Category: ♾️Mixlab/GPT
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node facilitates identifying specific characters in text and calculating their indices. It processes text data to determine the frequency of a given character from a specified index, providing a simple yet effective measure for text analysis tasks.

# Input types
## Required
- text
    - The text parameter is critical as it is the source to verify character existence. It serves as the node's primary input to achieve its purpose.
    - Comfy dtype: STRING
    - Python dtype: str
- character
    - The character parameter is essential for the node, determining which specific character it searches for in the text. It defines the search focus and influences the node's operational outcome.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start index parameter defines where the node begins searching for the character in the text. It affects the search scope and resulting index values.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The output result represents the indices of the specified character in the text, starting from the given start index. It is a direct output reflecting the node's core function and quantifies character presence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
