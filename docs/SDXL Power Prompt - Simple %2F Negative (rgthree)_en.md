# Documentation
- Class name: SDXL Power Prompt - Simple / Negative (rgthree)
- Category: rgthree
- Output node: False
- Repo Ref: https://github.com/rgthree/rgthree-comfy

Making ComfyUI more comfortable.

# Input types
## Required
- prompt_g
    - The prompt_g input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_l
    - The prompt_l input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- opt_clip
    - The opt_clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- opt_clip_width
    - The opt_clip_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- opt_clip_height
    - The opt_clip_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- insert_embedding
    - The insert_embedding input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- insert_saved
    - The insert_saved input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- target_width
    - The target_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- crop_width
    - The crop_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- crop_height
    - The crop_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- values_insert_saved
    - The values_insert_saved input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- TEXT_G
    - The TEXT_G output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- TEXT_L
    - The TEXT_L output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/rgthree/rgthree-comfy)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
