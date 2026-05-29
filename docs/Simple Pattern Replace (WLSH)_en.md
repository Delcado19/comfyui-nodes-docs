# Documentation
- Class name: WLSH_Simple_Pattern_Replace
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node can replace specific patterns in a text string with entries from the provided list, enhancing the diversity of text processing operations.

# Input types
## Required
- input_string
    - The input_string parameter is the text to identify and replace patterns. It is crucial for the node's operation as it is the basis for all replacement activities.
    - Comfy dtype: STRING
    - Python dtype: str
- list_string
    - The list_string parameter provides a pool of strings for replacing identified patterns. It plays a key role in determining the diversity and randomness of replacements.
    - Comfy dtype: STRING
    - Python dtype: str
- pattern
    - The pattern parameter defines the specific sequence or structure in the text that needs to be replaced. It is crucial for guiding the node's search and replacement process.
    - Comfy dtype: STRING
    - Python dtype: str
- delimiter
    - The delimiter parameter is used to split list_string into individual elements, which can then be optionally used to replace identified patterns. It is important for organizing replacement options.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - The seed parameter initializes the random number generator during the replacement process, ensuring replacements are reproducible. It contributes to the predictability and consistency of the node's output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The node's output is a modified version of the input string, where identified patterns are replaced with elements from list_string, reflecting the node's text transformation capability.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
