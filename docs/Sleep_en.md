
# Documentation
- Class name: Sleep
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Sleep node introduces a pause of a specified duration in the workflow. It allows users to precisely control the delay by setting minutes and seconds, enabling scheduled pauses during execution. This feature is useful for controlling processing speed, simulating real operation intervals, or waiting for other resources to become ready.

# Input types
## Required
- input
    - This is a placeholder input that is returned as-is after the delay ends. It ensures data continuity during node operations, preventing data flow interruption due to the pause.
    - Comfy dtype: *
    - Python dtype: any
- minutes
    - Specifies the integer number of minutes for the delay. Together with seconds, it forms the total delay time, providing coarse-grained time control.
    - Comfy dtype: INT
    - Python dtype: int
- seconds
    - Specifies the fractional minutes (actually seconds) for the delay. Together with minutes, it precisely defines the total delay time, allowing finer-grained time adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- *
    - After the specified delay, the input data is returned unchanged. This output is essentially data transmission with a time delay.
    - Comfy dtype: *
    - Python dtype: any


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
