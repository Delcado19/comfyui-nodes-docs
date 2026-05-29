# Documentation
- Class name: SeargeConditioningMuxer2
- Category: Searge/_deprecated_/FlowControl
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a conditional multiplexer, selecting one of two conditional inputs based on the selector value. It is designed to route the appropriate input to the output in the data flow, enabling conditional data processing.

# Input types
## Required
- input0
    - The first conditional input, which the node will consider for selection.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input1
    - The second conditional input, serving as an alternative to the first input.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- input_selector
    - The selector parameter, determining which conditional input will be routed to the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The conditional input selected based on the input_selector value.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
