# Documentation
- Class name: ClownScheduler
- Category: RES4LYF/schedulers
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownScheduler is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- pad_start_value
    - The pad_start_value input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_value
    - The start_value input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_value
    - The end_value input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pad_end_value
    - The pad_end_value input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler_start_step
    - The scheduler_start_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- scheduler_end_step
    - The scheduler_end_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- total_steps
    - The total_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- flip_schedule
    - The flip_schedule input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Output types
- sigmas
    - The sigmas output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
