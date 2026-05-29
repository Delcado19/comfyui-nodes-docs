# Documentation
- Class name: RangeFloat
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The RangeFloat node is designed to create a sequence of floating-point numbers within a specified range. It generates a list of numbers from a start point to an end point with a given step size, and then selects a number from this list based on a seed value. This node is particularly useful in scenarios where randomization of numbers needs to be controlled, such as in simulation or data processing tasks.

# Input types
## Required
- start
    - The parameter 'start' defines the beginning of the range for generating numbers. It is crucial because it sets the initial point of the sequence and determines the direction of the range (whether increasing or decreasing). This parameter directly affects the output numbers and the overall behavior of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - The parameter 'end' specifies the end point of the range. It is crucial because it determines the final value in the generated sequence of numbers. The 'end' value, combined with the 'start' and 'step' parameters, determines the total number of numbers produced within the range.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- step
    - The parameter 'step' determines the increment between each consecutive number in the generated sequence. It is important because it controls the density of numbers within the range. A smaller step size results in a finer-grained output, while a larger step size leads to a coarser distribution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The parameter 'seed' is used to introduce a controllable element of randomness when selecting a number from the generated list. It is important because it ensures the selection process is reproducible and can be adjusted to obtain different results without changing the underlying range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- selected_number
    - The output 'selected_number' represents the floating-point number selected from the generated sequence. It is important because it is the main result of the node's operation and can be used for further processing or analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- representation
    - The output 'representation' provides a string representation of the selected number, which is useful for logging, display, or scenarios where text format is needed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
