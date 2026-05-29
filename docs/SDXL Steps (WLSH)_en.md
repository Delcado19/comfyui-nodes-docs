# Documentation
- Class name: WLSH_SDXL_Steps
- Category: WLSH Nodes/number
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'set_steps' method of the WLSH_SDXL_Steps node is designed to configure step size parameters for weighted least squares problems. It plays a key role in determining the sequence and intervals of steps, which can significantly affect the results of the numerical process.

# Input types
## Required
- precondition
    - The "precondition" parameter is essential for setting the initial conditions before the step sequence. It influences the starting point of the numerical process and is critical to the overall execution of the node.
    - Comfy dtype: INT
    - Python dtype: int
- base
    - The "base" parameter defines the fundamental step size value from which the derived step sequence is computed. It is a critical determinant in the calculation, directly affecting the structure of the step size pattern.
    - Comfy dtype: INT
    - Python dtype: int
- total
    - The "total" parameter specifies the total number of steps to be taken in the sequence. It is a key factor controlling the scope of the numerical operation and its computational load.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pre
    - The "pre" output reflects the initial conditions set by the "precondition" parameter, marking the starting point of the step sequence.
    - Comfy dtype: INT
    - Python dtype: int
- base
    - The "base" output corresponds to the input base step size value, representing the foundation for the step sequence calculation.
    - Comfy dtype: INT
    - Python dtype: int
- total
    - The "total" output indicates the total number of steps the program will execute, as determined by the "total" parameter.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
