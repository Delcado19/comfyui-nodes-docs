# Documentation
- Class name: CR_BinaryToBitList
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_BinaryToBitList node aims to convert a binary string into a list of individual bits. It accepts a binary string as input and outputs a list where each element corresponds to a bit in the input string. This node is particularly useful for handling binary data in a more granular and accessible way.

# Input types
## Required
- bit_string
    - The "bit_string" parameter is a required input that expects a string containing binary data. This string is the main data source for the node's operation, and converting it to a list of bits is the core functionality of the node. Correct formatting of the binary string is crucial for the node to work as intended.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- list_out
    - The "list_out" output is a list of strings, where each string represents a bit derived from the input binary string. This output allows users to manipulate and analyze binary data at the bit level, facilitating operations such as data encoding, decoding, or conversion.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The "show_help" output provides a URL link to documentation for more help information. It directs users to a GitHub wiki page where they can find more information on how to use the node and its related features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
