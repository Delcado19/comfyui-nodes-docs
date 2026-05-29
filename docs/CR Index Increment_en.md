# Documentation
- Class name: CR_IncrementIndex
- Category: Comfyroll/Utils/Index
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_IncrementIndex node is designed to perform a simple yet critical operation in data processing and iteration tasks. It accepts an initial index and an interval value, then increments the index by the specified interval. This functionality is essential for traversing positions in lists, arrays, or any sequential data structure. The node also provides a link to the documentation so users can access further guidance when needed.

# Input types
## Required
- index
    - The "index" parameter is the starting point for the increment operation. It is important because it determines where the increment begins. This parameter is critical for ensuring correct sequence order and indexing in subsequent operations.
    - Comfy dtype: INT
    - Python dtype: int
- interval
    - The "interval" parameter defines the step size by which the index will be incremented. It is important because it determines the spacing between incremented values, affecting how the numerical sequence is generated.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- index
    - The "index" output reflects the new position after the original index has been incremented by the interval. It is essential for maintaining correct progression through a data sequence.
    - Comfy dtype: INT
    - Python dtype: int
- interval
    - The "interval" output is the same as the input interval, representing the step size used for the increment. It can be used in further operations that require the interval value.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The "show_help" output provides a URL link to the node documentation, giving users a direct reference for more detailed information and guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
