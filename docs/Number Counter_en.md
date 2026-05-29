# Documentation
- Class name: WAS_Number_Counter
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Number_Counter node is designed to manage and operate numerical values based on a specified mode of operation. It efficiently handles counting operations involving incrementing, decrementing, and boundary control. This node is particularly useful for applications requiring sequential generation or iterative numerical adjustment.

# Input types
## Required
- number_type
    - The 'number_type' parameter determines the type of numerical value the node will process, which can be either integer or float. This choice affects the precision and the types of arithmetic operations that can be performed.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The 'mode' parameter indicates how the node will modify the counter value. It can be set to increment, decrement, increment to stop, or decrement to stop, which is essential for controlling counting behavior.
    - Comfy dtype: STRING
    - Python dtype: str
- start
    - The 'start' parameter sets the initial value of the counter. This is a fundamental setting that establishes the starting point for all counting operations performed by the node.
    - Comfy dtype: FLOAT
    - Python dtype: Union[int, float]
- stop
    - The 'stop' parameter defines the boundary value for counting operations. When this value is reached, incrementing or decrementing will halt according to the selected mode.
    - Comfy dtype: FLOAT
    - Python dtype: Union[int, float]
- step
    - The 'step' parameter specifies the increment or decrement value applied to the counter during each operation. It directly affects the rate of change in the numerical sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unique_id
    - The 'unique_id' parameter is a unique identifier for each counter managed by the node. It ensures that each counting operation is independently tracked and manipulated.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
## Optional
- reset_bool
    - The 'reset_bool' parameter allows the counter to be reset to its initial value when set to a value greater than or equal to 1. It provides a way to restart counting operations.
    - Comfy dtype: NUMBER
    - Python dtype: Optional[Union[int, bool]]

# Output types
- number
    - The 'number' output provides the integer representation of the current counter value after the operation. It is particularly useful when integer precision is required.
    - Comfy dtype: INT
    - Python dtype: int
- float
    - The 'float' output provides the floating-point representation of the current counter value. It is suitable for scenarios requiring decimal precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- int
    - The 'int' output returns the integer value of the counter, similar to the 'number' output, ensuring the result is presented as an integer type.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
