# Documentation
- Class name: WanVideoPromptExtender
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- qwen
    - The qwen input is used by this node during execution.
    - Comfy dtype: QWENMODEL
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_new_tokens
    - Maximum number of new tokens to generate.
    - Comfy dtype: INT
    - Python dtype: int
- device
    - Device to run the model on. Default uses the main device.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- force_offload
    - Force offload the model to the offload device after generation. Useful for large models.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- system_prompt
    - System prompt to use for the model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_system_prompt
    - Custom system prompt to use instead of the predefined ones.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
