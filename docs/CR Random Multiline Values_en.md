# Documentation
- Class name: CR_RandomMultilineValues
- Category: Comfyroll/Utils/Random
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_RandomMultilineValues node is designed to generate random multiline text based on specified value types and formatting options. It can produce strings in various formats such as binary, decimal, natural numbers, hexadecimal, letters, alphanumeric, or custom. The node allows setting the number of lines and the length of each line string, ensuring the output is highly versatile and adjustable for different use cases.

# Input types
## Required
- seed
    - seed parameter is used to initialize the random number generator to produce reproducible results. It is crucial for ensuring consistency in the generated random text, especially when debugging or needing the same sequence of random values.
    - Comfy dtype: INT
    - Python dtype: int
- value_type
    - value_type parameter determines the format of the generated text. It can be set to binary, decimal, natural numbers, hexadecimal, letters, alphanumeric, or custom, which determines the character set used for random text generation.
    - Comfy dtype: STRING
    - Python dtype: str
- rows
    - line_count parameter specifies the number of lines in the generated text. It directly affects the length of the output, allowing users to control the amount of generated data.
    - Comfy dtype: INT
    - Python dtype: int
- string_length
    - string_length parameter defines the number of characters per line in the generated text. It is essential for setting the granularity of individual text strings.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- custom_values
    - When the value type is set to custom, the custom_values parameter allows users to define their own character set for generating random text. This provides flexibility for specific use cases that require non-standard character sets.
    - Comfy dtype: STRING
    - Python dtype: str
- prepend_text
    - prepend_text parameter adds a fixed string at the beginning of each line in the generated text. This is useful for adding a prefix to the output, which may be important for formatting or contextual purposes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- multiline_text
    - multiline_text output contains the generated random text, formatted as multiple lines according to the specified line_count and string_length parameters. It represents the primary result of the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - show_help output provides a URL link to the node's documentation page, offering users additional information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
