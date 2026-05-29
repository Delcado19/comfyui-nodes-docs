# Documentation
- Class name: CR_TextList
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextList node is designed to handle and manipulate text data, especially for creating lists from multi-line text input. It allows users to select a subset of text lines based on a start index and a maximum number of rows to include, providing a simplified method for text list management within the Comfyroll framework.

# Input types
## Required
- multiline_text
    - ‘multiline_text’ parameter is the node's primary input, accepting text blocks that may contain multiple lines. It plays a key role in determining the source material for the list to be generated.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - ‘start_index’ parameter specifies the position in the text where list generation should begin. It is important for controlling the starting point of text lines included in the final list.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - ‘max_rows’ parameter sets the limit on the number of text lines to include in the list. It is important for defining the scope of text data processed and returned by the node.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- selected_rows
    - ‘selected_rows’ output contains the text lines selected according to the input parameters. It represents the core result of the node's operation, encapsulating the processed text data.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - ‘show_help’ output provides a URL link to documentation for further help or guidance on using the node. It is a valuable resource for users seeking more information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
