# Documentation
- Class name: WAS_Constant_Number
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Constant_Number node is designed to generate a constant based on a specified type. It provides a flexible way to return a number in different formats (such as integer, float, or boolean) depending on the input parameters. This node is particularly useful in scenarios where a constant value is needed for further processing or analysis.

# Input types
## Required
- number_type
    - The 'number_type' parameter defines the type of constant to be generated. It is critical because it determines the output format. The node will generate an integer, float, or boolean based on this parameter.
    - Comfy dtype: COMBO['integer', 'float', 'bool']
    - Python dtype: str
- number
    - The 'number' parameter is the base value used by the node to generate the constant. It plays an important role in determining the final output of the node, as the returned value is derived from this input.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- number_as_text
    - The optional 'number_as_text' parameter allows the node to interpret the input as a textual representation of a number, which can then be converted to the specified numeric type. This provides flexibility for numeric input.
    - Comfy dtype: str
    - Python dtype: Optional[str]

# Output types
- constant_number
    - The output 'constant_number' represents the constant generated in the specified type. It is the primary result of the node's operation and is important for any subsequent tasks that require this constant value.
    - Comfy dtype: COMBO[INT, FLOAT, NUMBER]
    - Python dtype: Union[int, float, bool]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
