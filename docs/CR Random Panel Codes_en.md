# Documentation
- Class name: CR_RandomPanelCodes
- Category: Comfyroll/Utils/Random
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_RandomPanelCodes is a node that generates a list of random panel codes based on user-defined parameters. It operates by creating a specified number of rows, each containing a string of characters of a given length. The node ensures output randomness by using a seed for the random number generator and allows customization of the character set used to form the codes.

# Input types
## Required
- seed
- The seed parameter initializes the random number generator, ensuring that generated random codes are reproducible. It plays a key role in node execution by providing a consistent starting point for the randomization process, which is essential for generating the same code set across different runs.
    - Comfy dtype: INT
    - Python dtype: int
- rows
- The rows parameter determines the number of rows in the generated panel codes. It directly affects the quantity of codes produced by the node. Adjusting this parameter lets users control output size to meet specific code generation needs.
    - Comfy dtype: INT
    - Python dtype: int
- string_length
- The string_length parameter specifies the length of each string in the generated panel codes. It is important because it determines the complexity and uniqueness of each code. Changing this parameter allows users to influence the level of detail in the produced codes.
    - Comfy dtype: INT
    - Python dtype: int
- values
- The values parameter defines the character set used to construct the panel codes. It is crucial because it determines the pool of characters for code generation. This parameter enables customization of code composition to suit various application requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- multiline_text
- The multiline_text output contains the generated panel codes arranged in multiple lines, providing a readable and organized format for users. This output is important as it represents the primary result of the node's operation, encapsulating the random codes in a structured manner.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
- The show_help output provides a URL link to the node documentation. This is useful for users seeking additional information or guidance on how to use the node effectively. It serves as a direct reference to the node documentation, facilitating usage and understanding.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
