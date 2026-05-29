# Documentation
- Class name: FloatRange
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node generates a series of floating-point numbers within a specified range, adjusting intervals according to user-defined parameters to facilitate various mathematical and computational tasks.

# Input types
## Required
- start
    - The starting value of the sequence. It sets the initial point from which the node begins generating numbers, which is crucial for defining the lower bound of the sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stop
    - The ending value of the sequence. It marks the upper limit of the range, determining when the node should stop generating numbers.
    - Comfy dtype: FLOAT
    - Python dtype: float
- step
    - The increment between each number in the sequence. It determines the spacing and is crucial for controlling the density of numbers generated within the range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- limit
    - The maximum number of values generated. It limits the total output, ensuring the sequence does not exceed a predefined length.
    - Comfy dtype: INT
    - Python dtype: int
- ensure_end
    - A flag indicating whether to include the end value in the sequence. If enabled, it affects the final output by ensuring the sequence includes the specified stop value.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sequence
    - A list of floating-point numbers generated within the specified range, representing the output of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
