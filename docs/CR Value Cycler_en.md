# Documentation
- Class name: CR_ValueCycler
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ValueCycler is a node that iterates over a list of string values, converting each string to both floating-point and integer representations. It loops through the provided text values, repeating the process a specified number of times, and cycles through the list within the set iteration count. This node is especially useful for handling text-formatted numeric data, making it easier to process and analyze in subsequent operations.

# Input types
## Required
- values
    - ‘values’ parameter is a multiline string that contains the numeric data to process. It is critical because it serves as the input data set for the node's iteration and conversion to numeric formats.
    - Comfy dtype: STRING
    - Python dtype: str
- repeats
    - ‘repeats’ parameter indicates how many times the node will repeat the loop for each item in the list. It is important because it controls the scope of data processing and may affect the output size.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- loops
    - ‘loops’ parameter specifies the total number of times the loop processing will occur. It is an optional setting that can be used to further control the node's operation and output generation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- FLOAT
    - ‘FLOAT’ output provides a list of the input text values converted to floating-point numbers, facilitating numeric analysis and processing.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- INT
    - ‘INT’ output consists of the input text values converted to integers, providing another numeric format for data processing.
    - Comfy dtype: INT
    - Python dtype: List[int]
- show_text
    - ‘show_text’ output is a string that provides a link to the node documentation, helping users understand the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ValueCycler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'values': ('STRING', {'multiline': True, 'default': ''}), 'repeats': ('INT', {'default': 1, 'min': 1, 'max': 99999}), 'loops': ('INT', {'default': 1, 'min': 1, 'max': 99999})}}
    RETURN_TYPES = ('FLOAT', 'INT', 'STRING')
    RETURN_NAMES = ('FLOAT', 'INT', 'show_text')
    OUTPUT_IS_LIST = (True, True, False)
    FUNCTION = 'cycle'
    CATEGORY = icons.get('Comfyroll/List')

    def cycle(self, values, repeats, loops=1):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-value-cycler'
        lines = values.split('\n')
        float_list_out = []
        int_list_out = []
        for i in range(loops):
            for _ in range(repeats):
                for text_item in lines:
                    if all((char.isdigit() or char == '.' for char in text_item.strip())):
                        float_list_out.append(float(text_item))
                        int_list_out.append(int(float(text_item)))
        return (float_list_out, int_list_out, show_help)
```