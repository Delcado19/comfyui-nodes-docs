# Documentation
- Class name: LayerUtility: TextImage V2
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- font_file
    - The font_file input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- spacing
    - The spacing input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- leading
    - The leading input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- horizontal_border
    - The horizontal_border input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vertical_border
    - The vertical_border input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- variation_range
    - The variation_range input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- variation_seed
    - The variation_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- layout
    - The layout input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- text_color
    - The text_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- background_color
    - The background_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
