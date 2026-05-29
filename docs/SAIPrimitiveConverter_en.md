
# Documentation
- Class name: SAIPrimitiveConverter
- Category: SALT/Utility/Conversion
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SAIPrimitiveConverter node aims to achieve conversion between different basic data types, and can handle multiple formats such as strings, lists, and dictionaries. This node provides a flexible data type conversion solution, supports custom sub-data types, and can perform specific indexing or key-based access in complex data structures.

# Input types
## Required
- input_value
    - The original input value to be converted. It plays a key role in determining the final output result because it will be converted according to the specified output and sub-data type.
    - Comfy dtype: *
    - Python dtype: Union[str, list, dict, Any]
- output_type
    - Specifies the required output data type, guiding the conversion process and determining the structure of the result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- sub_data_type
    - Optional parameter, used to define the sub-type of conversion, further refining the conversion process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- index_or_key
    - Optional parameter, allowing indexing of lists or accessing values in dictionaries via keys, enabling precise data extraction.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - The converted data, presented in the specified output type, reflecting the conversion result applied to the input value.
    - Comfy dtype: *
    - Python dtype: Union[list, dict, str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
