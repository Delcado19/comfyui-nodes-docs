# Documentation
- Class name: easy loadImagesForLoop
- Category: image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use

To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes.

# Input types
## Required
- directory
    - The directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- limit
    - The limit input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- initial_value1
    - The initial_value1 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- initial_value2
    - The initial_value2 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
## Hidden
- initial_value0
    - The initial_value0 input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- flow
    - The flow output is produced by this node.
    - Comfy dtype: FLOW_CONTROL
    - Python dtype: object
- index
    - The index output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- name
    - The name output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- value1
    - The value1 output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object
- value2
    - The value2 output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
