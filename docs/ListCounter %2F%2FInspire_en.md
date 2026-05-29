# Documentation
- Class name: ListCounter
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The ListCounter node is designed to incrementally count occurrences of unique identifiers, providing a method to track events or items in a sequence. It maintains counts associated with each unique identifier by using a mapping structure. This node is particularly useful for scenarios requiring sequential tracking, such as logging, event processing, or inventory management.

# Input types
## Required
- signal
    - The signal parameter represents the input that triggers the counting process. Its presence marks an event or item that needs to be counted. The importance of this parameter lies in its role as the initiating factor for the node's operation; without it, the counting mechanism will not start.
    - Comfy dtype: ANY
    - Python dtype: Any
- base_value
    - The base_value parameter serves as the initial count value from which the node starts before incrementing. It is crucial because it sets the foundation for counting and can be used to adjust the starting point of the sequence, providing flexibility in counting operations.
    - Comfy dtype: INT
    - Python dtype: int
- unique_id
    - The unique_id parameter is the key identifier used to distinguish different sequences or items being tracked. It is essential to the node's functionality because it allows differentiation and separate counting of each unique sequence or item.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- count
    - The count output reflects the current count value after the node processes the input. It represents the number of occurrences or total events counted so far. This output is important because it provides the final result of the node's operation, offering insight into the progress of the sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
