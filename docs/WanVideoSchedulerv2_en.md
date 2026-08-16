# Documentation
- Class name: WanVideoSchedulerv2
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - Number of steps for the scheduler
    - Comfy dtype: INT
    - Python dtype: int
- shift
    - The shift input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_step
    - Starting step for the scheduler
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - Ending step for the scheduler
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- enhance_hf
    - Enhanced high-frequency denoising schedule
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- scheduler
    - The scheduler output is produced by this node.
    - Comfy dtype: WANVIDEOSCHEDULER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
