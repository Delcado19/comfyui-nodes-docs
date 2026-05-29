# Documentation
- Class name: StringSelector
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The StringSelector node is designed to process and select specific strings from a given input. It can handle multiline strings and provides an option to enable or disable multiline processing. The main purpose of this node is to extract specific strings based on selection criteria, offering a versatile string manipulation method within the ImpactPack utility suite.

# Input types
## Required
- strings
    - The 'strings' parameter is the primary input for the node, containing the string data to be processed. It plays a critical role in the node's operation, as it is the source from which selected strings will be extracted. The multiline option allows processing of strings spanning multiple lines, enhancing the node's versatility in handling different string formats.
    - Comfy dtype: STRING
    - Python dtype: str
- select
    - The 'select' parameter is used to specify the index of the string or line to be selected from the input. It is crucial for determining which part of the input data will be the node's output. The selection index is applied using modulo arithmetic on the number of lines or elements, ensuring it wraps around if it exceeds available options.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- multiline
    - The 'multiline' parameter determines whether the node should treat the input string as a single entity or process it as multiple lines. When enabled, it allows the node to handle strings with newline characters and make selections based on the content within those lines. This parameter significantly affects the node's behavior and the outcome of the string selection process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_string
    - The 'selected_string' output represents the string selected based on the input parameters. It is the result of the node's processing, reflecting the outcome of the string manipulation performed by the node. This output is important as it is the final product of the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StringSelector:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'strings': ('STRING', {'multiline': True}), 'multiline': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'select': ('INT', {'min': 0, 'max': sys.maxsize, 'step': 1, 'default': 0})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, strings, multiline, select):
        lines = strings.split('\n')
        if multiline:
            result = []
            current_string = ''
            for line in lines:
                if line.startswith('#'):
                    if current_string:
                        result.append(current_string.strip())
                        current_string = ''
                current_string += line + '\n'
            if current_string:
                result.append(current_string.strip())
            if len(result) == 0:
                selected = strings
            else:
                selected = result[select % len(result)]
            if selected.startswith('#'):
                selected = selected[1:]
        elif len(lines) == 0:
            selected = strings
        else:
            selected = lines[select % len(lines)]
        return (selected,)
```