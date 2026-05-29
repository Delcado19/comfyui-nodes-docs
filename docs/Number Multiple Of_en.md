# Documentation
- Class name: WAS_Number_Multiple_Of
- Category: WAS Suite/Number/Functions
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method 'number_multiple_of' aims to determine whether a given number is a multiple of another specified number. If not, the method calculates the nearest multiple. This functionality is crucial in scenarios where multiples are needed for further processing or mathematical operations.

# Input types
## Required
- number
    - The parameter 'number' is the value to check if it is a multiple of 'multiple'. It plays a key role in the node's operation as it is the subject of the multiple check and subsequent calculation.
    - Comfy dtype: NUMBER
    - Python dtype: Union[int, float]
## Optional
- multiple
    - The parameter 'multiple' defines the divisor used to determine if 'number' is a multiple. It is important because it determines the specific multiple to which 'number' is compared. The default value is 8, ensuring the node can be used without specifying this parameter.
    - Comfy dtype: INT
    - Python dtype: Optional[int]

# Output types
- result
    - The parameter 'result' represents the outcome of the 'number_multiple_of' method. If the input 'number' is not already a multiple of 'multiple', it is the nearest multiple. This result is important for any subsequent operations that require multiples.
    - Comfy dtype: COMBO[NUMBER, FLOAT, INT]
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
