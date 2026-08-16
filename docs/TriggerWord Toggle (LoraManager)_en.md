# Documentation
- Class name: TriggerWord Toggle (LoraManager)
- Category: Lora Manager/utils
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Toggle trigger words on/off

# Input types
## Required
- group_mode
    - When enabled, treats each group of trigger words as a single toggleable unit.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- default_active
    - Sets the default initial state (active or inactive) when trigger words are added.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_strength_adjustment
    - Enable mouse wheel adjustment of each trigger word's strength.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- id
    - The id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- filtered_trigger_words
    - The filtered_trigger_words output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
