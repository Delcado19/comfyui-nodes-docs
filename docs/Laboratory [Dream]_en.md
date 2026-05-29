
# Documentation
- Class name: `Laboratory [Dream]`
- Category: `✨ Dream/🛠 utils`
- Output node: `False`
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Laboratory [Dream] node is specifically designed to generate and manipulate numerical values based on multiple modes such as uniform random, bell-curve random, step, and random walk. It enables dynamic value generation within a specified range, making it a versatile tool for experimentation and simulation in creative projects.

# Input types
## Required
- frame_counter
    - A counter tracking the current frame in the sequence, essential for determining when to update generated values based on the specified strategy.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- key
    - A unique identifier for the generated value, supporting default randomization to ensure uniqueness. It plays a key role in tracking and retrieving values across frames.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Determines the starting point for random number generation, enabling reproducible results. Critical for consistency in simulations or regenerating values.
    - Comfy dtype: INT
    - Python dtype: int
- renew_policy
    - Defines the strategy for updating generated values, influencing how frequently new values are produced based on frame changes or initial generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- min_value
    - Sets the lower bound for generated values, essential for defining the value range and ensuring outputs stay within expected limits.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_value
    - Establishes the upper bound for generated values, critical for controlling the range and precision of outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - Specifies the method for value generation, influencing the distribution and variation of output values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- step_size
    - Determines the increment size between values in certain modes, affecting the granularity and smoothness of value transitions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- FLOAT
    - The primary generated floating-point value, serving as a versatile output for various applications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - The integer representation of the primary generated value, providing discrete options for specific needs.
    - Comfy dtype: INT
    - Python dtype: int
- log_entry
    - A detailed log entry documenting the generation or reuse of a value, providing insight and traceability for debugging and analysis.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry.ID


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
