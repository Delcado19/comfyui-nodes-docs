# Documentation
- Class name: MaqueradeIncrementerNode
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The Disguise Increment Node performs a simple yet crucial operation in the data processing pipeline. It takes a seed value and a maximum value, applying modulo arithmetic to keep the output within the specified range. This node is essential for maintaining the integrity and order of data sequences, especially in looping patterns or scenarios where bounded values are critical.

# Input types
## Required
- seed
    - The "seed" parameter is the starting point of the increment operation. It is vital because it determines the initial value from which the node begins calculation. The seed ensures reproducibility and consistency of the output, particularly in iterative processes or simulations.
    - Comfy dtype: INT
    - Python dtype: int
- max_value
    - The "maximum" parameter defines the upper bound of the increment operation. It is important because it prevents the output from exceeding a threshold, which is essential for keeping data valid within the expected range. This parameter plays a key role in controlling the node's output range.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The "result" output is the outcome of applying modulo arithmetic to the input seed and maximum value. It represents a value constrained to the specified range, suitable for applications requiring cyclic or bounded numeric data.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
