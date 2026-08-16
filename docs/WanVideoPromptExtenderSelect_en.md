# Documentation
- Class name: WanVideoPromptExtenderSelect
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_new_tokens
    - Maximum number of new tokens to generate.
    - Comfy dtype: INT
    - Python dtype: int
- system_prompt
    - System prompt to use for the model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- custom_system_prompt
    - Custom system prompt to use instead of the predefined ones.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- extender_args
    - The extender_args output is produced by this node.
    - Comfy dtype: WANVIDEOPROMPTEXTENDER_ARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
