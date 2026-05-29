# Documentation
- Class name: WAS_Number_Input_Condition
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `number_input_condition` is designed to evaluate numerical conditions based on a set of input parameters. It performs logical operations and comparisons to determine the result, which can be a boolean or a numerical type depending on the specified return type. This node is versatile and can handle a variety of mathematical and logical operations, making it suitable for a wide range of numerical analysis tasks.

# Input types
## Required
- number_a
    - The first number used for comparison operations. It plays a key role in determining the result of the evaluated logical condition.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
- number_b
    - The second number involved in the comparison. It is essential for the logical operations performed by the node.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
## Optional
- return_boolean
    - Determines whether the method should return a boolean value (true or false) or a numerical type based on the comparison result.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: str
- comparison
    - Specifies the type of logical comparison or operation to be performed on the two numbers.
    - Comfy dtype: COMBO['and', 'or', 'greater-than', 'greater-than or equals', 'less-than', 'less-than or equals', 'equals', 'does not equal', 'divisible by', 'if A odd', 'if A even', 'if A prime', 'factor of']
    - Python dtype: str

# Output types
- result
    - The result of the logical condition evaluation, which can be a numerical value or a boolean depending on the 'return_boolean' parameter.
    - Comfy dtype: COMBO['NUMBER', 'FLOAT', 'INT']
    - Python dtype: Union[int, float, bool]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
