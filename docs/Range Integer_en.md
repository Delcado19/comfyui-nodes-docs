# Documentation
- Class name: RangeInteger
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The RangeInteger node is designed to generate a sequence of integers within a specified range. It provides functionality to customize the start, end, and step of the sequence, as well as a seed option to reproduce the sequence. This node is essential in scenarios where integer sequences require further processing or analysis.

# Input types
## Required
- start
    - The 'start' parameter defines the beginning of the integer sequence. It is crucial as it sets the initial value for sequence generation. This parameter directly affects the range and the first element of the sequence produced by the node.
    - Comfy dtype: INT
    - Python dtype: int
- end
    - The 'end' parameter specifies the exclusive upper limit of the integer sequence. It is important as it determines the endpoint of the sequence, i.e., the value after the last element. This parameter is essential for defining the range of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- step
    - The 'step' parameter indicates the increment between each integer in the sequence. It is important as it controls the spacing of numbers within the sequence, allowing for customized progression rates. The default value is 0, which means a step of 1 if not specified.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The 'seed' parameter is used to introduce a degree of randomness control during sequence generation. It is important for ensuring the reproducibility of the sequence, which is crucial in experiments or simulations requiring consistent results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- integer
    - The 'integer' output provides one integer from the generated sequence, determined by the input parameters and the seed value. It is important as it represents the primary result of the node's operation, serving as the basis for subsequent calculations or analysis.
    - Comfy dtype: INT
    - Python dtype: int
- string
    - The 'string' output returns the string representation of the selected integer in the sequence. This output is useful when a textual representation of the integer is needed, such as for logging or display purposes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
