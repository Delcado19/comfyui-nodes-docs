# Documentation
- Class name: SeargeIntegerScaler
- Category: Searge/_deprecated_/Integers
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node scales and rounds the input integer value based on the provided factor and multiple. It ensures the output value remains an integer within the desired range and granularity.

# Input types
## Required
- value
    - The initial integer value to be scaled by the node operation. It is the foundation of the node's purpose, as it is the base value that will undergo transformation.
    - Comfy dtype: INT
    - Python dtype: int
- factor
    - The multiplier applied to the input value to determine the scale of the scaling. It is very important as it directly affects the magnitude of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- multiple_of
    - The value that the scaled result should be a multiple of, ensuring the output is rounded to the nearest acceptable value within the range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- value
    - The processed integer value, now scaled and rounded according to the input parameters, representing the final output of the node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
