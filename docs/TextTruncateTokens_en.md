# Documentation
- Class name: TextTruncateTokens
- Category: RES4LYF/text
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

TextTruncateTokens is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- truncate_words_to
    - The truncate_words_to input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- truncate_clip_l_to
    - The truncate_clip_l_to input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- truncate_clip_g_to
    - The truncate_clip_g_to input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- truncate_t5_to
    - The truncate_t5_to input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object

# Output types
- text_words
    - The text_words output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- text_clip_l
    - The text_clip_l output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- text_clip_g
    - The text_clip_g output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- text_t5
    - The text_t5 output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
