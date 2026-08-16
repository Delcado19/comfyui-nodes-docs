# Documentation
- Class name: LayerUtility: NameToColor
- Category: 😺dzNodes/LayerColor
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- color_name
    - The color_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- palette
    - The palette input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- in_palette_only
    - The in_palette_only input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- default_color
    - The default_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- size
    - The size input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_width
    - The custom_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - The custom_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- size_as
    - The size_as input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- color
    - The color output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
