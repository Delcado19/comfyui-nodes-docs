# Documentation
- Class name: WanVideoSetAttentionModeOverride
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Override the attention mode for the model for specific step and/or block range

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object
- attention_mode
    - The attention_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_step
    - Step to start applying the attention mode override
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - Step to end applying the attention mode override
    - Comfy dtype: INT
    - Python dtype: int
- verbose
    - Print verbose info about attention mode override during generation
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- blocks
    - The blocks input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
