# Documentation
- Class name: StepsScheduleHookProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The StepsScheduleHookProvider node is designed to facilitate the creation and management of scheduling hooks for iterative processes. It abstracts the complexity of defining schedules, allowing users to specify the schedule type and target steps for the iterative process. The main role of this node is to instantiate the appropriate scheduling hook based on user selection, thus simplifying the setup of iterative workflows.

# Input types
## Required
- schedule_for_iteration
    - The parameter 'schedule_for_iteration' is crucial for determining the type of scheduling hook to use. It decides the behavior of the iterative process by selecting from predefined schedules. This parameter directly affects the node's execution strategy and the resulting scheduling pattern.
    - Comfy dtype: STRING
    - Python dtype: str
- target_steps
    - The parameter 'target_steps' defines the number of steps to take in the iterative process. It is a key factor in controlling the duration and scope of the process. This parameter is essential for adjusting the node's operation to meet specific requirements or constraints of the current task.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- hook
    - The output 'hook' is a scheduling hook object that encapsulates the logic for managing the iterative process according to the specified schedule and target steps. It is important because it represents the node's primary output for controlling the iterative workflow.
    - Comfy dtype: PK_HOOK
    - Python dtype: PixelKSampleHook

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
