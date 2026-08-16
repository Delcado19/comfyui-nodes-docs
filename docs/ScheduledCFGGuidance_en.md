# Documentation
- Class name: ScheduledCFGGuidance
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- GUIDER
    - The GUIDER output is produced by this node.
    - Comfy dtype: GUIDER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
