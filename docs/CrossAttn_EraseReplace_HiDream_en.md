# Documentation
- Class name: CrossAttn_EraseReplace_HiDream
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

CrossAttn_EraseReplace_HiDream is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- t5xxl_erase
    - The t5xxl_erase input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- llama_erase
    - The llama_erase input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- t5xxl_replace
    - The t5xxl_replace input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- llama_replace
    - The llama_replace input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- t5xxl_erase_token
    - The t5xxl_erase_token input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- llama_erase_token
    - The llama_erase_token input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- t5xxl_replace_token
    - The t5xxl_replace_token input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- llama_replace_token
    - The llama_replace_token input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
