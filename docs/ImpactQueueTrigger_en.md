# Documentation
- Class name: ImpactQueueTrigger
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactQueueTrigger node is designed to manage the triggering of operations in the system. When invoked with a signal and mode, it decides whether to activate a specific process by sending a command to an instance of PromptServer. This node plays a key role in controlling task flow and initiating operations based on predefined conditions.

# Input types
## Required
- signal
    - The 'signal' parameter is critical to the node's operation, as it represents the input that determines the condition for triggering the process. Its presence is required for the node to function correctly, and it directly influences the decision-making process regarding the initiation of subsequent operations.
    - Comfy dtype: any_typ
    - Python dtype: Any
## Optional
- mode
    - The 'mode' parameter is an optional toggle that specifies whether the node should trigger the associated operation. It has a default value set to True, meaning the operation is triggered by default. This parameter allows controlling the node's behavior without altering the primary input signal.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- signal_opt
    - The 'signal_opt' output represents the optimized or processed signal after node execution. It encapsulates the result of the trigger decision and forwards the signal for further use or analysis within the system.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
