# Documentation
- Class name: WanVideoScheduler
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
- sigmas
    - The sigmas output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- steps
    - The steps output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- shift
    - The shift output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scheduler
    - The scheduler output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- start_step
    - The start_step output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - The end_step output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
