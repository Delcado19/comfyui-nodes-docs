# Documentation
- Class name: Workflow Input Value (Image Saver)
- Category: ImageSaver/utils
- Output node: False
- Repo Ref: https://github.com/alexopus/ComfyUI-Image-Saver

Extract an input value from the workflow by node ID and input name

# Input types
## Required
- node_id
    - The ID of the node to extract from
    - Comfy dtype: STRING
    - Python dtype: str
- input_name
    - The name of the input to extract
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- value
    - Input value from the specified node
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/alexopus/ComfyUI-Image-Saver)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
