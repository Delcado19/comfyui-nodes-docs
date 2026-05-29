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
```
class CR_RandomMultilineValues:

    @classmethod
    def INPUT_TYPES(cls):
        types = ['binary', 'decimal', 'natural', 'hexadecimal', 'alphabetic', 'alphanumeric', 'custom']
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'value_type': (types,), 'rows': ('INT', {'default': 5, 'min': 1, 'max': 2048}), 'string_length': ('INT', {'default': 5, 'min': 1, 'max': 1024}), 'custom_values': ('STRING', {'multiline': False, 'default': '123ABC'}), 'prepend_text': ('STRING', {'multiline': False, 'default': ''})}}
    RETURN_TYPES = (any_type, 'STRING')
    RETURN_NAMES = ('multiline_text', 'show_help')
    FUNCTION = 'generate'
    CATEGORY = icons.get('Comfyroll/Utils/Random')

    def generate(self, value_type, rows, string_length, custom_values, seed, prepend_text):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-random-multiline-values'
        random.seed(seed)
        if value_type == 'binary':
            choice_str = '01'
        elif value_type == 'decimal':
            choice_str = '0123456789'
        elif value_type == 'natural':
            choice_str = '123456789'
        elif value_type == 'hexadecimal':
            choice_str = '0123456789ABCDEF'
        elif value_type == 'alphabetic':
            choice_str = string.ascii_letters
        elif value_type == 'alphanumeric':
            choice_str = string.ascii_letters + string.digits
        elif value_type == 'custom':
            choice_str = custom_values
        else:
            pass
        multiline_text = '\n'.join([prepend_text + ''.join((random.choice(choice_str) for _ in range(string_length))) for _ in range(rows)])
        return (multiline_text, show_help)
```