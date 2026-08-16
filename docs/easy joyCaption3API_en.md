# Documentation
- Class name: easy joyCaption3API
- Category: EasyUse/API
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- do_sample
    - The do_sample input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- caption_type
    - The caption_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- caption_length
    - The caption_length input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- extra_options
    - Extra options for the model
    - Comfy dtype: STRING
    - Python dtype: str
- name_input
    - Name input is only used if an Extra Option is selected that requires it.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_prompt
    - The custom_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- apikey_override
    - Override the API key in the local config
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- caption
    - The caption output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
