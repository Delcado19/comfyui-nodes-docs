# Documentation
- Class name: ImpactQueueTriggerCountdown
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactQueueTriggerCountdown node is designed to manage the countdown and trigger mechanism in the queue system. It advances the count and decides whether to trigger an event based on the total count and current mode. This node plays a key role in controlling the operation flow in queue-based workflows.

# Input types
## Required
- count
    - The parameter 'count' is used to track the current position in the countdown sequence. It is crucial for determining the progress of the queue and the timing of triggering events.
    - Comfy dtype: INT
    - Python dtype: int
- total
    - The parameter 'total' defines the maximum count before the trigger condition is met. It is important for setting the expected number of steps in the countdown process.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The parameter 'mode' determines whether the node should trigger an event. It is an important switch that controls the activation state of the countdown mechanism.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- unique_id
    - The parameter 'unique_id' is used to identify the node in the system for feedback and queue management. It plays a crucial role in ensuring accurate communication and tracking in the workflow.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- signal
    - The parameter 'signal' is an optional input that can be used to pass additional information or control to the node. It provides flexibility for the node's operation.
    - Comfy dtype: ANY
    - Python dtype: Any

# Output types
- signal_opt
    - The output 'signal_opt' allows the node to optionally pass a signal, which can be used for further processing or communication in the system.
    - Comfy dtype: ANY
    - Python dtype: Any
- count
    - The output 'count' reflects the updated count after the node's operation. It is important for tracking the progress of the countdown in the queue.
    - Comfy dtype: INT
    - Python dtype: int
- total
    - The output 'total' provides the total count value, which is essential for understanding the remaining steps in the countdown sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
